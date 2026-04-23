import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Avantages", href: "#avantages" },
  { label: "Fonctionnement", href: "#fonctionnement" },
  { label: "Analyse de Flux", href: "/analyse-de-flux" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold font-heading">
          <span className="gradient-text">Pixel Walk</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            Devis gratuit
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border py-4">
          <div className="container flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center">
              Devis gratuit
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
