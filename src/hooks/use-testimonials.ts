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

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Charger les témoignages depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem('testimonials');
    if (saved) {
      setTestimonials(JSON.parse(saved));
    } else {
      // Commencer avec un tableau vide si aucun témoignage n'est sauvegardé
      setTestimonials([]);
      localStorage.setItem('testimonials', JSON.stringify([]));
    }

    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    setIsAdmin(adminStatus);
  }, []);

  // Sauvegarder dans localStorage
  const saveTestimonials = (newTestimonials: Testimonial[]) => {
    setTestimonials(newTestimonials);
    localStorage.setItem('testimonials', JSON.stringify(newTestimonials));
  };

  // Ajouter un témoignage (statut pending par défaut)
  const addTestimonial = (testimonial: Omit<Testimonial, 'id' | 'status' | 'createdAt'>) => {
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    saveTestimonials([newTestimonial, ...testimonials]);
  };

  // Approuver un témoignage
  const approveTestimonial = (id: string) => {
    const updated = testimonials.map(t =>
      t.id === id ? { ...t, status: 'approved' as const } : t
    );
    saveTestimonials(updated);
  };

  // Supprimer un témoignage
  const deleteTestimonial = (id: string) => {
    const updated = testimonials.filter(t => t.id !== id);
    saveTestimonials(updated);
  };

  // Connexion administrateur
  const loginAdmin = (password: string) => {
    if (password === 'admin123') {
      setIsAdmin(true);
      localStorage.setItem('isAdmin', 'true');
      return true;
    }
    return false;
  };

  // Déconnexion administrateur
  const logoutAdmin = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  // Témoignages visibles par le public
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
