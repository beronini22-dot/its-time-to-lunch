const translations = {
  index: {
    ka: {
      pageTitle: 'IT’s Time To Lunch | ლანჩი და ქეითერინგი',
      metaDescription: 'ლანჩისა და ქეითერინგის სერვისი კომპანიებისთვის — სწრაფი, გემრიელი და სანდო მომსახურება.',
      ogDescription: 'ოფისის ლანჩი და ქეითერინგი — სწრაფი შეკვეთა, სტაბილური ხარისხი.',
      topbarText: 'შეკვეთები 24/7 • სწრაფი კოორდინაცია',
      navHome: 'მთავარი', navOffice: 'ოფისის ლანჩი', navCatering: 'ქეითერინგი', navCorporate: 'კორპორატიული', navFaq: 'FAQ', navOrder: 'შეკვეთა',
      badge: 'ორენოვანი ვერსია + ცოცხალი ვიზუალი',
      heroTitle: 'ლანჩი და ქეითერინგი, რომელიც თქვენს გუნდს ენერგიას აძლევს',
      heroLead: 'ახლა საიტი უკვე მუშაობს ქართულადაც და ინგლისურადაც, აქვს უფრო ცოცხალი ფონი და ვიზუალურად ბევრად უფრო მიმზიდველი პირველი შთაბეჭდილება.',
      ctaPrimary: 'შეკვეთის დაწყება', ctaWhatsapp: 'WhatsApp',
      whyTitle: 'რატომ IT’s Time To Lunch?',
      why1: 'დროული მიწოდება და სტაბილური ხარისხი', why2: 'კორპორატიული მენიუები სხვადასხვა ბიუჯეტისთვის', why3: 'ღონისძიებების სრული ქეითერინგ მომსახურება', why4: 'სწრაფი კომუნიკაცია:',
      stat1Label: 'დროულად მიწოდებული შეკვეთები', stat2Label: 'კორპორატიული მომსახურება თვეში', stat3Label: 'კლიენტების საშუალო შეფასება',
      servicesTitle: 'ძირითადი სერვისები', service1Title: 'ოფისის ლანჩი', service1Text: 'ყოველდღიური ან კვირეული გეგმები კომპანიებისთვის, დაბალანსებული მენიუთი.', service2Title: 'ქეითერინგი', service2Text: 'შეხვედრები, ტრენინგები, პრეზენტაციები და კერძო ღონისძიებები სრული სერვისით.', service3Title: 'კორპორატიული პაკეტები', service3Text: 'ინდივიდუალური კონტრაქტები: ფასები, სიხშირე და სერვისი თქვენი ბიზნეს-პროცესის მიხედვით.',
      processTitle: 'როგორ მუშაობს შეკვეთა?', process1Title: '1) მოთხოვნა', process1Text: 'გვირეკავთ ან ავსებთ ფორმას 1 წუთში.', process2Title: '2) შეთავაზება', process2Text: 'გიგზავნით მორგებულ მენიუს და ბიუჯეტს.', process3Title: '3) მიწოდება', process3Text: 'ზუსტად შეთანხმებულ დროს ადგილზე ვაწვდით.', process4Title: '4) მხარდაჭერა', process4Text: 'ფიდბექის საფუძველზე ვაუმჯობესებთ ყოველ ციკლში.',
      menuTitle: 'მენიუს მაგალითები', menu1Title: 'დღის ლანჩი', menu1Text: 'წვნიანი + ძირითადი კერძი + სალათი', menu1Price: '₾18-დან', menu2Title: 'ბიზნეს პაკეტი', menu2Text: '2 ძირითადი, 2 სალათი, დესერტი, სასმელი', menu2Price: '₾32-დან', menu3Title: 'ივენთ ქეითერინგი', menu3Text: 'ბუფეტი სტუმრების რაოდენობის მიხედვით', menu3Price: 'ინდივიდუალური ფასი',
      reviewsTitle: 'რას ამბობენ ჩვენი კლიენტები', review1: '„კომუნიკაცია სწრაფია და მიწოდება ყოველთვის დროული.“', review2: '„ქეითერინგის სერვისი ძალიან მოწესრიგებული იყო, სტუმრები კმაყოფილი დარჩნენ.“', review3: '„ფასი/ხარისხი იდეალურ ბალანსშია ჩვენი გუნდისთვის.“',
      faqTitle: 'ხშირად დასმული კითხვები', faq1Q: 'რამდენი ხნით ადრე უნდა შევუკვეთოთ?', faq1A: 'სტანდარტულად 24 საათით ადრე, დიდი ღონისძიებისთვის 48-72 საათი.', faq2Q: 'აკეთებთ ინდივიდუალურ მენიუს?', faq2A: 'დიახ, ვამზადებთ მორგებულ შეთავაზებას დიეტური/ვეგეტარიანული არჩევანითაც.', faq3Q: 'რომელ ლოკაციებზე მუშაობთ?', faq3A: 'თბილისი სრულად + მიმდებარე ზონები წინასწარი შეთანხმებით.',
      orderTitle: 'ონლაინ შეკვეთის მოთხოვნა', orderLead: 'შეავსეთ ფორმა და დაგიკავშირდებით მოკლე დროში კონკრეტული შეთავაზებით.', workHours: 'სამუშაო საათები:', workHoursValue: 'ორშ–კვი 09:00–20:00', serviceZone: 'მომსახურების ზონა:', serviceZoneValue: 'თბილისი და შემოგარენი', fastContact: 'სწრაფი კავშირი:', callBtn: 'დარეკვა', whatsappBtn: 'WhatsApp შეტყობინება',
      formCompany: 'კომპანიის სახელი', formContact: 'საკონტაქტო პირი', formPhone: 'ტელეფონი', formService: 'მომსახურება', formNotes: 'დამატებითი ინფორმაცია', formSubmit: 'მოთხოვნის გაგზავნა',
      companyPlaceholder: 'მაგ. LunchPoint LLC', contactPlaceholder: 'სახელი გვარი', phonePlaceholder: '+995 ...', notesPlaceholder: 'სტუმრების რაოდენობა, თარიღი, ლოკაცია...', servicePlaceholder: 'აირჩიეთ სერვისი', footer: '© 2026 IT’s Time To Lunch — Wherever You Are', whatsappFloat: 'WhatsApp'
    },
    en: {
      pageTitle: 'IT’s Time To Lunch | Lunch & Catering',
      metaDescription: 'Lunch and catering services for companies — fast, tasty, and reliable.',
      ogDescription: 'Office lunch and catering with quick ordering and dependable quality.',
      topbarText: 'Orders 24/7 • Fast coordination',
      navHome: 'Home', navOffice: 'Office Lunch', navCatering: 'Catering', navCorporate: 'Corporate', navFaq: 'FAQ', navOrder: 'Order',
      badge: 'Bilingual version + richer visuals',
      heroTitle: 'Lunch and catering that keeps your team energized',
      heroLead: 'The site now works in both Georgian and English, with a more vibrant background and a much more attractive first impression.',
      ctaPrimary: 'Start an Order', ctaWhatsapp: 'WhatsApp',
      whyTitle: 'Why IT’s Time To Lunch?',
      why1: 'On-time delivery with consistent quality', why2: 'Corporate menus for different budgets', why3: 'Full-service catering for events', why4: 'Fast communication:',
      stat1Label: 'On-time delivered orders', stat2Label: 'Corporate services per month', stat3Label: 'Average customer rating',
      servicesTitle: 'Core Services', service1Title: 'Office Lunch', service1Text: 'Daily or weekly meal plans for companies with balanced menus.', service2Title: 'Catering', service2Text: 'Full service for meetings, training sessions, presentations, and private events.', service3Title: 'Corporate Packages', service3Text: 'Custom contracts with pricing, frequency, and service tailored to your workflow.',
      processTitle: 'How ordering works', process1Title: '1) Request', process1Text: 'Call us or fill out the form in one minute.', process2Title: '2) Proposal', process2Text: 'We send you a tailored menu and budget.', process3Title: '3) Delivery', process3Text: 'We deliver exactly at the agreed time.', process4Title: '4) Support', process4Text: 'We improve each cycle based on your feedback.',
      menuTitle: 'Sample Menus', menu1Title: 'Daily Lunch', menu1Text: 'Soup + main dish + salad', menu1Price: 'from ₾18', menu2Title: 'Business Package', menu2Text: '2 mains, 2 salads, dessert, drink', menu2Price: 'from ₾32', menu3Title: 'Event Catering', menu3Text: 'Buffet setup based on guest count', menu3Price: 'Custom pricing',
      reviewsTitle: 'What our clients say', review1: '“Communication is quick and delivery is always on time.”', review2: '“The catering service was very organized and our guests were delighted.”', review3: '“The price-to-quality balance is excellent for our team.”',
      faqTitle: 'Frequently Asked Questions', faq1Q: 'How early should we place an order?', faq1A: 'Typically 24 hours in advance, and 48–72 hours for larger events.', faq2Q: 'Do you offer custom menus?', faq2A: 'Yes, we prepare tailored proposals including dietary and vegetarian options.', faq3Q: 'Which locations do you serve?', faq3A: 'All of Tbilisi plus nearby areas by prior agreement.',
      orderTitle: 'Online Order Request', orderLead: 'Fill out the form and we will contact you shortly with a tailored offer.', workHours: 'Working hours:', workHoursValue: 'Mon–Sun 09:00–20:00', serviceZone: 'Service area:', serviceZoneValue: 'Tbilisi and nearby areas', fastContact: 'Fast contact:', callBtn: 'Call Now', whatsappBtn: 'Send WhatsApp Message',
      formCompany: 'Company Name', formContact: 'Contact Person', formPhone: 'Phone', formService: 'Service', formNotes: 'Additional Information', formSubmit: 'Send Request',
      companyPlaceholder: 'e.g. LunchPoint LLC', contactPlaceholder: 'Full name', phonePlaceholder: '+995 ...', notesPlaceholder: 'Guest count, date, location...', servicePlaceholder: 'Select a service', footer: '© 2026 IT’s Time To Lunch — Wherever You Are', whatsappFloat: 'WhatsApp'
    }
  },
  office: {
    ka: {
      pageTitle: 'ოფისის ლანჩი | IT’s Time To Lunch', topbarText: 'შეკვეთები 24/7 • IT’s Time To Lunch', navHome: 'მთავარი', navOffice: 'ოფისის ლანჩი', navCatering: 'ქეითერინგი', navCorporate: 'კორპორატიული', introBadge: 'ორენოვანი გვერდი', pageTitleMain: 'ოფისის ლანჩი', pageLead: 'ყოველდღიური და ყოველკვირეული მენიუ ოფისებისთვის. ვამზადებთ თქვენს გუნდზე მორგებულ შეთავაზებას, ბიუჯეტის და პორციის მიხედვით.', languageNote: 'ამ გვერდზე შეგიძლიათ გადართოთ ქართული/ინგლისური ვერსია ზედა ნაწილში.', contactTitle: 'სწრაფი შეთავაზებისთვის დაგვირეკეთ ან მოგვწერეთ:', footer: '© 2026 IT’s Time To Lunch', whatsappFloat: 'WhatsApp'
    },
    en: {
      pageTitle: 'Office Lunch | IT’s Time To Lunch', topbarText: 'Orders 24/7 • IT’s Time To Lunch', navHome: 'Home', navOffice: 'Office Lunch', navCatering: 'Catering', navCorporate: 'Corporate', introBadge: 'Bilingual page', pageTitleMain: 'Office Lunch', pageLead: 'Daily and weekly office meal plans tailored to your team, budget, and portion needs.', languageNote: 'You can switch between Georgian and English using the language toggle above.', contactTitle: 'Call or message us for a fast proposal:', footer: '© 2026 IT’s Time To Lunch', whatsappFloat: 'WhatsApp'
    }
  },
  catering: {
    ka: {
      pageTitle: 'ქეითერინგი | IT’s Time To Lunch', topbarText: 'შეკვეთები 24/7 • IT’s Time To Lunch', navHome: 'მთავარი', navOffice: 'ოფისის ლანჩი', navCatering: 'ქეითერინგი', navCorporate: 'კორპორატიული', introBadge: 'ორენოვანი გვერდი', pageTitleMain: 'ქეითერინგი', pageLead: 'კორპორატიული და კერძო ღონისძიებებისთვის სრული კვებითი მომსახურება: მენიუ, სერვირება და დროული ლოჯისტიკა.', languageNote: 'ეს გვერდი უკვე ხელმისაწვდომია როგორც ქართულად, ისე ინგლისურად.', contactTitle: 'სწრაფი შეთავაზებისთვის დაგვირეკეთ ან მოგვწერეთ:', footer: '© 2026 IT’s Time To Lunch', whatsappFloat: 'WhatsApp'
    },
    en: {
      pageTitle: 'Catering | IT’s Time To Lunch', topbarText: 'Orders 24/7 • IT’s Time To Lunch', navHome: 'Home', navOffice: 'Office Lunch', navCatering: 'Catering', navCorporate: 'Corporate', introBadge: 'Bilingual page', pageTitleMain: 'Catering', pageLead: 'Full food service for corporate and private events, including menu planning, serving format, and on-time logistics.', languageNote: 'This page is now available in both Georgian and English.', contactTitle: 'Call or message us for a fast proposal:', footer: '© 2026 IT’s Time To Lunch', whatsappFloat: 'WhatsApp'
    }
  },
  corporate: {
    ka: {
      pageTitle: 'კორპორატიული შეთავაზებები | IT’s Time To Lunch', topbarText: 'შეკვეთები 24/7 • IT’s Time To Lunch', navHome: 'მთავარი', navOffice: 'ოფისის ლანჩი', navCatering: 'ქეითერინგი', navCorporate: 'კორპორატიული', introBadge: 'ორენოვანი გვერდი', pageTitleMain: 'კორპორატიული შეთავაზებები', pageLead: 'ფიქსირებული პარტნიორობა კომპანიებისთვის: თვიური პაკეტები, მრავალლოკაციური მიწოდება და SLA-ზე დაფუძნებული მომსახურება.', languageNote: 'ქართული და ინგლისური ვერსიები უკვე ჩაშენებულია ამ გვერდზეც.', contactTitle: 'სწრაფი შეთავაზებისთვის დაგვირეკეთ ან მოგვწერეთ:', footer: '© 2026 IT’s Time To Lunch', whatsappFloat: 'WhatsApp'
    },
    en: {
      pageTitle: 'Corporate Solutions | IT’s Time To Lunch', topbarText: 'Orders 24/7 • IT’s Time To Lunch', navHome: 'Home', navOffice: 'Office Lunch', navCatering: 'Catering', navCorporate: 'Corporate', introBadge: 'Bilingual page', pageTitleMain: 'Corporate Solutions', pageLead: 'Structured partnerships for companies with monthly packages, multi-location delivery, and SLA-based service.', languageNote: 'Georgian and English versions are available on this page as well.', contactTitle: 'Call or message us for a fast proposal:', footer: '© 2026 IT’s Time To Lunch', whatsappFloat: 'WhatsApp'
    }
  }
};

function setTextContent(element, value) {
  if (!element || value === undefined) return;
  element.textContent = value;
}

function setLanguage(lang) {
  const page = document.body.dataset.page;
  const dictionary = translations[page]?.[lang] || translations[page]?.ka;
  if (!dictionary) return;

  document.documentElement.lang = lang === 'en' ? 'en' : 'ka';
  document.title = dictionary.pageTitle || document.title;

  const description = document.querySelector('meta[name="description"]');
  if (description && dictionary.metaDescription) description.setAttribute('content', dictionary.metaDescription);

  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription && dictionary.ogDescription) ogDescription.setAttribute('content', dictionary.ogDescription);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key] !== undefined) {
      element.setAttribute('placeholder', dictionary[key]);
    }
  });

  document.querySelectorAll('[data-i18n-option]').forEach((element) => {
    const key = element.dataset.i18nOption;
    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
    button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
  });

  localStorage.setItem('ittl-language', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('ittl-language') || 'ka';
  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });
  setLanguage(savedLanguage);
});
