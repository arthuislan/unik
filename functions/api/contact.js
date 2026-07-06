const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const COMPANY_NAME = 'Unik Naples';
const COMPANY_EMAIL = 'contact@uniknaples.com';
const SITE_URL = 'https://uniknaples.com';

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store'
    }
  });
}

function redactValue(value = '') {
  const text = String(value || '');
  if (!text) return '';
  if (text.length <= 10) return `${text.slice(0, 2)}***`;
  return `${text.slice(0, 6)}***${text.slice(-4)}`;
}

function makeDiagnostic(code, requestId, details = {}) {
  return {
    code,
    requestId,
    timestamp: new Date().toISOString(),
    ...details
  };
}

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function normalizePhone(value = '') {
  const digits = String(value).replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  if (digits.length === 10) return `+1${digits}`;
  return String(value).trim();
}

function isValidName(value = '') {
  return /^[A-Za-zÀ-ÿ' .-]{2,70}$/.test(String(value).trim());
}

function isValidEmail(value = '') {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value).trim());
}

function isValidUSPhone(value = '') {
  let digits = String(value).replace(/\D/g, '');
  if (digits.length === 11 && digits.startsWith('1')) digits = digits.slice(1);
  return digits.length === 10 && !/^(\d)\1{9}$/.test(digits) && /^[2-9]\d{2}/.test(digits) && /^\d{3}[2-9]\d{2}/.test(digits);
}

function getRequestId() {
  const now = new Date();
  const date = now.toISOString().slice(0, 10).replace(/-/g, '');
  let suffix;
  try {
    suffix = crypto.randomUUID().split('-')[0].toUpperCase();
  } catch (error) {
    suffix = Math.random().toString(16).slice(2, 10).toUpperCase();
  }
  return `UNIK-${date}-${suffix}`;
}

function clientSubject(language) {
  if (language === 'pt') return 'Sua solicitação foi recebida — Unik Naples';
  if (language === 'es') return 'Su solicitud fue recibida — Unik Naples';
  return 'Your request was received — Unik Naples';
}

function adminSubject(service, requestId) {
  const serviceName = service || 'Cleaning Service';
  return `New quote request — ${serviceName} — ${requestId}`;
}

function getLocalizedCopy(language, name, requestId) {
  const safeName = name || 'there';
  const dictionary = {
    en: {
      greeting: `Hello, ${safeName}.`,
      title: 'Your request has been received.',
      body: 'Thank you for contacting Unik Naples. We have received your request and our team will review the details carefully. We will contact you as soon as possible by phone or email.',
      reference: 'Reference ID',
      next: 'What happens next',
      nextBody: 'A member of our team will review your request and follow up with the next steps for your service.',
      closing: 'Thank you for choosing Unik Naples.',
      plain: `Hello, ${safeName}.\n\nThank you for contacting Unik Naples. We have received your request and our team will review the details carefully. We will contact you as soon as possible by phone or email.\n\nReference ID: ${requestId}\n\nThank you for choosing Unik Naples.\n\nUnik Naples\nProfessional Cleaning Services\nNaples, Florida\n${COMPANY_EMAIL}\n${SITE_URL}`
    },
    es: {
      greeting: `Hola, ${safeName}.`,
      title: 'Su solicitud fue recibida.',
      body: 'Gracias por contactar a Unik Naples. Hemos recibido su solicitud y nuestro equipo revisará los detalles cuidadosamente. Nos comunicaremos con usted lo antes posible por teléfono o correo electrónico.',
      reference: 'ID de referencia',
      next: 'Qué sucede ahora',
      nextBody: 'Un miembro de nuestro equipo revisará su solicitud y se comunicará con usted con los próximos pasos para su servicio.',
      closing: 'Gracias por elegir Unik Naples.',
      plain: `Hola, ${safeName}.\n\nGracias por contactar a Unik Naples. Hemos recibido su solicitud y nuestro equipo revisará los detalles cuidadosamente. Nos comunicaremos con usted lo antes posible por teléfono o correo electrónico.\n\nID de referencia: ${requestId}\n\nGracias por elegir Unik Naples.\n\nUnik Naples\nProfessional Cleaning Services\nNaples, Florida\n${COMPANY_EMAIL}\n${SITE_URL}`
    },
    pt: {
      greeting: `Olá, ${safeName}.`,
      title: 'Sua solicitação foi recebida.',
      body: 'Obrigado por entrar em contato com a Unik Naples. Recebemos sua solicitação e nossa equipe analisará os detalhes com cuidado. Entraremos em contato o mais breve possível por telefone ou e-mail.',
      reference: 'ID de referência',
      next: 'O que acontece agora',
      nextBody: 'Um membro da nossa equipe analisará sua solicitação e entrará em contato com os próximos passos para o serviço.',
      closing: 'Obrigado por escolher a Unik Naples.',
      plain: `Olá, ${safeName}.\n\nObrigado por entrar em contato com a Unik Naples. Recebemos sua solicitação e nossa equipe analisará os detalhes com cuidado. Entraremos em contato o mais breve possível por telefone ou e-mail.\n\nID de referência: ${requestId}\n\nObrigado por escolher a Unik Naples.\n\nUnik Naples\nProfessional Cleaning Services\nNaples, Florida\n${COMPANY_EMAIL}\n${SITE_URL}`
    }
  };
  return dictionary[language] || dictionary.en;
}

