import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY!)

interface SendContentEmailParams {
  to: string
  patientName: string
  visitType: string
  viewerUrl: string
}

export async function sendContentEmail({
  to,
  patientName,
  visitType,
  viewerUrl,
}: SendContentEmailParams) {
  await resend.emails.send({
    from: 'TrustBase <noreply@trustbase.ajitkrishna.com>',
    to,
    subject: `Content ready: ${patientName}'s ${visitType} appointment`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #1E293B;
      background-color: #F8F7F4;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #FFFFFF;
      border-radius: 16px;
      padding: 40px;
      box-shadow: 0 4px 16px rgba(13, 148, 136, 0.12);
    }
    .logo {
      font-size: 24px;
      font-weight: 700;
      color: #0D9488;
      margin-bottom: 24px;
    }
    h1 {
      font-size: 20px;
      font-weight: 600;
      color: #1E293B;
      margin-bottom: 16px;
    }
    p {
      font-size: 16px;
      color: #475569;
      margin-bottom: 16px;
    }
    .button {
      display: inline-block;
      padding: 14px 32px;
      background-color: #0D9488;
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 12px;
      font-weight: 600;
      margin-top: 8px;
      box-shadow: 0 2px 4px rgba(13, 148, 136, 0.2);
    }
    .button:hover {
      background-color: #0F766E;
    }
    .footer {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid rgba(132, 169, 140, 0.12);
      font-size: 14px;
      color: #64748B;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="logo">TrustBase</div>
    <h1>Educational content ready for ${patientName}</h1>
    <p>The pre-visit education content for <strong>${patientName}'s ${visitType}</strong> appointment has been generated and is ready to view.</p>
    <p>Share this link with your patient so they can prepare for their upcoming visit:</p>
    <a href="${viewerUrl}" class="button">View Patient Content</a>
    <div class="footer">
      <p>This content was generated for your patient's appointment. You can review it before sharing.</p>
    </div>
  </div>
</body>
</html>
    `,
  })
}
