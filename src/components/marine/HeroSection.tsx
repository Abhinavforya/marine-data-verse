import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Database, BarChart3, MapPin } from "lucide-react";
import marineHero from "@/assets/marine-hero.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={marineHero} 
          alt="Marine research underwater scene with coral reefs and diverse marine life" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-twilight/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-accent/20 text-accent border-accent/30 backdrop-blur-sm">
            Smart India Hackathon 2024 • CMLRE Solution
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Marine Data
            <span className="block bg-gradient-surface bg-clip-text text-transparent">
              Universe
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Unifying marine biodiversity data through AI-powered analytics, real-time monitoring, 
            and collaborative research tools for ocean conservation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-ocean shadow-deep text-lg px-8 py-4 h-auto"
            >
              Explore Platform
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground backdrop-blur-sm text-lg px-8 py-4 h-auto hover:bg-primary-foreground/20"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/20 backdrop-blur-sm border-border/30 p-6 shadow-surface">
              <Database className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Unified Data Hub</h3>
              <p className="text-primary-foreground/80 text-sm">
                Integrate diverse marine datasets from multiple sources into a single platform
              </p>
            </Card>
            
            <Card className="bg-card/20 backdrop-blur-sm border-border/30 p-6 shadow-surface">
              <BarChart3 className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">AI Analytics</h3>
              <p className="text-primary-foreground/80 text-sm">
                Advanced machine learning models for species identification and trend analysis
              </p>
            </Card>
            
            <Card className="bg-card/20 backdrop-blur-sm border-border/30 p-6 shadow-surface">
              <MapPin className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Geospatial Mapping</h3>
              <p className="text-primary-foreground/80 text-sm">
                Interactive maps with real-time sensor data and research locations
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}