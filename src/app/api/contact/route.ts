// src/app/api/contact/route.ts
import { Resend } from "resend";
import type { NextRequest } from "next/server";

// Initialisation de Resend avec la clé de ton .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    // 1️⃣ Récupération des données envoyées par le formulaire
    const { name, email, subject, message } = await req.json();

    // 2️⃣ Envoi du mail via Resend (pour logs / historique)
    await resend.emails.send({
      from: "Portfolio <no-reply@resend.dev>",
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email, // permet de répondre directement à l’utilisateur
      subject: `[Portfolio] ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    // 3️⃣ Notification Telegram
    const telegramMessage = `
📩 Nouveau message Portfolio

👤 Nom : ${name}
📧 Email : ${email}
📝 Sujet : ${subject}

💬 Message :
${message}
    `;

    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramMessage,
        }),
      }
    );

    // 4️⃣ Réponse OK
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Erreur API Contact :", err);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