function emailShell(content, options = {}) {
  const preview = escapeHtml(options.preview || 'Unik Naples');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>Unik Naples</title>
  <style>
    @media (prefers-color-scheme: dark) {
      .email-page { background:#0f1216 !important; color:#f7f7f7 !important; }
      .email-card { background:#14181f !important; border-color:#2e343d !important; box-shadow:none !important; }
      .email-header { background:linear-gradient(135deg,#14181f 0%,#14181f 62%,#281522 100%) !important; border-bottom-color:#2e343d !important; }
      .email-title, .email-copy, .email-brand-dark { color:#f7f7f7 !important; }
      .email-muted { color:rgba(255,255,255,.66) !important; }
      .email-subtle { color:rgba(255,255,255,.60) !important; }
      .email-panel { background:#191e26 !important; border-color:#343b45 !important; }
      .email-row { border-bottom-color:#2e343d !important; }
      .email-footer { background:#14181f !important; border-top-color:#DD0AA1 !important; }
      .email-value { color:#f7f7f7 !important; }
    }
  </style>
</head>
<body class="email-page" style="margin:0;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;color:#111;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${preview}</div>
  <div style="max-width:680px;margin:0 auto;padding:34px 18px;">
    <div class="email-card" style="background:#ffffff;border:1px solid #e8e2e6;border-radius:28px;overflow:hidden;box-shadow:0 18px 50px rgba(0,0,0,.07);">
      <div class="email-header" style="padding:36px 36px 22px;background:linear-gradient(135deg,#fff 0%,#fff 62%,#f7edf4 100%);border-top:8px solid #DD0AA1;border-bottom:1px solid #e8e2e6;">
        <div style="font-size:38px;line-height:1;font-weight:800;letter-spacing:-1.1px;white-space:nowrap;"><span style="color:#DD0AA1;">U</span><span class="email-brand-dark" style="color:#111;">nik</span> <span class="email-brand-dark" style="color:#111;">Naples</span></div>
        <div class="email-subtle" style="margin-top:10px;color:#777;font-size:12px;letter-spacing:.08em;text-transform:uppercase;font-weight:700;">Cleaning • Personal Care • Organization</div>
      </div>
      ${content}
      <div class="email-footer" style="background:#f2edf1;padding:24px 36px;color:#555;font-size:14px;line-height:1.65;border-top:1px solid #DD0AA1;text-align:center;">
        <strong class="email-subtle" style="color:#555;">Unik Naples Cleaning Personal Care and Organization</strong><br>
        Naples, Florida<br>
        <a href="mailto:${COMPANY_EMAIL}" style="color:#DD0AA1;text-decoration:none;">${COMPANY_EMAIL}</a> · <a href="${SITE_URL}" style="color:#DD0AA1;text-decoration:none;">uniknaples.com</a>
      </div>
    </div>
  </div>
</body>
</html>`;
}

function clientPlainText(name, language, requestId) {
  return getLocalizedCopy(language, name, requestId).plain;
}

function clientHtmlEmail({ name, language, requestId }) {
  const copy = getLocalizedCopy(language, escapeHtml(name || 'there'), escapeHtml(requestId || ''));
  const content = `
      <div style="padding:32px 36px 36px;">
        <p class="email-copy" style="font-size:16px;margin:0 0 14px;color:#333;">${copy.greeting}</p>
        <h1 class="email-title" style="font-size:30px;line-height:1.12;margin:0 0 18px;color:#111;letter-spacing:-.02em;">${copy.title}</h1>
        <p class="email-copy" style="font-size:16px;line-height:1.7;margin:0 0 24px;color:#333;">${copy.body}</p>
        <div class="email-panel" style="margin:0 0 24px;padding:18px 20px;background:#f7edf4;border:1px solid #ead8e5;border-radius:18px;">
          <div class="email-subtle" style="font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:#777;font-weight:800;">${copy.reference}</div>
          <div class="email-value" style="font-size:18px;color:#111;font-weight:800;margin-top:6px;">${escapeHtml(requestId)}</div>
        </div>
        <div style="margin:0;padding:0;">
          <div class="email-subtle" style="font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:#777;font-weight:800;margin-bottom:8px;">${copy.next}</div>
          <p class="email-muted" style="font-size:14px;line-height:1.65;margin:0;color:#666;">${copy.nextBody}</p>
        </div>
        <p class="email-copy" style="font-size:16px;line-height:1.7;margin:24px 0 0;color:#333;">${copy.closing}</p>
      </div>`;
  return emailShell(content, { preview: `${copy.title} ${requestId}` });
}

function internalPlainText(data, meta) {
  return `New Quote Request — Unik Naples\n\nReference ID: ${meta.requestId}\nSubmitted: ${meta.submittedAt}\n\nCustomer\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\nService\n${data.service}\n\nMessage\n${data.message}\n\nReply directly to this email to contact the customer.\n\nUnik Naples\n${COMPANY_EMAIL}\n${SITE_URL}`;
}

function internalHtmlEmail(data, meta) {
  const rows = [
    ['Reference ID', meta.requestId],
    ['Submitted', meta.submittedAt],
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Requested Service', data.service],
    ['Message', data.message]
  ];
  const content = `
      <div style="padding:32px 36px 12px;">
        <div class="email-subtle" style="font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:#777;font-weight:800;margin-bottom:10px;">New Quote Request</div>
        <h1 class="email-title" style="font-size:30px;line-height:1.12;margin:0 0 20px;color:#111;letter-spacing:-.02em;">New request from ${escapeHtml(data.name)}</h1>
        <p class="email-muted" style="font-size:14px;line-height:1.65;margin:0 0 24px;color:#666;">Reply directly to this email to contact the customer.</p>
      </div>
      <table role="presentation" style="width:100%;border-collapse:collapse;margin:0 0 14px;">
        ${rows.map(([label, value]) => `<tr><td class="email-row" style="width:170px;padding:16px 28px;border-bottom:1px solid #eee;font-weight:800;color:#666;vertical-align:top;font-size:13px;text-transform:uppercase;letter-spacing:.05em;">${escapeHtml(label)}</td><td class="email-row email-value" style="padding:16px 28px;border-bottom:1px solid #eee;white-space:pre-wrap;line-height:1.6;color:#222;font-size:15px;">${escapeHtml(value)}</td></tr>`).join('')}
      </table>
      <div style="padding:6px 36px 34px;">
        <p class="email-muted" style="font-size:13px;line-height:1.6;margin:0;color:#777;">This message was generated by the Unik Naples website contact form.</p>
      </div>`;
  return emailShell(content, { preview: `New quote request ${meta.requestId}` });
}

async function sendEmail(env, payload, label, requestId) {
  console.log('UNIK Resend send attempt', {
    requestId,
    label,
    from: payload.from,
    to: payload.to,
    hasApiKey: Boolean(env.RESEND_API_KEY),
    apiKeyPreview: redactValue(env.RESEND_API_KEY)
  });

  let response;
  let result = {};

  try {
    response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
  } catch (error) {
    console.error('UNIK Resend network failure', {
      requestId,
      label,
      message: error.message
    });
    const wrapped = new Error(error.message || 'Resend network request failed');
    wrapped.diagnostic = makeDiagnostic('resend_network_failure', requestId, {
      label,
      message: error.message || 'Unknown network error'
    });
    throw wrapped;
  }

  try {
    result = await response.json();
  } catch (error) {
    result = { nonJsonResponse: true };
  }

  if (!response.ok) {
    console.error('UNIK Resend API rejected request', {
      requestId,
      label,
      status: response.status,
      statusText: response.statusText,
      resendError: result
    });
    const wrapped = new Error(result.message || result.error || `${label} email failed`);
    wrapped.diagnostic = makeDiagnostic('resend_api_rejected', requestId, {
      label,
      status: response.status,
      statusText: response.statusText,
      resendError: result
    });
    throw wrapped;
  }

  console.log('UNIK email delivery succeeded', {
    requestId,
    label,
    emailId: result.id || null
  });
  return result;
}


function buildInternalEmail(cleanData, submittedAt, requestId) {
  return {
    from: `Unik Naples Website <${COMPANY_EMAIL}>`,
    to: [COMPANY_EMAIL],
    reply_to: cleanData.email,
    subject: adminSubject(cleanData.service, requestId),
    html: internalHtmlEmail(cleanData, { submittedAt, requestId }),
    text: internalPlainText(cleanData, { submittedAt, requestId })
  };
}

function buildClientEmail(cleanData, requestId) {
  return {
    from: `Unik Naples <${COMPANY_EMAIL}>`,
    to: [cleanData.email],
    reply_to: COMPANY_EMAIL,
    subject: clientSubject(cleanData.language),
    html: clientHtmlEmail({ name: cleanData.name, language: cleanData.language, requestId }),
    text: clientPlainText(cleanData.name, cleanData.language, requestId)
  };
}

export async function onRequestPost({ request, env }) {
  const requestId = getRequestId();
  console.log('UNIK contact request received', {
    requestId,
    hasResendKey: Boolean(env.RESEND_API_KEY),
    apiKeyPreview: redactValue(env.RESEND_API_KEY),
    method: request.method,
    url: request.url
  });

  if (!env.RESEND_API_KEY) {
    console.error('UNIK email service missing RESEND_API_KEY', { requestId });
    return jsonResponse({
      ok: false,
      error: 'Email service is not configured.',
      code: 'missing_resend_api_key',
      requestId,
      diagnostic: makeDiagnostic('missing_resend_api_key', requestId, { hint: 'RESEND_API_KEY is not available to this Cloudflare Pages deployment. Check Production and Preview variables, then redeploy.' })
    }, 500);
  }

  let data;
  try {
    data = await request.json();
  } catch (error) {
    console.error('UNIK invalid JSON payload', { requestId, message: error.message });
    return jsonResponse({ ok: false, error: 'Invalid request format.', code: 'invalid_json', requestId }, 400);
  }

  const name = String(data.name || '').trim();
  const phone = String(data.phone || '').trim();
  const email = String(data.email || '').trim().toLowerCase();
  const service = String(data.service || '').trim();
  const message = String(data.message || '').trim();
  const language = ['en', 'es', 'pt'].includes(data.language) ? data.language : 'en';
  const honey = String(data.honey || '').trim();

  if (honey) {
    console.log('UNIK honeypot submission ignored', { requestId });
    return jsonResponse({ ok: true, requestId, ignored: true });
  }
  if (!isValidName(name)) return jsonResponse({ ok: false, error: 'Invalid name.', code: 'invalid_name', requestId }, 400);
  if (!isValidUSPhone(phone)) return jsonResponse({ ok: false, error: 'Invalid phone.', code: 'invalid_phone', requestId }, 400);
  if (!isValidEmail(email)) return jsonResponse({ ok: false, error: 'Invalid email.', code: 'invalid_email', requestId }, 400);
  if (message.length < 12 || message.length > 1000) return jsonResponse({ ok: false, error: 'Invalid message.', code: 'invalid_message', requestId }, 400);

  const cleanData = {
    name,
    phone: normalizePhone(phone),
    email,
    service: service || 'Custom Cleaning',
    message,
    language
  };

  const submittedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/New_York',
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  let internalResult;
  try {
    internalResult = await sendEmail(env, buildInternalEmail(cleanData, submittedAt, requestId), 'internal', requestId);
  } catch (error) {
    console.error('UNIK internal notification failed', { requestId, message: error.message });
    return jsonResponse({
      ok: false,
      error: 'We could not deliver the request to UNIK right now.',
      code: 'internal_email_failed',
      requestId,
      diagnostic: error.diagnostic || makeDiagnostic('internal_email_failed', requestId, { message: error.message })
    }, 502);
  }

  let clientResult = null;
  let clientEmailSent = false;
  try {
    clientResult = await sendEmail(env, buildClientEmail(cleanData, requestId), 'client', requestId);
    clientEmailSent = true;
  } catch (error) {
    console.error('UNIK client auto-response failed, but internal notification was delivered', {
      requestId,
      message: error.message
    });
  }

  return jsonResponse({
    ok: true,
    requestId,
    diagnostic: makeDiagnostic('success', requestId, { clientEmailSent }),
    internalEmailId: internalResult && internalResult.id ? internalResult.id : null,
    clientEmailSent,
    clientEmailId: clientResult && clientResult.id ? clientResult.id : null
  });
}

export function onRequestOptions() {
  return jsonResponse({ ok: true });
}
