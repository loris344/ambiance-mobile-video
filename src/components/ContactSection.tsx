import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Demande de devis – Affichage mobile humain");
    const body = encodeURIComponent(
      `Nom: ${formData.nom}\n\n${formData.message}`
    );
    window.location.href = `mailto:contact@pixel-walk.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contactez-nous</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Obtenez un devis personnalisé pour votre prochaine campagne d'affichage mobile.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Votre nom / entreprise"
              required
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              className="w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
            <textarea
              placeholder="Décrivez votre projet (lieu, dates, nombre d'ambassadeurs…)"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Envoyer ma demande
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground">contact@pixel-walk.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Zone d'intervention</h4>
                <p className="text-muted-foreground">Paris, Lyon, Marseille, Bordeaux et toute la France</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
