"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Zap, Award, Star, Coffee, Users, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/projects-data";

const categories = ["Tous", "Application Web", "Mobile", "Solutions Entreprise"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filteredProjects = activeCategory === "Tous" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col gap-16 pb-24 px-6 max-w-7xl mx-auto w-full pt-12">
      <div className="flex flex-col gap-6 max-w-2xl">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Réalisations</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Découvrez une sélection de projets où chaque détail a été pensé pour allier esthétique premium et performance technique.
        </p>
      </div>

      {/* Philosophy Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-border/50">
        {[
          { 
            title: "Performance", 
            desc: "Optimisation maximale pour une expérience fluide et instantanée.",
            icon: <Zap className="w-6 h-6 text-royal-blue" />
          },
          { 
            title: "Qualité", 
            desc: "Code propre, maintenable et architectures robustes par défaut.",
            icon: <Award className="w-6 h-6 text-royal-blue" />
          },
          { 
            title: "Innovation", 
            desc: "Utilisation des dernières technologies pour rester à l'avant-garde.",
            icon: <Star className="w-6 h-6 text-royal-blue" />
          }
        ].map((item, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="w-12 h-12 rounded-2xl bg-royal-blue/10 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
              activeCategory === cat 
                ? "bg-royal-blue text-white shadow-lg shadow-royal-blue/20" 
                : "bg-secondary text-muted-foreground hover:bg-secondary/80"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Link href={`/projets/${project.id}`} className="group flex flex-col gap-4">
                <div className="aspect-4/5 rounded-4xl overflow-hidden bg-secondary border border-border relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <span className="text-xs font-bold text-royal-blue uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                  <p className="text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Coming Soon Card */}
        <motion.div
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="group flex flex-col gap-4"
        >
        </motion.div>
      </motion.div>

      {/* Metrics Section */}
      <section className="bg-zinc-950 rounded-[3rem] p-12 md:p-24 text-white mt-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-royal-blue/20 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="flex flex-col gap-16 relative z-10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-royal-blue">Impact</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Performance en Chiffres</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Projets Livrés", value: "5+", icon: <CheckCircle2 className="w-6 h-6" /> },
              { label: "Cafés Consommés", value: "2.2k", icon: <Coffee className="w-6 h-6" /> },
              { label: "Disponibilité", value: "24/5", icon: <Clock className="w-6 h-6" /> }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col gap-4">
                <div className="text-royal-blue">{stat.icon}</div>
                <div className="flex flex-col">
                  <span className="text-5xl font-bold">{stat.value}</span>
                  <span className="text-zinc-400 font-medium uppercase tracking-widest text-xs mt-2">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
