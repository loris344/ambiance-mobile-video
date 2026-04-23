import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Briefing", desc: "Partagez-nous votre brief : objectifs, cible, lieux et dates souhaitées." },
  { num: "02", title: "Création", desc: "Nous adaptons ou créons vos visuels vidéo au format écran sac à dos." },
  { num: "03", title: "Déploiement", desc: "Nos ambassadeurs diffusent votre campagne dans les zones stratégiques." },
  { num: "04", title: "Rapport", desc: "Recevez un bilan complet : photos, parcours GPS, impressions estimées." },
];

const HowItWorksSection = () => {
  return (
    <section id="fonctionnement" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comment ça <span className="gradient-text">fonctionne</span> ?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <span className="text-7xl font-bold text-primary/10">{step.num}</span>
              <h3 className="text-xl font-semibold -mt-4 mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
