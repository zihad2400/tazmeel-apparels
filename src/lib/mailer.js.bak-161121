import nodemailer from "nodemailer";
import { SITE_CONFIG } from "./siteConfig";

// ⭐ Transporter
export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ⭐ Admin Notification Email
export async function sendContactNotification(data) {
  const { name, email, phone, company, subject, message } = data;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0; padding:0; font-family: 'Helvetica Neue', Arial, sans-serif; background:#F5F1E8;">
      <div style="max-width:600px; margin:20px auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow: 0 4px 20px rgba(15,61,46,0.1);">

        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0F3D2E 0%, #1B5E45 100%); padding:30px 20px; text-align:center;">
          <h1 style="margin:0; color:#C9A227; font-size:22px; font-weight:700; letter-spacing:1px;">
            🎯 NEW CONTACT MESSAGE
          </h1>
          <p style="margin:8px 0 0; color:#F5F1E8; font-size:13px; opacity:0.9;">
            Tazmeel Apparels — Business Inquiry
          </p>
        </div>

        <!-- Body -->
        <div style="padding:30px 25px;">

          <!-- Contact Info Grid -->
          <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #EAE3D2;">
                <span style="color:#0F3D2E; font-size:12px; letter-spacing:1px; text-transform:uppercase; font-weight:600;">👤 Name</span>
                <p style="margin:6px 0 0; color:#0F3D2E; font-size:16px; font-weight:500;">${name}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #EAE3D2;">
                <span style="color:#0F3D2E; font-size:12px; letter-spacing:1px; text-transform:uppercase; font-weight:600;">📧 Email</span>
                <p style="margin:6px 0 0;">
                  <a href="mailto:${email}" style="color:#C9A227; font-size:16px; text-decoration:none; font-weight:500;">${email}</a>
                </p>
              </td>
            </tr>
            ${
              phone
                ? `
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #EAE3D2;">
                <span style="color:#0F3D2E; font-size:12px; letter-spacing:1px; text-transform:uppercase; font-weight:600;">📞 Phone</span>
                <p style="margin:6px 0 0;">
                  <a href="tel:${phone}" style="color:#0F3D2E; font-size:16px; text-decoration:none; font-weight:500;">${phone}</a>
                </p>
              </td>
            </tr>
            `
                : ""
            }
            ${
              company
                ? `
            <tr>
              <td style="padding:10px 0; border-bottom:1px solid #EAE3D2;">
                <span style="color:#0F3D2E; font-size:12px; letter-spacing:1px; text-transform:uppercase; font-weight:600;">🏢 Company</span>
                <p style="margin:6px 0 0; color:#0F3D2E; font-size:16px; font-weight:500;">${company}</p>
              </td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding:10px 0;">
                <span style="color:#0F3D2E; font-size:12px; letter-spacing:1px; text-transform:uppercase; font-weight:600;">📋 Subject</span>
                <p style="margin:6px 0 0; color:#0F3D2E; font-size:16px; font-weight:500;">${subject || "General Inquiry"}</p>
              </td>
            </tr>
          </table>

          <!-- Message -->
          <div style="background:#F5F1E8; border-left:4px solid #C9A227; padding:20px; border-radius:8px; margin:20px 0;">
            <p style="margin:0 0 8px; color:#0F3D2E; font-size:12px; letter-spacing:1px; text-transform:uppercase; font-weight:600;">💬 Message</p>
            <p style="margin:0; color:#0F3D2E; font-size:15px; line-height:1.7; white-space:pre-wrap;">${message}</p>
          </div>

          <!-- CTA Buttons -->
          <div style="text-align:center; margin-top:25px;">
            <a href="mailto:${email}?subject=Re: ${subject || "Your Inquiry"}"
               style="display:inline-block; background:#0F3D2E; color:#F5F1E8; padding:12px 28px; border-radius:50px; text-decoration:none; font-weight:600; font-size:14px; margin:5px;">
              📩 Reply by Email
            </a>
            ${
              phone
                ? `
            <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}"
               style="display:inline-block; background:#25D366; color:#fff; padding:12px 28px; border-radius:50px; text-decoration:none; font-weight:600; font-size:14px; margin:5px;">
              💬 WhatsApp
            </a>
            `
                : ""
            }
          </div>
        </div>

        <!-- Footer -->
        <div style="background:#082A1F; color:#C9A227; padding:18px; text-align:center; font-size:11px;">
          <p style="margin:0;">Received on ${new Date().toLocaleString("en-US", {
            dateStyle: "full",
            timeStyle: "short",
          })}</p>
          <p style="margin:6px 0 0; opacity:0.7;">Tazmeel Apparels · ${SITE_CONFIG.addressShort}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  return transporter.sendMail({
    from: `"Tazmeel Apparels Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL || SITE_CONFIG.email,
    replyTo: email,
    subject: `🎯 New Contact: ${subject || "Inquiry"} — ${name}`,
    html,
  });
}

