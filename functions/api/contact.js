const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const COMPANY_NAME = 'UNIK Cleaning Personal Care and Organization LLC.';
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
  try {
    return crypto.randomUUID();
  } catch (error) {
    return `unik-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}

function clientSubject(language) {
  if (language === 'pt') return 'Recebemos sua solicitação — UNIK Cleaning';
  if (language === 'es') return 'Recibimos su solicitud — UNIK Cleaning';
  return 'We received your request — UNIK Cleaning';
}

function clientPlainText(name, language) {
  const safeName = name || 'there';
  if (language === 'pt') {
    return `Olá, ${safeName}.\n\nObrigado por entrar em contato com a ${COMPANY_NAME}. Recebemos sua solicitação com sucesso. Nossa equipe analisará suas informações com cuidado e entrará em contato em breve por telefone ou e-mail.\n\nAtenciosamente,\n${COMPANY_NAME}\nNaples, Florida\n${SITE_URL}`;
  }
  if (language === 'es') {
    return `Hola, ${safeName}.\n\nGracias por contactar a ${COMPANY_NAME}. Hemos recibido su solicitud correctamente. Nuestro equipo revisará su información con cuidado y se comunicará pronto por teléfono o correo electrónico.\n\nAtentamente,\n${COMPANY_NAME}\nNaples, Florida\n${SITE_URL}`;
  }
  return `Hello, ${safeName}.\n\nThank you for contacting ${COMPANY_NAME}. We have successfully received your request. Our team will review your information carefully and contact you as soon as possible by phone or email.\n\nKind regards,\n${COMPANY_NAME}\nNaples, Florida\n${SITE_URL}`;
}

function clientHtmlEmail({ name, language }) {
  const safeName = escapeHtml(name || 'there');
  const copy = {
    en: {
      greeting: `Hello, ${safeName}.`,
      title: 'Thank you for contacting UNIK.',
      body: 'We have successfully received your request. Our team will review your information carefully and contact you as soon as possible by phone or email.',
      closing: 'Thank you for choosing UNIK Cleaning Personal Care and Organization LLC.',
      button: 'Visit our website'
    },
    es: {
      greeting: `Hola, ${safeName}.`,
      title: 'Gracias por contactar a UNIK.',
      body: 'Hemos recibido su solicitud correctamente. Nuestro equipo revisará su información con cuidado y se comunicará pronto por teléfono o correo electrónico.',
      closing: 'Gracias por elegir UNIK Cleaning Personal Care and Organization LLC.',
      button: 'Visitar nuestro sitio'
    },
    pt: {
      greeting: `Olá, ${safeName}.`,
      title: 'Obrigado por entrar em contato com a UNIK.',
      body: 'Recebemos sua solicitação com sucesso. Nossa equipe analisará suas informações com cuidado e entrará em contato em breve por telefone ou e-mail.',
      closing: 'Obrigado por escolher a UNIK Cleaning Personal Care and Organization LLC.',
      button: 'Acessar o site'
    }
  }[language] || null;
  const text = copy || {
    greeting: `Hello, ${safeName}.`,
    title: 'Thank you for contacting UNIK.',
    body: 'We have successfully received your request. Our team will review your information carefully and contact you as soon as possible by phone or email.',
    closing: 'Thank you for choosing UNIK Cleaning Personal Care and Organization LLC.',
    button: 'Visit our website'
  };

  return `<!doctype html>
<html><body style="margin:0;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;color:#111;">
  <div style="max-width:640px;margin:0 auto;padding:32px 18px;">
    <div style="background:#ffffff;border-radius:24px;overflow:hidden;border:1px solid #e5e5e5;box-shadow:0 10px 30px rgba(0,0,0,.05);">
      <div style="padding:34px 34px 18px;border-top:8px solid #DD0AA1;">
        <div style="font-size:34px;line-height:1;font-weight:800;letter-spacing:-1px;"><span style="color:#DD0AA1;">U</span>nik</div>
        <div style="margin-top:8px;color:#666;font-size:13px;letter-spacing:.08em;text-transform:uppercase;">Cleaning • Personal Care • Organization</div>
      </div>
      <div style="padding:6px 34px 34px;">
        <p style="font-size:16px;margin:0 0 14px;">${text.greeting}</p>
        <h1 style="font-size:28px;line-height:1.15;margin:0 0 18px;color:#111;">${text.title}</h1>
        <p style="font-size:16px;line-height:1.65;margin:0 0 22px;color:#333;">${text.body}</p>
        <p style="font-size:16px;line-height:1.65;margin:0 0 26px;color:#333;">${text.closing}</p>
        <a href="${SITE_URL}" style="display:inline-block;background:#111;color:#fff;text-decoration:none;padding:14px 22px;border-radius:999px;font-weight:700;">${text.button}</a>
      </div>
      <div style="background:#f2edf1;padding:24px 34px;color:#333;font-size:14px;line-height:1.6;">
        <strong>${COMPANY_NAME}</strong><br>
        Naples, Florida<br>
        <a href="mailto:${COMPANY_EMAIL}" style="color:#DD0AA1;text-decoration:none;">${COMPANY_EMAIL}</a> · <a href="${SITE_URL}" style="color:#DD0AA1;text-decoration:none;">uniknaples.com</a>
      </div>
    </div>
  </div>
</body></html>`;
}

function internalHtmlEmail(data, meta) {
  const rows = [
    ['Request ID', meta.requestId],
    ['Name', data.name],
    ['Phone', data.phone],
    ['Email', data.email],
    ['Service', data.service],
    ['Message', data.message],
    ['Submitted at', meta.submittedAt],
    ['Language', data.language || 'en']
  ];
  return `<!doctype html>
<html><body style="margin:0;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;color:#111;">
  <div style="max-width:680px;margin:0 auto;padding:28px 16px;">
    <div style="background:#fff;border-radius:20px;border:1px solid #e5e5e5;overflow:hidden;">
      <div style="background:#111;padding:24px 28px;color:#fff;">
        <div style="font-size:20px;font-weight:800;">New Quote Request</div>
        <div style="color:#CCADC6;margin-top:6px;">Unik Naples Website</div>
      </div>
      <table role="presentation" style="width:100%;border-collapse:collapse;">
        ${rows.map(([label, value]) => `<tr><td style="width:150px;padding:16px 22px;border-bottom:1px solid #eee;font-weight:700;color:#555;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:16px 22px;border-bottom:1px solid #eee;white-space:pre-wrap;line-height:1.55;">${escapeHtml(value)}</td></tr>`).join('')}
      </table>
    </div>
  </div>
</body></html>`;
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
    from: `UNIK Website <${COMPANY_EMAIL}>`,
    to: [COMPANY_EMAIL],
    reply_to: cleanData.email,
    subject: `New Quote Request — ${cleanData.name}`,
    html: internalHtmlEmail(cleanData, { submittedAt, requestId }),
    text: `New Quote Request\n\nRequest ID: ${requestId}\nName: ${cleanData.name}\nPhone: ${cleanData.phone}\nEmail: ${cleanData.email}\nService: ${cleanData.service}\nMessage: ${cleanData.message}\nSubmitted at: ${submittedAt}`
  };
}

function buildClientEmail(cleanData) {
  return {
    from: `UNIK Cleaning <${COMPANY_EMAIL}>`,
    to: [cleanData.email],
    reply_to: COMPANY_EMAIL,
    subject: clientSubject(cleanData.language),
    html: clientHtmlEmail({ name: cleanData.name, language: cleanData.language }),
    text: clientPlainText(cleanData.name, cleanData.language)
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
      diagnostic: makeDiagnostic('missing_resend_api_key', requestId, { hint: 'RESEND_API_KEY is not available to this Cloudflare Pages deployment. Check Preview variables and redeploy.' })
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
    clientResult = await sendEmail(env, buildClientEmail(cleanData), 'client', requestId);
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
