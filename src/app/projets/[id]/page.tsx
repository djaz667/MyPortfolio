"use client";

import { use, Suspense } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, ChevronRight, Code2, Layers } from "lucide-react";
import { projects } from "@/lib/projects-data";
import { notFound } from "next/navigation";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

function ProjectContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-12 pb-24 px-6 max-w-7xl mx-auto w-full pt-12">
      {/* Navigation */}
      <Link 
        href="/projets" 
        className="flex items-center gap-2 text-muted-foreground hover:text-royal-blue transition-colors group w-fit"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        <span className="font-medium">Retour aux projets</span>
      </Link>

      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4">
            <span className="text-royal-blue font-bold uppercase tracking-[0.2em] text-sm">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {project.title}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          
          <div className="grid grid-cols-2 gap-8 py-8 border-y border-border/50">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <User className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Client</span>
              </div>
              <span className="text-lg font-bold">{project.client}</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Année</span>
              </div>
              <span className="text-lg font-bold">{project.year}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-1.5 bg-secondary rounded-full text-sm font-medium border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="aspect-square lg:aspect-4/5 rounded-[2.5rem] overflow-hidden border border-border shadow-2xl bg-secondary"
        >
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* Content & Code Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mt-12">
        <div className="lg:col-span-2 flex flex-col gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-3">
              <Layers className="w-6 h-6 text-royal-blue" />
              <h2 className="text-3xl font-bold">À propos du projet</h2>
            </div>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              {project.content.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {project.codeSnippet && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-royal-blue" />
                  <h2 className="text-3xl font-bold">Aperçu Technique</h2>
                </div>
                <span className="px-3 py-1 bg-royal-blue/10 text-royal-blue rounded-md text-xs font-bold uppercase">
                  {project.codeSnippet.language}
                </span>
              </div>
              
              <div className="rounded-2xl overflow-hidden border border-border bg-[#1e1e1e] shadow-xl">
                <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="text-xs text-zinc-500 font-mono ml-2 italic">
                    {project.codeSnippet.description}
                  </span>
                </div>
                <div className="text-sm">
                  <SyntaxHighlighter 
                    language={project.codeSnippet.language} 
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      padding: '1.5rem',
                      background: 'transparent',
                    }}
                  >
                    {project.codeSnippet.code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Sidebar Info */}
        <div className="lg:col-span-1">
           {/* You can add more info here like specific tools, links etc */}
        </div>
      </div>

      {/* Gallery */}
      <div className="flex flex-col gap-12 mt-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Galerie du Projet</h2>
          <p className="text-muted-foreground">Aperçu visuel des différentes interfaces et fonctionnalités.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={index === 0 ? "md:col-span-2 aspect-video rounded-4xl overflow-hidden border border-border group cursor-pointer bg-secondary" : "aspect-4/3 rounded-4xl overflow-hidden border border-border group cursor-pointer bg-secondary"}
            >
              <img
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Project CTA */}
      <div className="mt-24 p-12 rounded-[3rem] bg-royal-blue/5 border border-royal-blue/10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h3 className="text-2xl font-bold">Prêt à lancer votre prochain projet ?</h3>
          <p className="text-muted-foreground text-lg">Donnons vie à vos idées avec une solution sur mesure.</p>
        </div>
        <Link 
          href="/contact"
          className="px-8 py-4 bg-royal-blue text-white rounded-full font-bold hover:bg-royal-blue/90 transition-all flex items-center gap-2 shadow-xl shadow-royal-blue/20"
        >
          Me contacter
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-royal-blue border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ProjectContent params={params} />
    </Suspense>
  );
}
