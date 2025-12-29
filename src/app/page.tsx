"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { lazy, Suspense } from "react";
import { ArrowRight, Code, Layout, Smartphone, Star, Mail, Linkedin, Github, Send, Cloud, Globe, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const TestimonialManager = lazy(() => import("@/components/testimonial-manager").then(mod => ({ default: mod.TestimonialManager })));

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="px-6 pt-20 md:pt-32 max-w-7xl mx-auto w-full">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={stagger}
          className="flex flex-col gap-8 max-w-4xl"
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold tracking-tight text-balance leading-[0.9]"
          >
            Software <span className="text-royal-blue">Engineering</span>|
          </motion.h1>
          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold tracking-tight text-balance leading-[0.9]"
          >
          <span className="text-royal-blue">Web</span> Developer
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Développeur <span className="text-royal-blue font-bold">Full-stack</span>, Passionné par le développement digital, je transforme vos idées en solutions innovantes et prêtes à l'usage.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full px-8 bg-royal-blue hover:bg-royal-blue/90 text-white">
              <Link href="/projets">
                Voir mes projets <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-border hover:bg-secondary">
              <Link href="/contact">Me contacter</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section Brief */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="aspect-square rounded-[3rem] overflow-hidden bg-secondary border border-border"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden bg-secondary">
              <Image
                src="/assets/profil.jpg"
                alt="Abakar Djazime Saleh"
                width={400}
                height={400}
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Transformer vos idées en solutions concrètes.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionné par l'innovation, je combine rigueur technique en génie logiciel et créativité en design pour transformer vos idées en solutions fiables et évolutives.
            </p>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-royal-blue" />
                <span className="font-medium italic text-muted-foreground">Transformation Digital</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-royal-blue" />
                <span className="font-medium italic text-muted-foreground"> Full-stack & Mobile</span>
              </div>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 self-start group">
              <Link href="/a-propos">
                Découvrir mon parcours <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-secondary/50 py-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            <div className="flex flex-col gap-4 p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-border/50">
              <div className="w-12 h-12 rounded-2xl bg-royal-blue/10 flex items-center justify-center text-royal-blue">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Site Web</h3>
              <p className="text-muted-foreground">Développement de sites vitrines uniques, pour sublimer votre entreprise, vos services et maximiser votre impact sur le web.</p>
            </div>
            
            <div className="flex flex-col gap-4 p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-border/50">
              <div className="w-12 h-12 rounded-2xl bg-royal-blue/10 flex items-center justify-center text-royal-blue">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Développement Full-stack</h3>
              <p className="text-muted-foreground">Création d'applications web et mobiles robustes avec une logique serveur performante.</p>
            </div>
            
            <div className="flex flex-col gap-4 p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-border/50">
              <div className="w-12 h-12 rounded-2xl bg-royal-blue/10 flex items-center justify-center text-royal-blue">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">Design UI/UX</h3>
              <p className="text-muted-foreground">Focus sur la simplicité et l'expérience utilisateur pour des interfaces à la fois esthétiques et fonctionnelles.</p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Featured Projects Preview */}
      <section className="px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Réalisations Récentes</h2>
            <p className="text-lg text-muted-foreground">Une sélection de mes travaux alliant architecture logicielle et UX soignée.</p>
          </div>
          <Button variant="link" asChild className="text-royal-blue p-0 h-auto text-lg font-medium group">
            <Link href="/projets">
              Voir tous les projets <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Site Web ",
              category: "Application Full-stack",
              image: "/assets/acc.jpeg",
              color: "bg-blue-50"
            },
            {
              title: "BudgetFlow Mobile",
              category: "Mobile & UX/UI",
              image: "/assets/m1.jpeg",
              color: "bg-zinc-50"
            },
            {
              title: "Application de Gestion des Formations",
              category: "Solutions centralisées",
              image: "/assets/photo4.jpg",
              color: "bg-royal-blue/5"
            }
          ].map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={cn("group cursor-pointer", i === 2 && "md:col-span-2 lg:col-span-1")}
            >
              <div className={`aspect-video md:aspect-4/3 rounded-3xl overflow-hidden mb-6 ${project.color}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-between items-center px-2">
                <div>
                  <p className="text-sm font-medium text-royal-blue mb-1 uppercase tracking-widest">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors group-hover:bg-royal-blue group-hover:border-royal-blue group-hover:text-white">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-secondary/30 py-24 px-6">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold italic text-royal-blue/60 uppercase tracking-widest mb-2">Avis</h2>
            <h3 className="text-5xl font-bold tracking-tight">Collaborations & Retours</h3>
            <p className="text-muted-foreground text-lg">Travailler ensemble pour transformer vos visions en réalité numérique.</p>
          </div>

          <Suspense fallback={
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-4 border-royal-blue border-t-transparent rounded-full animate-spin" />
            </div>
          }>
            <TestimonialManager />
          </Suspense>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-24 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-royal-blue rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-royal-blue rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-royal-blue">Méthodologie</h2>
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight">Mon Processus Créatif</h3>
              <p className="text-xl text-zinc-400">Une approche structurée pour garantir des résultats d'exception.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Découverte",
                  desc: "Analyse approfondie de vos besoins et définition des objectifs stratégiques du projet.",
                  icon: <Globe className="w-8 h-8" />
                },
                {
                  step: "02",
                  title: "Architecture",
                  desc: "Conception de la structure logicielle et de l'expérience utilisateur (UX/UI).",
                  icon: <Cpu className="w-8 h-8" />
                },
                {
                  step: "03",
                  title: "Développement",
                  desc: "Utilisation des technologies les plus performantes du marché.",
                  icon: <Code className="w-8 h-8" />
                },
                {
                  step: "04",
                  title: "Déploiement",
                  desc: "Mise en production sécurisée et optimisation continue des performances.",
                  icon: <Zap className="w-8 h-8" />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col gap-6 p-8 rounded-4xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="flex justify-between items-start">
                    <div className="text-royal-blue group-hover:scale-110 transition-transform duration-500">
                      {item.icon}
                    </div>
                    <span className="text-4xl font-black text-white/10 group-hover:text-royal-blue/20 transition-colors">{item.step}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="text-2xl font-bold">{item.title}</h4>
                    <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="flex flex-col gap-8">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]">Prêt à lancer votre prochain projet ?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Allier créativité, design et développement web pour propulser votre transformation digitale et renforcer votre visibilité sur le web., je suis prêt à relever le défi.
            </p>
            
            <div className="flex flex-col gap-6 pt-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-royal-blue/10 flex items-center justify-center text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium text-balance">djazimes@gmail.com</span>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-royal-blue/10 flex items-center justify-center text-royal-blue group-hover:bg-royal-blue group-hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-lg font-medium">linkedin.com/in/abakar-djazime</span>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 p-8 md:p-12 rounded-[3rem] border border-border/50 shadow-xl shadow-black/5"
          >
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold uppercase tracking-widest px-1 text-muted-foreground">Nom</label>
                  <Input placeholder="Votre nom" className="h-14 rounded-2xl bg-secondary border-none" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-sm font-bold uppercase tracking-widest px-1 text-muted-foreground">Email</label>
                  <Input type="email" placeholder="votre@email.com" className="h-14 rounded-2xl bg-secondary border-none" />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <label className="text-sm font-bold uppercase tracking-widest px-1 text-muted-foreground">Message</label>
                <Textarea placeholder="Parlez-moi de votre projet..." className="min-h-40 rounded-2xl bg-secondary border-none resize-none" />
              </div>
              <Button className="h-16 rounded-2xl bg-royal-blue hover:bg-royal-blue/90 text-white text-lg font-bold group">
                Envoyer le message <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
