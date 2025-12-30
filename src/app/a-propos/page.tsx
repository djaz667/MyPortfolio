"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { GraduationCap, Briefcase, Award, CheckCircle2 } from "lucide-react";

export default function About() {
  const [isImageColor, setIsImageColor] = useState(false);

  return (
    <div className="flex flex-col gap-24 pb-24 px-6 max-w-7xl mx-auto w-full pt-12">
      {/* Intro Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">À Propos de moi</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Je m'appelle <span className="text-royal-blue font-bold">Abakar Djazime Saleh</span>, je suis un développeur junior, actuellement en première année de cycle ingénieur, spécialité Cloud et Virtualisation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Passionné depuis toujours par l'informatique, j'ai toujours été fasciné par la manière dont le développement logiciel peut transformer des idées en solutions concrètes et utiles pour les utilisateurs. Diplômé d'une licence en génie logiciel et systèmes d'information, j'ai acquis une solide base théorique et pratique qui me permet de concevoir des solutions fiables et évolutives, alliant design et technologie.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mon parcours m'a mené à travailler sur des projets variés, de l'application full-stack à l'intégration ERP, en passant par le développement mobile. Curieux et déterminé, je m'efforce constamment de me perfectionner pour répondre aux défis du monde numérique actuel. Cette diversité m'a appris à m'adapter et à évoluer dans un environnement numérique en constante évolution.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-royal-blue pl-6 py-2 bg-secondary/30 rounded-r-xl">
              "Je suis convaincu que l'apprentissage constant et la pratique régulière sont essentiels pour devenir un développeur complet et un professionnel polyvalent."
            </p>
          </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileTap={{ filter: "grayscale(0%)" }}
          onTouchStart={() => setIsImageColor(true)}
          onTouchEnd={() => setIsImageColor(false)}
          className="rounded-[3rem] overflow-hidden bg-secondary border border-border"
        >
          <img
            src="assets/profil.jpg"
            alt="Portrait Abakar"
            className={`w-full h-full object-cover transition-all duration-700 ${isImageColor ? 'grayscale-0' : 'grayscale'} hover:grayscale-0`}
          />
        </motion.div>
      </section>

      {/* Experience & Education */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <Briefcase className="w-8 h-8 text-royal-blue" />
            <h2 className="text-3xl font-bold">Parcours Professionnel</h2>
          </div>
          <div className="flex flex-col gap-8">
            {[

              {  year: "Récent", 
                title: "Développeur Mobile UX/UI", 
                company: "BudgetFlow", 
                desc: "Développement d'une application mobile de gestion budgétaire avec un focus sur la simplicité et l'expérience utilisateur." 
              },
              { 
                year: "Projet", 
                title: "Intégration Odoo & Digitalisation", 
                company: "Solution Sécurité Bâtiment", 
                desc: "Contribution à l'intégration d'un module Odoo et optimisation de la présence digitale de l'entreprise." 
              },
              { 
                year: "Projet", 
                title: "Développeur Full-stack", 
                company: "Centre de Formation", 
                desc: "Création d'une application de gestion complète (interface et serveur) en appliquant les bonnes pratiques de développement." 
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2 relative pl-8 border-l border-border">
                <div className="absolute -left-1.25 top-2 w-2 h-2 rounded-full bg-royal-blue" />
                <span className="text-sm font-semibold text-royal-blue">{item.year}</span>
                <h3 className="text-xl font-bold">{item.title} — {item.company}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <GraduationCap className="w-8 h-8 text-royal-blue" />
            <h2 className="text-3xl font-bold">Formations</h2>
          </div>
          <div className="flex flex-col gap-8">
            {[
              { 
                year: "2025 - Présent", 
                title: "Cycle Ingénieur", 
                school: "Spécialité Cloud et Virtualisation", 
                desc: "Première année de cycle ingénieur approfondissant les architectures distribuées." 
              },
              { 
                year: "Diplômé", 
                title: "Licence en Génie Logiciel", 
                school: "Systèmes d'Information", 
                desc: "Acquisition d'une solide base théorique et pratique en programmation, conception de systèmes et bases de données." 
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2 relative pl-8 border-l border-border">
                <div className="absolute -left-1.25 top-2 w-2 h-2 rounded-full bg-royal-blue" />
                <span className="text-sm font-semibold text-royal-blue">{item.year}</span>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.school} — {item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-royal-blue rounded-[3rem] p-12 md:p-24 text-white">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight">Compétences Techniques</h2>
            <p className="text-lg text-white/70">Un profil polyvalent mêlant développement, design et expérience utilisateur.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { category: "Développement", skills: ["Web & Mobile", "Odoo Integration", "Déploiement", "Hébergement"] },
              { category: "Frontend", skills: ["React / Next.js", "UI/UX Design", "Tailwind CSS", "Flutter"] },
              { category: "Collaboration", skills: [ "Travail en équipe","Communication claire", "Suivi des retours", "Documentation simple"] },
              { category: "Méthode de travail", skills: ["Analyse des besoins", "Gestion de Projet", "Travail étape par étape", "Respect des délais"] }
            ].map((group, i) => (
              <div key={i} className="flex flex-col gap-6">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                  {group.category}
                </h3>
                <ul className="flex flex-col gap-3">
                  {group.skills.map((skill, j) => (
                    <li key={j} className="flex items-center gap-2 text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-white/40" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
