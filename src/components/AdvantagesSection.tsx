import { motion } from "framer-motion";
import { Eye, MapPin, Zap, Users, Monitor, TrendingUp } from "lucide-react";

const advantages = [
  {
    icon: Eye,
    title: "Visibilité maximale",
    description: "Un écran lumineux porté par un humain capte 10x plus l'attention qu'un panneau statique.",
  },
  {
    icon: MapPin,
    title: "Ciblage géolocalisé",
    description: "Nos ambassadeurs se déplacent là où se trouve votre audience : événements, centres-villes, salons.",
  },
  {
    icon: Zap,
    title: "Contenu dynamique",
    description: "Vidéos, animations, QR codes interactifs — changez votre message en temps réel.",
  },
  {
    icon: Users,
    title: "Interaction humaine",
    description: "Nos ambassadeurs engagent la conversation et distribuent flyers ou échantillons.",
  },
  {
    icon: Monitor,
    title: "Écrans HD lumineux",
    description: "Écrans LED/LCD haute résolution visibles même en plein soleil.",
  },
  {
    icon: TrendingUp,
    title: "ROI mesurable",
    description: "Tracking GPS, comptage d'impressions et rapports détaillés après chaque campagne.",
  },
];

const AdvantagesSection = () => {
  return (
    <section id="avantages" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pourquoi choisir l'<span className="gradient-text">affichage mobile humain</span> ?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Une solution publicitaire innovante qui combine technologie digitale et proximité humaine.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 card-glow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
