import { Navigation } from "@/components/marine/Navigation";
import { HeroSection } from "@/components/marine/HeroSection";
import { Dashboard } from "@/components/marine/Dashboard";
import { FeatureShowcase } from "@/components/marine/FeatureShowcase";
import { Footer } from "@/components/marine/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Marine Data Platform | Smart India Hackathon 2024";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <Dashboard />
        <FeatureShowcase />
      </main>
      <Footer />
    </div>
  );
};

export default Index;