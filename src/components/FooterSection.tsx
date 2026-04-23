const FooterSection = () => (
  <footer className="py-10 border-t border-border">
    <div className="container text-center">
      <p className="text-xl font-bold font-heading gradient-text mb-2">Pixel Walk</p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Pixel Walk — Affichage mobile humain. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default FooterSection;
