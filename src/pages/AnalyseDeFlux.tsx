import { useState } from "react";
import { MapContainer, TileLayer, Circle, Polyline, Marker } from "react-leaflet";
import { motion } from "framer-motion";
import { QrCode, Camera, Eye, Target, TrendingUp, Users } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const ambassadorIcon = L.divIcon({
  className: "",
  html: `<div style="width:16px;height:16px;background:#3B82F6;border:3px solid white;border-radius:50%;box-shadow:0 0 8px rgba(59,130,246,0.6);"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

// Nantes center
const CENTER: [number, number] = [47.2184, -1.5536];

const zones = [
  { name: "Zone Hyper-Centre", color: "#EF4444", radius: 400, center: [47.2184, -1.5536] as [number, number], pieton: "1 850" },
  { name: "Axes Commerciaux", color: "#F97316", radius: 600, center: [47.2150, -1.5600] as [number, number], pieton: "920" },
  { name: "Quartiers Transit", color: "#22C55E", radius: 800, center: [47.2220, -1.5450] as [number, number], pieton: "340" },
];

const routes: [number, number][][] = [
  [[47.2184, -1.5536], [47.2250, -1.5400], [47.2300, -1.5300]],
  [[47.2184, -1.5536], [47.2100, -1.5650], [47.2050, -1.5750]],
  [[47.2184, -1.5536], [47.2280, -1.5600], [47.2350, -1.5650]],
  [[47.2184, -1.5536], [47.2120, -1.5400], [47.2060, -1.5300]],
  [[47.2184, -1.5536], [47.2150, -1.5700], [47.2130, -1.5850]],
  [[47.2184, -1.5536], [47.2260, -1.5520], [47.2340, -1.5480]],
];

const routeColors = ["#EF4444", "#EF4444", "#F97316", "#F97316", "#22C55E", "#22C55E"];

const AnalyseDeFlux = () => {
  const [selectedCity] = useState("Nantes");

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <a href="/" className="text-xl font-bold font-heading">
              <span className="gradient-text">Pixel Walk</span>
            </a>
            <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
              Analyse de Flux
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/#fonctionnement" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Fonctionnement</a>
            <a href="/#realisations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Réalisations</a>
            <a href="/#contact" className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
              Devis gratuit
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20 pb-12">
        <div className="container">
          <div className="grid lg:grid-cols-[420px_1fr] gap-6 min-h-[calc(100vh-8rem)]">
            {/* Left Panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Header */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h1 className="text-2xl font-bold mb-1">Ciblage & Routage Piéton</h1>
                <p className="text-muted-foreground text-sm mb-4">
                  Détermination des zones à fort impact d'attention.
                </p>
                <div className="flex gap-2">
                  {zones.map((z) => (
                    <span
                      key={z.name}
                      className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ backgroundColor: z.color }}
                    >
                      {z.name === "Zone Hyper-Centre" ? "Affluence Forte" : z.name === "Axes Commerciaux" ? "Moyenne" : "Transit"}
                    </span>
                  ))}
                </div>
              </div>

              {/* Trafic estimé */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-sm font-bold tracking-wider text-foreground mb-4">TRAFIC ESTIMÉ</h2>
                <div className="flex justify-between text-xs text-muted-foreground font-semibold mb-3 px-1">
                  <span>SECTEUR / RUE</span>
                  <span>PIÉTONS / H</span>
                </div>
                <div className="space-y-3">
                  {zones.map((z) => (
                    <div key={z.name} className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: z.color }} />
                        <span className="text-sm text-foreground">{z.name}</span>
                      </div>
                      <span className="text-sm font-bold text-foreground">{z.pieton}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reporting */}
              <div className="p-6 rounded-xl bg-card border border-border">
                <h2 className="text-sm font-bold tracking-wider text-foreground mb-4">REPORTING INTERACTION</h2>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <div className="text-2xl font-bold text-primary">8 452</div>
                    <div className="text-xs text-primary/70 font-semibold mt-1">VUES ESTIMÉES</div>
                  </div>
                  <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
                    <div className="text-2xl font-bold text-primary">4.2%</div>
                    <div className="text-xs text-primary/70 font-semibold mt-1">TAUX D'ATTENTION</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <QrCode className="w-4 h-4" />
                      Scans QR Code
                    </div>
                    <span className="font-bold text-foreground">142</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Camera className="w-4 h-4" />
                      UGC (Photos/Vidéos RS)
                    </div>
                    <span className="font-bold text-foreground">38</span>
                  </div>
                </div>
              </div>

              {/* Avantages */}
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h2 className="text-lg font-bold text-primary mb-3">Avantages Pixel Walk</h2>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">Attention décuplée :</strong> <span className="text-muted-foreground">L'humain capte 10x plus le regard.</span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">Ciblage Mobile :</strong> <span className="text-muted-foreground">Déploiement agile selon les flux réels.</span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">ROI Transparent :</strong> <span className="text-muted-foreground">Données GPS, vues, interactions en temps réel.</span></span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-foreground">CSP Identifiée :</strong> <span className="text-muted-foreground">Profiling de la zone pour cibler la bonne audience.</span></span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-xl overflow-hidden border border-border relative min-h-[500px]"
            >
              <MapContainer
                center={CENTER}
                zoom={13}
                style={{ height: "100%", width: "100%", minHeight: "500px" }}
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://carto.com">CARTO</a>'
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {/* Zone circles */}
                {zones.map((z) => (
                  <Circle
                    key={z.name}
                    center={z.center}
                    radius={z.radius}
                    pathOptions={{ color: z.color, fillColor: z.color, fillOpacity: 0.15, weight: 2 }}
                  />
                ))}
                {/* Routes */}
                {routes.map((route, i) => (
                  <Polyline
                    key={i}
                    positions={route}
                    pathOptions={{ color: routeColors[i], weight: 4, opacity: 0.7 }}
                  />
                ))}
                {/* Ambassador */}
                <Marker position={CENTER} icon={ambassadorIcon} />
              </MapContainer>

              {/* Legend overlay */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-lg p-3 shadow-lg z-[1000]">
                <h3 className="text-xs font-bold text-gray-800 tracking-wider mb-2">AMBASSADEUR EN COURS</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow" />
                  <span className="text-xs text-gray-600 font-medium">Secteur Actif</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyseDeFlux;
