import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const handler = async (event) => {
  try {
    const formData = JSON.parse(event.body);

    const { first_name, last_name, company_name, company_email, phone, budget, services, nda_consent } = formData;

    // ✅ Your custom HTML template
    const html = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>New Project Inquiry – STRAVO</title>
        <style>
          body { font-family: 'Inter', sans-serif; background: #f5f6f8; margin: 0; padding: 0; color: #222; }
          .wrapper { max-width: 640px; margin: 40px auto; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #E2001A, #B00018); color: white; padding: 25px 20px; text-align: center; }
          .header h1 { margin: 0; font-size: 22px; }
          table { width: 100%; border-collapse: collapse; margin: 20px 0; }
          th, td { padding: 10px; border-bottom: 1px solid #eee; text-align: left; }
          th { color: #B00018; width: 35%; }
          .footer { text-align: center; background: #fafafa; padding: 10px; font-size: 12px; color: #777; }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="header">
            <h1>🚀 New Project Inquiry</h1>
            <p>From STRAVO Website Contact Form</p>
          </div>
          <div class="body">
            <table>
              <tr><th>First Name</th><td>${first_name}</td></tr>
              <tr><th>Last Name</th><td>${last_name}</td></tr>
              <tr><th>Company</th><td>${company_name}</td></tr>
              <tr><th>Email</th><td>${company_email}</td></tr>
              <tr><th>Phone</th><td>${phone}</td></tr>
              <tr><th>Budget</th><td>${budget}</td></tr>
              <tr><th>Services</th><td>${services}</td></tr>
              <tr><th>NDA Consent</th><td>${nda_consent}</td></tr>
            </table>
          </div>
          <div class="footer">
            This message was sent from the <a href="https://stravoph.netlify.app/">STRAVO Website</a>.
          </div>
        </div>
      </body>
      </html>
    `;

    // ✅ Send via Resend
    await resend.emails.send({
      from: 'STRAVO <noreply@resend.dev>', // You can verify a custom domain later
      to: 'your@email.com', // Change this to your inbox
      subject: '🚀 New Project Inquiry from Stravo Website',
      html,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
