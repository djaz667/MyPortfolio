export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-white dark:bg-black py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
            <span className="text-xl font-bold tracking-tighter text-royal-blue">
              Djazime Saleh
            </span>
            <p className="text-sm text-muted-foreground max-w-xs">
              Développement web et design créatif pour renforcer la présence en ligne et l'impact digital des entreprises.
            </p>
        </div>
        
        <div className="flex gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="/" className="hover:text-royal-blue transition-colors">Accueil</a>
              <a href="/a-propos" className="hover:text-royal-blue transition-colors">À propos</a>
              <a href="/projets" className="hover:text-royal-blue transition-colors">Projets</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:djazimes@gmail.com" className="hover:text-royal-blue transition-colors">Email</a>
              <a href="https://linkedin.com/in/Djazime-Saleh" target="_blank" rel="noopener noreferrer" className="hover:text-royal-blue transition-colors">LinkedIn</a>
            </nav>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/30 flex justify-between items-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Djazime Saleh. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