// ⭐ Auto-Reply to Client
export async function sendAutoReply(to, name) {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin:0; padding:0; font-family: 'Helvetica Neue', Arial, sans-serif; background:#F5F1E8;">
      <div style="max-width:600px; margin:20px auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow: 0 4px 20px rgba(15,61,46,0.1);">

        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0F3D2E 0%, #1B5E45 100%); padding:40px 20px; text-align:center;">
          <h1 style="margin:0; color:#C9A227; font-size:24px; font-weight:700; letter-spacing:1px;">
            ✨ Thank You, ${name}!
          </h1>
          <p style="margin:10px 0 0; color:#F5F1E8; font-size:14px; opacity:0.9;">
            We've received your message
          </p>
        </div>

        <!-- Body -->
        <div style="padding:35px 30px;">
          <p style="color:#0F3D2E; font-size:16px; line-height:1.7; margin:0 0 20px;">
            Dear <strong style="color:#C9A227;">${name}</strong>,
          </p>

          <p style="color:#0F3D2E; font-size:15px; line-height:1.7; margin:0 0 20px;">
            Thank you for contacting <strong>Tazmeel Apparels</strong>. We've received your inquiry and our team will get back to you within <strong style="color:#C9A227;">24 hours</strong>.
          </p>

          <!-- Info Box -->
          <div style="background:#F5F1E8; padding:20px; border-radius:8px; border-left:4px solid #C9A227; margin:25px 0;">
            <p style="margin:0 0 12px; color:#0F3D2E; font-size:13px; font-weight:700; letter-spacing:1px; text-transform:uppercase;">
              📞 Need Immediate Help?
            </p>
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <tr>
                <td style="padding:5px 0; color:#0F3D2E;">
                  <strong>📱 Phone:</strong>
                  <a href="tel:${SITE_CONFIG.phonePrimary.tel}" style="color:#C9A227; text-decoration:none;">${SITE_CONFIG.phonePrimary.display}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:5px 0; color:#0F3D2E;">
                  <strong>✉️ Email:</strong>
                  <a href="mailto:${SITE_CONFIG.email}" style="color:#C9A227; text-decoration:none;">${SITE_CONFIG.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:5px 0; color:#0F3D2E;">
                  <strong>🕐 Hours:</strong> ${SITE_CONFIG.hours}
                </td>
              </tr>
            </table>
          </div>

          <!-- CTA -->
          <div style="text-align:center; margin:30px 0 20px;">
            <a href="https://wa.me/${SITE_CONFIG.phonePrimary.whatsapp}?text=${encodeURIComponent("Hello Tazmeel Apparels! I just sent an inquiry.")}"
               style="display:inline-block; background:#25D366; color:#fff; padding:14px 32px; border-radius:50px; text-decoration:none; font-weight:600; font-size:15px;">
              💬 Chat on WhatsApp
            </a>
          </div>

          <p style="color:#0F3D2E; font-size:14px; line-height:1.7; margin:25px 0 0; text-align:center;">
            Best regards,<br>
            <strong style="color:#C9A227; font-size:16px;">Tazmeel Apparels Team</strong>
          </p>
        </div>

        <!-- Footer -->
        <div style="background:#082A1F; color:#C9A227; padding:25px 20px; text-align:center;">
          <p style="margin:0 0 8px; font-size:16px; font-weight:700; letter-spacing:2px;">
            TAZMEEL APPARELS
          </p>
          <p style="margin:0; font-size:12px; opacity:0.8;">
            Crafting Style With Tazmeel · Since 2020
          </p>
          <p style="margin:10px 0 0; font-size:11px; opacity:0.6;">
            ${SITE_CONFIG.address}
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  return transporter.sendMail({
    from: `"Tazmeel Apparels" <${process.env.EMAIL_USER}>`,
    to,
    subject: "✨ Thank you for contacting Tazmeel Apparels",
    html,
  });
}

// ⭐ Verify Email Config
export async function verifyEmailConfig() {
  try {
    await transporter.verify();
    console.log("✅ Email server ready");
    return true;
  } catch (error) {
    console.error("❌ Email config error:", error.message);
    return false;
  }
}
