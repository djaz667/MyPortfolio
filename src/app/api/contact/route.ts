// src/app/api/contact/route.ts
import { Resend } from "resend";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  // ✅ Vérification immédiate de la clé API
  if (!process.env.RESEND_API_KEY) {
    return new Response(
      JSON.stringify({ success: false, error: "Clé API Resend manquante" }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  // ✅ Vérification des variables Telegram (optionnelles)
  if (!process.env.CONTACT_EMAIL || !process.env.TELEGRAM_BOT_TOKEN || !process.env.TELEGRAM_CHAT_ID) {
    console.error("Variables d'environnement manquantes pour notifications");
  }

  try {
    // ✅ DÉTECTION AUTOMATIQUE : JSON (page /contact) ou FORM (page d'accueil)
    let body: any;
    const contentType = req.headers.get('content-type') || '';
    
    if (contentType.includes('application/json')) {
      // Page /contact → JSON
      body = await req.json();
    } else {
      // Page d'accueil → FORM data
      const formData = await req.formData();
      body = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      };
    }

    const { name, email, subject, message } = body;

    // Validation basique
    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Tous les champs sont requis" }), 
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 2️⃣ Envoi du mail via Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: "Portfolio <no-reply@resend.dev>",
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\nMessage:\n${message}`,
      html: `
        <h2>📩 Nouveau message Portfolio</h2>
        <p><strong>👤 Nom :</strong> ${name}</p>
        <p><strong>📧 Email :</strong> ${email}</p>
        <p><strong>📝 Sujet :</strong> ${subject}</p>
        <hr>
        <p><strong>💬 Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // 3️⃣ Notification Telegram (si configurée)
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      const telegramMessage = `📩 *Nouveau message Portfolio*

👤 *Nom* : ${name}
📧 *Email* : ${email}
📝 *Sujet* : ${subject}

💬 *Message* :
${message}`;

      await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: "Markdown",
          }),
        }
      );
    }

    // 4️⃣ Réponse de succès
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Message envoyé avec succès !" 
      }), 
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (err: any) {
    console.error("❌ Erreur API Contact :", err);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: "Erreur lors de l'envoi du message" 
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
