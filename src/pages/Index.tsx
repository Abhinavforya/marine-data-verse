import { Navigation } from "@/components/marine/Navigation";
import { HeroSection } from "@/components/marine/HeroSection";
import { Dashboard } from "@/components/marine/Dashboard";
import { IndianOceanMap } from "@/components/marine/IndianOceanMap";
import { FeatureShowcase } from "@/components/marine/FeatureShowcase";
import { Footer } from "@/components/marine/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Marine Data Platform";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
  <Dashboard />
  <IndianOceanMap />
  <FeatureShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;