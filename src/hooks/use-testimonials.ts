"use client";

import { useState, useEffect } from 'react';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  image?: string;
  status: 'approved' | 'pending';
  createdAt: string;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Thomas Bernard",
    role: "CEO, TechInnovate",
    text: "Une collaboration exceptionnelle. Le design est d'une pureté incroyable et les performances sont au rendez-vous. Mon site n'a jamais été aussi beau.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000",
    status: 'approved',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    name: "Sophie Martin",
    role: "Directrice Artistique, Studio Graphique",
    text: "Un sens du détail rare. Il a su comprendre notre vision de marque premium et la traduire parfaitement en une expérience web minimaliste et efficace.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000",
    status: 'approved',
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    name: "Lucas Petit",
    role: "Fondateur, Éco-Responsable",
    text: "Professionnel, réactif et créatif. Le résultat dépasse nos attentes. Le site est non seulement beau mais aussi extrêmement rapide.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000",
    status: 'approved',
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    name: "Marie Dubois",
    role: "Freelance Marketing",
    text: "Travailler avec lui a été un plaisir. Son approche minimaliste a permis de clarifier notre message et d'augmenter nos conversions.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
    status: 'approved',
    createdAt: new Date().toISOString()
  }
];

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('testimonials');
    if (saved) {
      setTestimonials(JSON.parse(saved));
    } else {
      setTestimonials(DEFAULT_TESTIMONIALS);
      localStorage.setItem('testimonials', JSON.stringify(DEFAULT_TESTIMONIALS));
    }

    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);
  }, []);

  const saveTestimonials = (newTestimonials: Testimonial[]) => {
    setTestimonials(newTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(newTestimonials));
  };

  const addTestimonial = (testimonial: Omit<Testimonial, 'id' | 'status' | 'createdAt'>) => {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    saveTestimonials([newTestimonial, ...testimonials]);
  };

  const approveTestimonial = (id: string) => {
    const updated = testimonials.map(t => 
      t.id === id ? { ...t, status: 'approved' as const } : t
    );
    saveTestimonials(updated);
  };

  const deleteTestimonial = (id: string) => {
    const updated = testimonials.filter(t => t.id !== id);
    saveTestimonials(updated);
  };

  const loginAdmin = (password: string) => {
    if (password === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  const publicTestimonials = testimonials.filter(t => t.status === 'approved');

  return {
    testimonials,
    publicTestimonials,
    isAdmin,
    addTestimonial,
    approveTestimonial,
    deleteTestimonial,
    loginAdmin,
    logoutAdmin
  };
}
