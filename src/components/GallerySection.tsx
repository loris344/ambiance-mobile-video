import { motion } from "framer-motion";
import img1 from "@/assets/humain1.jpg";
import img2 from "@/assets/humain2.jpg";
import img3 from "@/assets/humain3.jpg";
import img4 from "@/assets/humain4.jpg";
import img5 from "@/assets/humain5.jpg";
import img6 from "@/assets/humain6.png";

const images = [
  { src: img1, alt: "Campagne TOA Sushi – Paris Beaugrenelle", label: "TOA Sushi" },
  { src: img6, alt: "Campagne Parions Sport – Parc des Princes", label: "Parions Sport" },
  { src: img3, alt: "Campagne Visa – Click to Pay", label: "Visa" },
  { src: img4, alt: "Campagne Chicken Street – Salon Street Food", label: "Chicken Street" },
  { src: img5, alt: "Campagne ARS – Prévention santé étudiants", label: "ARS" },
  { src: img2, alt: "Campagne Art & Crypto – Cannes", label: "In Gad We Trust Art" },
];

const GallerySection = () => {
  return (
    <section id="realisations" className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="gradient-text">réalisations</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ils nous ont fait confiance pour leurs campagnes d'affichage mobile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden border border-border"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-lg font-semibold text-foreground">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
