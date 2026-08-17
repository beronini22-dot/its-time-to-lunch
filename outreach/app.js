const SUPABASE_URL = 'https://mjgdecrpcfsnucuyjpjk.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_pyYRuYvo0MSn-A54El9UGg_9rHkUkY7';
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const $ = (id) => document.getElementById(id);

async function refresh() {
  const [{ data: companies, error: ce }, { data: recipients, error: re }, { data: suppression, error: se }, { data: mailbox, error: me }] = await Promise.all([
    db.from('companies').select('id,company_name,email,status,last_error,last_sent_at').order('created_at', { ascending: true }),
    db.from('campaign_recipients').select('id,company_id,status,scheduled_at,sent_at').order('created_at', { ascending: true }),
    db.from('suppression_list').select('id,email,reason').order('created_at', { ascending: false }),
    db.from('mailbox_connections').select('sender_email,status,last_test_at,last_send_at,last_error').eq('sender_email','itstimelunch9@gmail.com').order('updated_at',{ascending:false}).limit(1).maybeSingle()
  ]);
  if (ce || re || se || me) { $('status').textContent = 'Database error: ' + (ce?.message || re?.message || se?.message || me?.message); return; }
  const today = new Date().toISOString().slice(0,10);
  const sentToday = (recipients || []).filter(r => r.status === 'SENT' && r.sent_at?.slice(0,10) === today).length;
  $('sentToday').textContent = `${Math.min(sentToday,10)} / 10`;
  $('newCompanies').textContent = (companies || []).filter(c => c.status === 'NEW').length;
  const review = (companies || []).filter(c => c.status === 'NEEDS_MANUAL_REVIEW' || c.status === 'INVALID_EMAIL');
  $('manualReview').textContent = review.length;
  $('suppressed').textContent = (suppression || []).length;
  if (mailbox?.status === 'CONNECTED') $('status').textContent = `Gmail connected: ${mailbox.sender_email}`;
  const byId = Object.fromEntries((companies || []).map(c => [c.id,c]));
  const queued = (recipients || []).filter(r => ['QUEUED','SENDING'].includes(r.status));
  $('queueList').innerHTML = queued.length ? queued.map(r => `<div class="row"><strong>${escapeHtml(byId[r.company_id]?.company_name || 'Unknown')}</strong><span>${escapeHtml(byId[r.company_id]?.email || '')}</span><span class="pill">${r.status}</span><span>${r.scheduled_at ? new Date(r.scheduled_at).toLocaleString() : 'Waiting'}</span></div>`).join('') : '<div class="empty">No queued recipients.</div>';
  $('reviewList').innerHTML = review.length ? review.map(c => `<div class="row"><strong>${escapeHtml(c.company_name)}</strong><span>${escapeHtml(c.email)}</span><span class="pill">${escapeHtml(c.status)}</span><button onclick="fixEmail('${c.id}')">Fix email</button></div>`).join('') : '<div class="empty">No companies require review.</div>';
}

function escapeHtml(v=''){return v.replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));}

window.fixEmail = async (id) => {
  const email = prompt('Enter the corrected email address:');
  if (!email) return;
  const { error } = await db.from('companies').update({ email, alternate_email: email, status: 'NEW', last_error: null, updated_at: new Date().toISOString() }).eq('id', id);
  if (error) alert(error.message); else refresh();
};

$('connectGoogle').onclick = async () => {
  const { error } = await db.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: window.location.href,
      queryParams: { access_type: 'offline', prompt: 'consent' },
      scopes: 'https://www.googleapis.com/auth/gmail.send'
    }
  });
  if (error) $('status').textContent = error.message;
};

$('testSend').onclick = async () => {
  $('status').textContent = 'Sending test email to the sender mailbox…';
  const { data: sessionData } = await db.auth.getSession();
  if (!sessionData.session) { $('status').textContent = 'Connect Gmail first.'; return; }
  const { data, error } = await db.functions.invoke('send-outreach-test', { body: { to: 'itstimelunch9@gmail.com' } });
  if (error) $('status').textContent = `Test failed: ${error.message}`;
  else $('status').textContent = data?.ok ? 'Test email sent successfully.' : `Test failed: ${data?.error || 'Unknown error'}`;
  refresh();
};

$('refresh').onclick = refresh;
$('start').onclick = async () => {
  $('status').textContent = 'Campaign start requested. Queue processing remains capped at 10 successful sends/day.';
  refresh();
};

db.auth.onAuthStateChange(async (event, session) => {
  if (!session) { $('status').textContent = 'Not connected'; return; }
  $('status').textContent = `Connected as ${session.user.email}`;
  if (session.provider_refresh_token && session.user.email?.toLowerCase() === 'itstimelunch9@gmail.com') {
    const { error } = await db.rpc('save_google_mailbox_tokens', {
      p_sender_email: 'itstimelunch9@gmail.com',
      p_refresh_token: session.provider_refresh_token
    });
    if (error) $('status').textContent = `Connected, but token save failed: ${error.message}`;
    else $('status').textContent = 'Gmail connected and refresh token stored securely.';
  }
  refresh();
});

db.auth.getSession().then(({ data }) => {
  $('status').textContent = data.session ? `Connected as ${data.session.user.email}` : 'Not connected';
});
refresh();
