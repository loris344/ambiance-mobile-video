import { motion } from "framer-motion";
import bydLogo from "@/assets/logos/byd.png";
import visaLogo from "@/assets/logos/visa.png";
import arsLogo from "@/assets/logos/ars.png";
import kfcLogo from "@/assets/logos/kfc.png";
import creditAgricoleLogo from "@/assets/logos/credit-agricole.png";
import grainDeSailLogo from "@/assets/logos/grain-de-sail.png";
import montlimartLogo from "@/assets/logos/montlimart.png";
import remarkableLogo from "@/assets/logos/remarkable.png";
import legoLogo from "@/assets/logos/lego.png";
import samsungLogo from "@/assets/logos/samsung.png";
import aveneLogo from "@/assets/logos/avene.png";

const partners = [
  { name: "BYD", logo: bydLogo },
  { name: "VISA", logo: visaLogo },
  { name: "ARS", logo: arsLogo },
  { name: "KFC", logo: kfcLogo },
  { name: "Crédit Agricole", logo: creditAgricoleLogo },
  { name: "Grain de Sail", logo: grainDeSailLogo },
  { name: "Montlimart", logo: montlimartLogo },
  { name: "Remarkable", logo: remarkableLogo },
  { name: "LEGO", logo: legoLogo },
  { name: "Samsung", logo: samsungLogo },
  { name: "Avène", logo: aveneLogo },
];

const PartnersSection = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center"
        >
          Ils nous font <span className="gradient-text">confiance</span>
        </motion.h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-scroll">
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={`${partner.name}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center w-32 h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
