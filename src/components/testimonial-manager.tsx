"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Shield, Check, Trash2, Plus, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { useTestimonials, Testimonial } from "@/hooks/use-testimonials";

export function TestimonialManager() {
  const { 
    testimonials, 
    publicTestimonials, 
    isAdmin, 
    addTestimonial, 
    approveTestimonial, 
    deleteTestimonial, 
    loginAdmin, 
    logoutAdmin 
  } = useTestimonials();

  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({ name: "", role: "", text: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTestimonial(formData);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setIsTestimonialModalOpen(false);
      setFormData({ name: "", role: "", text: "" });
    }, 3000);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginAdmin(password)) {
      setIsAdminModalOpen(false);
      setPassword("");
    } else {
      alert("Mot de passe incorrect");
    }
  };

  // Liste à afficher selon admin ou public
  const displayedTestimonials = isAdmin ? testimonials : publicTestimonials;

  return (
    <div className="flex flex-col gap-12">
      {/* Header & Admin */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-4xl font-bold">Témoignages</h2>
          <Dialog open={isAdminModalOpen} onOpenChange={setIsAdminModalOpen}>
            <DialogTrigger asChild>
              <button className="p-2 opacity-20 hover:opacity-100 transition-opacity">
                <Shield className="w-4 h-4" />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-106.25">
              <DialogHeader>
                <DialogTitle>Accès Administrateur</DialogTitle>
                <DialogDescription>
                  Entrez le mot de passe pour gérer les témoignages.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleAdminLogin} className="flex flex-col gap-4 py-4">
                <Input
                  type="password"
                  placeholder="Mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-xl"
                />
                <Button type="submit" className="bg-royal-blue rounded-xl">
                  Se connecter
                </Button>
                {isAdmin && (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => { logoutAdmin(); setIsAdminModalOpen(false); }}
                    className="rounded-xl"
                  >
                    Se déconnecter
                  </Button>
                )}
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Ajouter un témoignage */}
        <Dialog open={isTestimonialModalOpen} onOpenChange={setIsTestimonialModalOpen}>
          <DialogTrigger asChild>
            <Button className="bg-royal-blue text-white rounded-full px-6 gap-2">
              <Plus className="w-4 h-4" /> Laisser un témoignage
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-125 rounded-4xl p-8">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <DialogHeader className="mb-6">
                    <DialogTitle className="text-3xl font-bold">Votre Témoignage</DialogTitle>
                    <DialogDescription className="text-lg">
                      Partagez votre expérience de collaboration.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Nom</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Ex: Jean Dupont"
                          className="h-12 rounded-xl bg-secondary border-none"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Poste</label>
                        <Input
                          required
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          placeholder="Ex: CEO, TechFlow"
                          className="h-12 rounded-xl bg-secondary border-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                      <Textarea
                        required
                        value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                        placeholder="Votre avis sur notre collaboration..."
                        className="min-h-30 rounded-xl bg-secondary border-none resize-none"
                      />
                    </div>
                    <Button type="submit" className="h-14 bg-royal-blue rounded-xl text-lg font-bold">
                      Envoyer <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center gap-6"
                >
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <Check className="w-10 h-10" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold">Merci !</h3>
                    <p className="text-muted-foreground">
                      Votre témoignage a été reçu. Il sera visible après validation par l'administrateur.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </DialogContent>
        </Dialog>
      </div>

      {/* Témoignages */}
      {displayedTestimonials.length === 0 ? (
        <p className="text-muted-foreground italic text-center">Aucun témoignage disponible pour le moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-white dark:bg-zinc-900 p-8 rounded-4xl border border-border/50 flex flex-col gap-6 group shadow-sm hover:shadow-xl transition-all duration-500 ${t.status === 'pending' ? 'ring-2 ring-royal-blue/20 bg-royal-blue/5' : ''}`}
            >
              {isAdmin && (
                <div className="absolute top-4 right-4 flex gap-2 z-10">
                  {t.status === 'pending' && (
                    <button 
                      onClick={() => approveTestimonial(t.id)}
                      className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                      title="Approuver"
                    >
                      <Check className="w-5 h-5" />
                    </button>
                  )}
                  <button 
                    onClick={() => deleteTestimonial(t.id)}
                    className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                    title="Supprimer"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              )}

              {t.status === 'pending' && (
                <span className="absolute top-4 left-4 bg-royal-blue text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  En attente
                </span>
              )}

              <div className="flex gap-1 text-royal-blue">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              
              <p className="italic text-muted-foreground leading-relaxed grow">"{t.text}"</p>
              
              <div className="flex items-center gap-4">
                {t.image ? (
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-royal-blue/10 flex items-center justify-center text-royal-blue font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
