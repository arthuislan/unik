(function () {
  const translations = {
    en: {
      'nav.services': 'Services', 'nav.about': 'About', 'nav.contact': 'Contact',
      'cta.quote': 'Request a Quote', 'cta.call': 'Call Now',
      'hero.badge': 'UNIK CLEANING PERSONAL CARE AND ORGANIZATION LLC.',
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
      'form.submit': 'Send Quote Request', 'form.sending': 'Sending your request...', 'form.cancel': 'Cancel & Edit', 'form.processingTitle': 'Preparing your request...', 'form.processingText': 'Please wait while we securely prepare your information for our team. You may cancel and edit before it is sent.', 'form.submitError': 'We could not send your request right now. Please try again or contact us directly by phone, WhatsApp or email.',
      'form.successTitle': 'Thank you! Your request has been sent successfully.', 'form.successText': 'Our team will review your information carefully and contact you as soon as possible by phone or email. Thank you for choosing UNIK Cleaning Personal Care and Organization LLC.', 'form.errorTitle': 'Submission not completed.', 'form.cancelled': 'Submission cancelled. You can review your information and send it when you are ready.',
      'thank.title': 'Thank you.', 'thank.text': 'Your request was sent successfully.', 'thank.back': 'Back to Unik Naples',
      'footer.text': 'UNIK CLEANING PERSONAL CARE AND ORGANIZATION LLC. in Naples, Florida.',
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
      'form.submit': 'Enviar solicitud', 'form.sending': 'Enviando su solicitud...', 'form.cancel': 'Cancelar y editar', 'form.processingTitle': 'Preparando su solicitud...', 'form.processingText': 'Espere mientras preparamos de forma segura su información para nuestro equipo. Puede cancelar y editar antes de enviarla.', 'form.submitError': 'No pudimos enviar su solicitud en este momento. Inténtelo nuevamente o contáctenos directamente por teléfono, WhatsApp o correo electrónico.',
      'form.successTitle': '¡Gracias! Su solicitud fue enviada correctamente.', 'form.successText': 'Nuestro equipo revisará su información cuidadosamente y se comunicará con usted lo antes posible por teléfono o correo electrónico. Gracias por elegir UNIK Cleaning Personal Care and Organization LLC.', 'form.errorTitle': 'Envío no completado.', 'form.cancelled': 'Envío cancelado. Puede revisar su información y enviarla cuando esté listo.',
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
      'form.submit': 'Enviar solicitação', 'form.sending': 'Enviando sua solicitação...', 'form.cancel': 'Cancelar e editar', 'form.processingTitle': 'Preparando sua solicitação...', 'form.processingText': 'Aguarde enquanto preparamos suas informações com segurança para nossa equipe. Você pode cancelar e editar antes do envio.', 'form.submitError': 'Não conseguimos enviar sua solicitação agora. Tente novamente ou entre em contato diretamente por telefone, WhatsApp ou e-mail.',
      'form.successTitle': 'Obrigado! Sua solicitação foi enviada com sucesso.', 'form.successText': 'Nossa equipe analisará suas informações com cuidado e entrará em contato o mais breve possível por telefone ou e-mail. Obrigado por escolher a UNIK Cleaning Personal Care and Organization LLC.', 'form.errorTitle': 'Envio não concluído.', 'form.cancelled': 'Envio cancelado. Você pode revisar suas informações e enviar quando estiver pronto.',
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


  function getHeaderOffset() {
    const header = document.querySelector('header');
    return header ? Math.ceil(header.getBoundingClientRect().height + 24) : 96;
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset - getHeaderOffset();
      window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
      history.pushState(null, '', href);
    });
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
  const cancelButton = form.querySelector('#cancel-submit');
  const formActions = form.querySelector('.form-actions');
  const feedbackPanel = document.querySelector('#form-feedback');
  const feedbackTitle = document.querySelector('#form-feedback-title');
  const feedbackText = document.querySelector('#form-feedback-text');
  let activeRequestController = null;
  let pendingSubmitTimer = null;
  let pendingCountdownInterval = null;
  const PRE_SEND_DELAY_MS = 20000;

  function showFeedback(type, title, text) {
    if (!feedbackPanel) return;
    feedbackPanel.classList.remove('success', 'error', 'neutral', 'processing', 'visible');
    feedbackPanel.classList.add(type, 'visible');
    feedbackPanel.hidden = false;
    if (feedbackTitle) feedbackTitle.textContent = title;
    if (feedbackText) feedbackText.textContent = text;
    feedbackPanel.setAttribute('tabindex', '-1');
    if (type === 'processing') {
      feedbackPanel.setAttribute('aria-busy', 'true');
    } else {
      feedbackPanel.removeAttribute('aria-busy');
    }
  }

  function hideFeedback() {
    if (!feedbackPanel) return;
    feedbackPanel.classList.remove('visible', 'success', 'error', 'neutral', 'processing');
    feedbackPanel.removeAttribute('aria-busy');
    feedbackPanel.hidden = true;
  }

  function setSubmitting(isSubmitting) {
    if (!submitButton) return;
    submitButton.disabled = isSubmitting;
    submitButton.classList.toggle('is-loading', isSubmitting);
    submitButton.innerHTML = isSubmitting
      ? `<span class="button-loader" aria-hidden="true"></span><span>${t('form.sending')}</span>`
      : t('form.submit');
    submitButton.setAttribute('aria-busy', isSubmitting ? 'true' : 'false');
    if (cancelButton) {
      cancelButton.hidden = !isSubmitting;
      cancelButton.disabled = !isSubmitting;
      cancelButton.textContent = t('form.cancel');
    }
  }

  function setSubmissionComplete(isComplete) {
    if (formActions) {
      formActions.classList.toggle('submission-complete', isComplete);
      formActions.setAttribute('aria-hidden', isComplete ? 'true' : 'false');
    }
    if (submitButton) {
      submitButton.hidden = isComplete;
      submitButton.disabled = isComplete;
    }
    if (cancelButton) {
      cancelButton.hidden = true;
      cancelButton.disabled = true;
    }
  }

  function getCountdownText(seconds) {
    const safeSeconds = Math.max(0, Number(seconds) || 0);
    if (currentLang === 'es') return `Enviaremos la solicitud en ${safeSeconds} segundos.`;
    if (currentLang === 'pt') return `Enviaremos a solicitação em ${safeSeconds} segundos.`;
    return `We will send the request in ${safeSeconds} seconds.`;
  }

  function updateProcessingMessage(seconds) {
    if (!feedbackText) return;
    feedbackText.textContent = `${t('form.processingText')} ${getCountdownText(seconds)}`;
  }

  function clearPendingSubmit() {
    if (pendingSubmitTimer) {
      clearTimeout(pendingSubmitTimer);
      pendingSubmitTimer = null;
    }
    if (pendingCountdownInterval) {
      clearInterval(pendingCountdownInterval);
      pendingCountdownInterval = null;
    }
  }

  function delayBeforeSending(signal) {
    return new Promise((resolve, reject) => {
      if (signal.aborted) {
        reject(new DOMException('Submission cancelled', 'AbortError'));
        return;
      }

      const startedAt = Date.now();
      updateProcessingMessage(Math.ceil(PRE_SEND_DELAY_MS / 1000));

      pendingCountdownInterval = setInterval(() => {
        const elapsed = Date.now() - startedAt;
        const remaining = Math.max(0, Math.ceil((PRE_SEND_DELAY_MS - elapsed) / 1000));
        updateProcessingMessage(remaining);
      }, 250);

      pendingSubmitTimer = setTimeout(() => {
        clearPendingSubmit();
        resolve();
      }, PRE_SEND_DELAY_MS);

      signal.addEventListener('abort', () => {
        clearPendingSubmit();
        reject(new DOMException('Submission cancelled', 'AbortError'));
      }, { once: true });
    });
  }

  if (cancelButton) {
    cancelButton.addEventListener('click', function () {
      if (activeRequestController) {
        activeRequestController.abort();
        activeRequestController = null;
      }
      clearPendingSubmit();
      setSubmissionComplete(false);
      setSubmitting(false);
      showFeedback('neutral', t('form.cancel'), t('form.cancelled'));
    });
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    setSubmissionComplete(false);
    hideFeedback();

    if (!validateForm()) {
      return;
    }

    activeRequestController = new AbortController();
    setSubmitting(true);
    showFeedback('processing', t('form.processingTitle'), `${t('form.processingText')} ${getCountdownText(20)}`);

    try {
      await delayBeforeSending(activeRequestController.signal);

      const originalPhone = fields.phone.value;
      let digits = digitsOnly(fields.phone.value);
      if (digits.length === 10) fields.phone.value = `+1${digits}`;

      const formData = new FormData(form);
      fields.phone.value = formatUSPhone(originalPhone);

      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' },
        signal: activeRequestController.signal
      });

      if (!response.ok) throw new Error('Form submission failed');

      localStorage.setItem('unikLastSubmit', String(Date.now()));
      showFeedback('success', t('form.successTitle'), t('form.successText'));
      setSubmissionComplete(true);
    } catch (error) {
      if (error.name !== 'AbortError') {
        showFeedback('error', t('form.errorTitle'), t('form.submitError'));
      }
    } finally {
      clearPendingSubmit();
      activeRequestController = null;
      if (!formActions || !formActions.classList.contains('submission-complete')) {
        setSubmitting(false);
      }
    }
  });

  setLanguage(currentLang);
})();
