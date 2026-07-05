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
  if (language === 'pt') return 'Recebemos sua solicitação — UNIK Cleaning';
  if (language === 'es') return 'Recibimos su solicitud — UNIK Cleaning';
  return 'We received your request — UNIK Cleaning';
}

function clientPlainText(name, language, requestId) {
  const safeName = name || 'there';
  const referenceLine = requestId ? `\nReference ID: ${requestId}\n` : '\n';
  if (language === 'pt') {
    return `Olá, ${safeName}.\n\nObrigado por entrar em contato com a ${COMPANY_NAME}. Recebemos sua solicitação com sucesso.${referenceLine}\nNossa equipe analisará suas informações com cuidado e entrará em contato em breve por telefone ou e-mail.\n\nAtenciosamente,\n${COMPANY_NAME}\nNaples, Florida\n${SITE_URL}`;
  }
  if (language === 'es') {
    return `Hola, ${safeName}.\n\nGracias por contactar a ${COMPANY_NAME}. Hemos recibido su solicitud correctamente.${referenceLine}\nNuestro equipo revisará su información con cuidado y se comunicará pronto por teléfono o correo electrónico.\n\nAtentamente,\n${COMPANY_NAME}\nNaples, Florida\n${SITE_URL}`;
  }
  return `Hello, ${safeName}.\n\nThank you for contacting ${COMPANY_NAME}. We have successfully received your request.${referenceLine}\nOur team will review your information carefully and contact you as soon as possible by phone or email.\n\nKind regards,\n${COMPANY_NAME}\nNaples, Florida\n${SITE_URL}`;
}

function clientHtmlEmail({ name, language, requestId }) {
  const safeName = escapeHtml(name || 'there');
  const safeRequestId = escapeHtml(requestId || '');
  const copy = {
    en: {
      greeting: `Hello, ${safeName}.`,
      title: 'Your request has been received.',
      body: 'Thank you for contacting UNIK. Our team will review your information carefully and contact you as soon as possible by phone or email.',
      reference: 'Reference ID',
      button: 'Visit our website',
      note: 'Please keep this email for your records.'
    },
    es: {
      greeting: `Hola, ${safeName}.`,
      title: 'Su solicitud fue recibida.',
      body: 'Gracias por contactar a UNIK. Nuestro equipo revisará su información con cuidado y se comunicará pronto por teléfono o correo electrónico.',
      reference: 'ID de referencia',
      button: 'Visitar nuestro sitio',
      note: 'Guarde este correo para sus registros.'
    },
    pt: {
      greeting: `Olá, ${safeName}.`,
      title: 'Sua solicitação foi recebida.',
      body: 'Obrigado por entrar em contato com a UNIK. Nossa equipe analisará suas informações com cuidado e entrará em contato em breve por telefone ou e-mail.',
      reference: 'ID de referência',
      button: 'Acessar o site',
      note: 'Guarde este e-mail para seus registros.'
    }
  }[language] || null;
  const text = copy || {
    greeting: `Hello, ${safeName}.`,
    title: 'Your request has been received.',
    body: 'Thank you for contacting UNIK. Our team will review your information carefully and contact you as soon as possible by phone or email.',
    reference: 'Reference ID',
    button: 'Visit our website',
    note: 'Please keep this email for your records.'
  };

  return `<!doctype html>
<html><body style="margin:0;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;color:#111;">
  <div style="max-width:660px;margin:0 auto;padding:34px 18px;">
    <div style="background:#ffffff;border-radius:28px;overflow:hidden;border:1px solid #e8e2e6;box-shadow:0 18px 50px rgba(0,0,0,.07);">
      <div style="padding:36px 36px 20px;background:linear-gradient(135deg,#fff 0%,#fff 58%,#f7edf4 100%);border-top:8px solid #DD0AA1;">
        <div style="font-size:38px;line-height:1;font-weight:800;letter-spacing:-1px;"><span style="color:#DD0AA1;">U</span>nik</div>
        <div style="margin-top:9px;color:#5f565d;font-size:12px;letter-spacing:.11em;text-transform:uppercase;">Cleaning • Personal Care • Organization</div>
      </div>
      <div style="padding:10px 36px 36px;">
        <p style="font-size:16px;margin:0 0 14px;color:#333;">${text.greeting}</p>
        <h1 style="font-size:30px;line-height:1.12;margin:0 0 18px;color:#111;letter-spacing:-.02em;">${text.title}</h1>
        <p style="font-size:16px;line-height:1.7;margin:0 0 24px;color:#333;">${text.body}</p>
        ${safeRequestId ? `<div style="margin:0 0 26px;padding:16px 18px;background:#f7edf4;border:1px solid #ead8e5;border-radius:18px;"><div style="font-size:12px;text-transform:uppercase;letter-spacing:.1em;color:#76656f;font-weight:700;">${text.reference}</div><div style="font-size:18px;color:#111;font-weight:800;margin-top:6px;">${safeRequestId}</div></div>` : ''}
        <a href="${SITE_URL}" style="display:inline-block;background:#111;color:#fff;text-decoration:none;padding:14px 22px;border-radius:999px;font-weight:700;">${text.button}</a>
        <p style="font-size:13px;line-height:1.55;margin:22px 0 0;color:#777;">${text.note}</p>
      </div>
      <div style="background:#f2edf1;padding:24px 36px;color:#333;font-size:14px;line-height:1.65;">
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
  const replyHref = `mailto:${encodeURIComponent(data.email)}?subject=${encodeURIComponent(`Re: Your UNIK quote request ${meta.requestId}`)}`;
  return `<!doctype html>
<html><body style="margin:0;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;color:#111;">
  <div style="max-width:720px;margin:0 auto;padding:30px 16px;">
    <div style="background:#fff;border-radius:24px;border:1px solid #e5e5e5;overflow:hidden;box-shadow:0 18px 50px rgba(0,0,0,.07);">
      <div style="background:#111;padding:28px 30px;color:#fff;">
        <div style="font-size:23px;font-weight:800;letter-spacing:-.01em;">New Quote Request</div>
        <div style="color:#CCADC6;margin-top:8px;font-weight:700;">${escapeHtml(meta.requestId)}</div>
      </div>
      <div style="padding:24px 30px 8px;">
        <a href="${replyHref}" style="display:inline-block;background:#DD0AA1;color:#fff;text-decoration:none;padding:13px 20px;border-radius:999px;font-weight:800;">Reply to customer</a>
      </div>
      <table role="presentation" style="width:100%;border-collapse:collapse;">
        ${rows.map(([label, value]) => `<tr><td style="width:160px;padding:16px 24px;border-bottom:1px solid #eee;font-weight:800;color:#555;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:16px 24px;border-bottom:1px solid #eee;white-space:pre-wrap;line-height:1.6;color:#222;">${escapeHtml(value)}</td></tr>`).join('')}
      </table>
      <div style="padding:20px 30px 28px;color:#777;font-size:13px;line-height:1.6;">This message was generated by the UNIK website contact form.</div>
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

function buildClientEmail(cleanData, requestId) {
  return {
    from: `UNIK Cleaning <${COMPANY_EMAIL}>`,
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
