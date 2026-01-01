"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  // États pour le formulaire
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Fonction de soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      setError("Impossible d'envoyer le message. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-24 pb-24 px-6 max-w-7xl mx-auto w-full pt-12">
      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Contact</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Une idée à partager, un projet à discuter ? N'hésitez pas à me contacter !
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Contact Info */}
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-royal-blue/10 flex items-center justify-center text-royal-blue transition-colors group-hover:bg-royal-blue group-hover:text-white">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Email</p>
                <p className="text-xl font-bold italic">djazimes@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-2xl bg-royal-blue/10 flex items-center justify-center text-royal-blue transition-colors group-hover:bg-royal-blue group-hover:text-white">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">LinkedIn</p>
                <p className="text-xl font-bold italic">linkedin.com/in/abakar-djazime</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-12 rounded-4xl flex flex-col gap-6">
            <h3 className="text-2xl font-bold">Services proposés</h3>
            <ul className="flex flex-col gap-4">
              {["Conception de sites web vitrine", "Portfolios personnalisés", "Design UI/UX", "Développement Mobile"].map((service, i) => (
                <li key={i} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-royal-blue" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[3rem] border border-border/50 shadow-xl shadow-black/5"
        >
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold uppercase tracking-widest px-1">Nom Complet</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Votre nom"
                  className="h-14 rounded-2xl bg-secondary border-none focus-visible:ring-2 focus-visible:ring-royal-blue"
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold uppercase tracking-widest px-1">Email</label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="h-14 rounded-2xl bg-secondary border-none focus-visible:ring-2 focus-visible:ring-royal-blue"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold uppercase tracking-widest px-1">Sujet</label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Parlons de votre projet"
                className="h-14 rounded-2xl bg-secondary border-none focus-visible:ring-2 focus-visible:ring-royal-blue"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-sm font-bold uppercase tracking-widest px-1">Message</label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Comment puis-je vous aider ?"
                className="min-h-40 rounded-2xl bg-secondary border-none focus-visible:ring-2 focus-visible:ring-royal-blue resize-none"
                required
              />
            </div>

            {success && <p className="text-green-600 font-semibold">Message envoyé avec succès !</p>}
            {error && <p className="text-red-600 font-semibold">{error}</p>}

            <Button
              type="submit"
              disabled={loading}
              className="h-16 rounded-2xl bg-royal-blue hover:bg-royal-blue/90 text-white text-lg font-bold shadow-lg shadow-royal-blue/20 group"
            >
              {loading ? "Envoi..." : "Envoyer le message"}
              <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
