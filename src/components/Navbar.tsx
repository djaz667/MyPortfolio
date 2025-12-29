"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";

const navItems = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Projets", href: "/projets" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ willChange: 'transform, opacity' }}
        className="premium-blur border border-border/50 rounded-3xl md:rounded-full px-3 py-2 flex items-center justify-between md:justify-start w-full max-w-[95vw] md:w-auto gap-2 pointer-events-auto shadow-sm transition-all duration-300"
      >
          <Link href="/" className="px-3 md:px-4 py-2 flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-royal-blue flex items-center justify-center text-white font-bold text-lg shrink-0">My</div>
            <span className="font-bold text-lg tracking-tight">Portfolio</span>
          </Link>
        
        <div className="h-6 w-px bg-border/50 mx-2 hidden md:block" />
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              prefetch={true}
              className={cn(
                "relative px-4 py-2 text-sm font-medium transition-colors hover:text-royal-blue",
                pathname === item.href ? "text-royal-blue" : "text-muted-foreground"
              )}
            >
              {pathname === item.href && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute inset-0 bg-royal-blue/5 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full p-6 border-none bg-background/95 backdrop-blur-xl">
                <SheetHeader className="mb-8">
                  <SheetTitle className="text-left flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-royal-blue flex items-center justify-center text-white font-bold text-lg">My</div>
                    Portfolio
                  </SheetTitle>
                </SheetHeader>
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-bold py-2 transition-colors",
                      pathname === item.href ? "text-royal-blue" : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-border/50">
                  <Button asChild className="w-full h-10 rounded-2xl bg-royal-blue text-white font-bold text-lg" onClick={() => setIsOpen(false)}>
                    <Link href="/contact">Démarrer un projet</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.div>
    </nav>
  );
}
