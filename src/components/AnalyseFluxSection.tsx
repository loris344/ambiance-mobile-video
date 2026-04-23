import { motion } from "framer-motion";
import analyseFluxImg from "@/assets/analyse-flux.png";

const AnalyseFluxSection = () => {
  return (
    <section id="analyse" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Notre outil d'<span className="gradient-text">analyse de flux</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un dashboard interne pour estimer l'audience, analyser les CSP et piloter vos campagnes en temps réel avec vous.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="rounded-xl overflow-hidden border border-border card-glow"
        >
          <img
            src={analyseFluxImg}
            alt="Dashboard d'analyse de flux piéton — ciblage, routage et reporting de campagne Pixel Walk"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AnalyseFluxSection;
