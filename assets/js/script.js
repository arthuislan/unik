(function () {
  const translations = {
    en: {
      'nav.services': 'Services', 'nav.about': 'About', 'nav.contact': 'Contact',
      'cta.quote': 'Request a Quote', 'cta.call': 'Call Now',
      'hero.badge': 'Professional Cleaning Services',
      'hero.title': 'Clean spaces with a refined touch.',
      'hero.text': 'Unik Naples provides reliable, detail-oriented cleaning services in Naples, Florida, with care, discretion and professionalism.',
      'hero.note': 'For faster service, send your name, preferred contact method and the type of cleaning you need.',
      'contact.contact': 'Contact', 'contact.phone': 'Phone / WhatsApp', 'contact.email': 'Email',
      'services.title': 'Cleaning services for homes and spaces that deserve care.',
      'services.text': 'Choose the service you need today. Details can be adjusted according to your space and schedule.',
      'service.house.title': 'House Cleaning', 'service.house.text': 'Regular cleaning for homes, apartments and private spaces.',
      'service.deep.title': 'Deep Cleaning', 'service.deep.text': 'A more detailed cleaning for areas that need extra attention.',
      'service.move.title': 'Move In / Move Out', 'service.move.text': 'Cleaning support before moving in or after moving out.',
      'service.vacation.title': 'Vacation Rental Cleaning', 'service.vacation.text': 'Cleaning preparation for short-term rental properties.',
      'service.office.title': 'Office Cleaning', 'service.office.text': 'Professional cleaning for small offices and workspaces.',
      'service.custom.title': 'Custom Cleaning', 'service.custom.text': 'Tell us what you need and we will prepare a personalized quote.',
      'about.title': 'Why choose Unik?',
      'about.text': 'Because every space has its own rhythm, details and needs. Unik Naples works with attention, respect and consistency to deliver a clean, comfortable and welcoming environment.',
      'about.reliable.title': 'Reliable', 'about.reliable.text': 'Clear communication and commitment to scheduled service.',
      'about.detail.title': 'Detail-Oriented', 'about.detail.text': 'Careful attention to the areas that make a real difference.',
      'about.local.title': 'Local', 'about.local.text': 'Serving Naples, Florida.',
      'about.professional.title': 'Professional', 'about.professional.text': 'Respectful service for your home, office or rental property.',
      'quote.badge': 'Fast response in Naples', 'quote.title': 'Request a quote today.',
      'quote.text': 'Tell us what you need and Unik Naples will contact you with care, clarity and attention to detail.',
      'quote.note': 'Prefer direct contact? Use the floating buttons at the bottom of the page.',
      'form.name': 'Name', 'form.namePlaceholder': 'Your name',
      'form.phone': 'Phone', 'form.email': 'Email', 'form.emailPlaceholder': 'name@email.com',
      'form.service': 'Service Needed', 'form.message': 'Message', 'form.messagePlaceholder': 'Tell us what you need',
      'form.security': 'To avoid spam, this form checks the phone, email and message before sending.',
      'form.submit': 'Send Quote Request',
      'form.sending': 'Sending...', 'form.sent': 'Your request was sent successfully. We will contact you soon.', 'form.failed': 'We could not send the request. Please call or text us directly.',
      'thank.title': 'Thank you.', 'thank.text': 'Your request was sent successfully.', 'thank.back': 'Back to Unik Naples',
      'footer.text': 'Professional Cleaning Services in Naples, Florida.',
      'footer.copy': '© 2026 Unik Naples. All rights reserved.',
      'error.name': 'Please enter a real name with at least 2 letters.',
      'error.phone': 'Please enter a valid U.S. phone number with 10 digits.',
      'error.email': 'Please enter a valid email address.',
      'error.message': 'Please write a short message with at least 12 characters.',
      'error.wait': 'Please wait a few seconds before sending another request.'
    },
    es: {
      'nav.services': 'Servicios', 'nav.about': 'Nosotros', 'nav.contact': 'Contacto',
      'cta.quote': 'Solicitar presupuesto', 'cta.call': 'Llamar ahora',
      'hero.badge': 'Servicios profesionales de limpieza',
      'hero.title': 'Espacios limpios con un toque refinado.',
      'hero.text': 'Unik Naples ofrece servicios de limpieza confiables y detallados en Naples, Florida, con cuidado, discreción y profesionalismo.',
      'hero.note': 'Para una respuesta más rápida, envíe su nombre, método de contacto preferido y el tipo de limpieza que necesita.',
      'contact.contact': 'Contacto', 'contact.phone': 'Teléfono / WhatsApp', 'contact.email': 'Correo electrónico',
      'services.title': 'Servicios de limpieza para hogares y espacios que merecen cuidado.',
      'services.text': 'Elija el servicio que necesita hoy. Los detalles pueden ajustarse según su espacio y horario.',
      'service.house.title': 'Limpieza de casas', 'service.house.text': 'Limpieza regular para casas, apartamentos y espacios privados.',
      'service.deep.title': 'Limpieza profunda', 'service.deep.text': 'Una limpieza más detallada para áreas que necesitan atención adicional.',
      'service.move.title': 'Mudanza de entrada / salida', 'service.move.text': 'Apoyo de limpieza antes de mudarse o después de salir.',
      'service.vacation.title': 'Limpieza de alquiler vacacional', 'service.vacation.text': 'Preparación de limpieza para propiedades de renta a corto plazo.',
      'service.office.title': 'Limpieza de oficinas', 'service.office.text': 'Limpieza profesional para pequeñas oficinas y espacios de trabajo.',
      'service.custom.title': 'Limpieza personalizada', 'service.custom.text': 'Díganos lo que necesita y prepararemos un presupuesto personalizado.',
      'about.title': '¿Por qué elegir Unik?',
      'about.text': 'Porque cada espacio tiene su propio ritmo, detalles y necesidades. Unik Naples trabaja con atención, respeto y constancia para entregar un ambiente limpio, cómodo y acogedor.',
      'about.reliable.title': 'Confiable', 'about.reliable.text': 'Comunicación clara y compromiso con el servicio programado.',
      'about.detail.title': 'Atención al detalle', 'about.detail.text': 'Cuidado especial en las áreas que realmente hacen la diferencia.',
      'about.local.title': 'Local', 'about.local.text': 'Atendiendo Naples, Florida.',
      'about.professional.title': 'Profesional', 'about.professional.text': 'Servicio respetuoso para su hogar, oficina o propiedad de alquiler.',
      'quote.badge': 'Respuesta rápida en Naples', 'quote.title': 'Solicite un presupuesto hoy.',
      'quote.text': 'Cuéntenos lo que necesita y Unik Naples se comunicará con usted con cuidado, claridad y atención al detalle.',
      'quote.note': '¿Prefiere contacto directo? Use los botones flotantes al final de la página.',
      'form.name': 'Nombre', 'form.namePlaceholder': 'Su nombre',
      'form.phone': 'Teléfono', 'form.email': 'Correo electrónico', 'form.emailPlaceholder': 'nombre@email.com',
      'form.service': 'Servicio necesario', 'form.message': 'Mensaje', 'form.messagePlaceholder': 'Cuéntenos lo que necesita',
      'form.security': 'Para evitar spam, este formulario verifica el teléfono, el correo electrónico y el mensaje antes de enviar.',
      'form.submit': 'Enviar solicitud',
      'form.sending': 'Enviando...', 'form.sent': 'Su solicitud fue enviada correctamente. Nos comunicaremos pronto.', 'form.failed': 'No pudimos enviar la solicitud. Llámenos o envíenos un mensaje directamente.',
      'thank.title': 'Gracias.', 'thank.text': 'Su solicitud fue enviada correctamente.', 'thank.back': 'Volver a Unik Naples',
      'footer.text': 'Servicios profesionales de limpieza en Naples, Florida.',
      'footer.copy': '© 2026 Unik Naples. Todos los derechos reservados.',
      'error.name': 'Ingrese un nombre real con al menos 2 letras.',
      'error.phone': 'Ingrese un número válido de EE. UU. con 10 dígitos.',
      'error.email': 'Ingrese un correo electrónico válido.',
      'error.message': 'Escriba un mensaje corto con al menos 12 caracteres.',
      'error.wait': 'Espere unos segundos antes de enviar otra solicitud.'
    },
    pt: {
      'nav.services': 'Serviços', 'nav.about': 'Sobre', 'nav.contact': 'Contato',
      'cta.quote': 'Solicitar orçamento', 'cta.call': 'Ligar agora',
      'hero.badge': 'Serviços profissionais de limpeza',
      'hero.title': 'Ambientes limpos com um toque refinado.',
      'hero.text': 'A Unik Naples oferece serviços de limpeza confiáveis e detalhistas em Naples, Florida, com cuidado, discrição e profissionalismo.',
      'hero.note': 'Para atendimento mais rápido, envie seu nome, forma de contato preferida e o tipo de limpeza que você precisa.',
      'contact.contact': 'Contato', 'contact.phone': 'Telefone / WhatsApp', 'contact.email': 'E-mail',
      'services.title': 'Serviços de limpeza para casas e espaços que merecem cuidado.',
      'services.text': 'Escolha o serviço que você precisa hoje. Os detalhes podem ser ajustados de acordo com seu espaço e sua agenda.',
      'service.house.title': 'Limpeza residencial', 'service.house.text': 'Limpeza regular para casas, apartamentos e espaços privados.',
      'service.deep.title': 'Limpeza profunda', 'service.deep.text': 'Uma limpeza mais detalhada para áreas que precisam de atenção extra.',
      'service.move.title': 'Mudança entrada / saída', 'service.move.text': 'Apoio de limpeza antes da mudança ou depois da saída.',
      'service.vacation.title': 'Limpeza para aluguel de temporada', 'service.vacation.text': 'Preparação de limpeza para imóveis de aluguel de curta duração.',
      'service.office.title': 'Limpeza de escritório', 'service.office.text': 'Limpeza profissional para pequenos escritórios e espaços de trabalho.',
      'service.custom.title': 'Limpeza personalizada', 'service.custom.text': 'Diga o que você precisa e prepararemos um orçamento personalizado.',
      'about.title': 'Por que escolher a Unik?',
      'about.text': 'Porque cada espaço tem seu próprio ritmo, detalhes e necessidades. A Unik Naples trabalha com atenção, respeito e constância para entregar um ambiente limpo, confortável e acolhedor.',
      'about.reliable.title': 'Confiável', 'about.reliable.text': 'Comunicação clara e compromisso com o serviço agendado.',
      'about.detail.title': 'Detalhista', 'about.detail.text': 'Atenção cuidadosa às áreas que realmente fazem diferença.',
      'about.local.title': 'Local', 'about.local.text': 'Atendendo Naples, Florida.',
      'about.professional.title': 'Profissional', 'about.professional.text': 'Serviço respeitoso para sua casa, escritório ou imóvel de aluguel.',
      'quote.badge': 'Resposta rápida em Naples', 'quote.title': 'Solicite um orçamento hoje.',
      'quote.text': 'Conte o que você precisa e a Unik Naples entrará em contato com cuidado, clareza e atenção aos detalhes.',
      'quote.note': 'Prefere contato direto? Use os botões flutuantes no final da página.',
      'form.name': 'Nome', 'form.namePlaceholder': 'Seu nome',
      'form.phone': 'Telefone', 'form.email': 'E-mail', 'form.emailPlaceholder': 'nome@email.com',
      'form.service': 'Serviço necessário', 'form.message': 'Mensagem', 'form.messagePlaceholder': 'Conte o que você precisa',
      'form.security': 'Para evitar spam, este formulário verifica telefone, e-mail e mensagem antes do envio.',
      'form.submit': 'Enviar solicitação',
      'form.sending': 'Enviando...', 'form.sent': 'Sua solicitação foi enviada com sucesso. Entraremos em contato em breve.', 'form.failed': 'Não foi possível enviar a solicitação. Ligue ou envie uma mensagem diretamente.',
      'thank.title': 'Obrigado.', 'thank.text': 'Sua solicitação foi enviada com sucesso.', 'thank.back': 'Voltar para Unik Naples',
      'footer.text': 'Serviços profissionais de limpeza em Naples, Florida.',
      'footer.copy': '© 2026 Unik Naples. Todos os direitos reservados.',
      'error.name': 'Digite um nome real com pelo menos 2 letras.',
      'error.phone': 'Digite um telefone válido dos EUA com 10 dígitos.',
      'error.email': 'Digite um e-mail válido.',
      'error.message': 'Escreva uma mensagem curta com pelo menos 12 caracteres.',
      'error.wait': 'Aguarde alguns segundos antes de enviar outra solicitação.'
    }
  };

  let currentLang = localStorage.getItem('unikLang') || 'en';

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) || translations.en[key] || key;
  }

  function setLanguage(lang) {
    currentLang = translations[lang] ? lang : 'en';
    localStorage.setItem('unikLang', currentLang);
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : currentLang;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      element.textContent = t(element.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      element.setAttribute('placeholder', t(element.getAttribute('data-i18n-placeholder')));
    });
    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.classList.toggle('active', button.getAttribute('data-lang') === currentLang);
    });
  }

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.getAttribute('data-lang')));
  });

  const form = document.querySelector('#quote-form');
  if (!form) {
    setLanguage(currentLang);
    return;
  }

  const fields = {
    name: document.querySelector('#name'),
    phone: document.querySelector('#phone'),
    email: document.querySelector('#email'),
    message: document.querySelector('#message')
  };

  const errors = {
    name: document.querySelector('#name-error'),
    phone: document.querySelector('#phone-error'),
    email: document.querySelector('#email-error'),
    message: document.querySelector('#message-error')
  };

  function digitsOnly(value) {
    return value.replace(/\D/g, '');
  }

  function formatUSPhone(value) {
    let digits = digitsOnly(value);
    if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
    digits = digits.slice(0, 10);
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }

  function setError(fieldName, message) {
    const field = fields[fieldName];
    const error = errors[fieldName];
    field.classList.toggle('input-error', Boolean(message));
    if (error) error.textContent = message || '';
  }

  function isValidName(value) {
    return /^[A-Za-zÀ-ÿ' .-]{2,70}$/.test(value.trim());
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
  }

  function isValidUSPhone(value) {
    let digits = digitsOnly(value);
    if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
    return digits.length === 10 && !/^(\d)\1{9}$/.test(digits) && /^[2-9]\d{2}/.test(digits) && /^\d{3}[2-9]\d{2}/.test(digits);
  }

  function validateForm() {
    let valid = true;
    if (!isValidName(fields.name.value)) { setError('name', t('error.name')); valid = false; } else { setError('name', ''); }
    if (!isValidUSPhone(fields.phone.value)) { setError('phone', t('error.phone')); valid = false; } else { setError('phone', ''); }
    if (!isValidEmail(fields.email.value)) { setError('email', t('error.email')); valid = false; } else { setError('email', ''); }
    if (fields.message.value.trim().length < 12) { setError('message', t('error.message')); valid = false; } else { setError('message', ''); }

    const lastSubmit = Number(localStorage.getItem('unikLastSubmit') || 0);
    if ((Date.now() - lastSubmit) / 1000 < 20) {
      alert(t('error.wait'));
      valid = false;
    }
    return valid;
  }

  fields.phone.addEventListener('input', function () {
    fields.phone.value = formatUSPhone(fields.phone.value);
  });

  Object.values(fields).forEach((field) => field.addEventListener('blur', validateForm));

  const submitButton = form.querySelector('button[type="submit"]');
  const thankPanel = document.querySelector('#thank-you');

  function showFormStatus(type, message) {
    if (!thankPanel) return;
    thankPanel.classList.remove('success', 'error');
    thankPanel.classList.add(type === 'error' ? 'error' : 'success');
    thankPanel.innerHTML = type === 'error'
      ? `<strong>${message}</strong>`
      : `<strong>${t('thank.title')}</strong> <span>${message}</span>`;
    thankPanel.hidden = false;
    thankPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const originalButtonText = submitButton ? submitButton.textContent : '';
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = t('form.sending');
    }

    const originalPhone = fields.phone.value;
    let digits = digitsOnly(fields.phone.value);
    if (digits.length === 10) fields.phone.value = `+1${digits}`;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      localStorage.setItem('unikLastSubmit', String(Date.now()));
      form.reset();
      fields.phone.value = '';
      showFormStatus('success', t('form.sent'));
    } catch (error) {
      fields.phone.value = originalPhone;
      showFormStatus('error', t('form.failed'));
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText || t('form.submit');
      }
    }
  });

  setLanguage(currentLang);
})();
