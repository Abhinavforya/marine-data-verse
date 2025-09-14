import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Globe, 
  Shield, 
  Zap, 
  Database, 
  BarChart3,
  Network,
  Microscope,
  Satellite,
  ArrowRight
} from "lucide-react";

export function FeatureShowcase() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Species Identification",
      description: "Advanced machine learning models for automated species classification and biodiversity analysis",
      category: "AI/ML",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Globe,
      title: "Geospatial Data Integration",
      description: "PostGIS-enabled mapping with real-time oceanographic data visualization",
      category: "Geospatial",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Database,
      title: "Multi-Database Architecture",
      description: "PostgreSQL, MongoDB, Neo4j, and Redis for optimized data storage and retrieval",
      category: "Data",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Zap,
      title: "Real-Time Monitoring",
      description: "WebSocket-based live data streaming from distributed sensor networks",
      category: "Monitoring",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: Network,
      title: "Microservices Architecture",
      description: "Scalable FastAPI-based services with Docker containerization",
      category: "Architecture",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "JWT authentication, AES-256 encryption, and role-based access control",
      category: "Security",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    }
  ];

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Platform Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comprehensive Marine Research
            <span className="block text-primary">Technology Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with cutting-edge technologies to provide researchers with 
            powerful tools for marine biodiversity analysis and conservation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="shadow-surface hover:shadow-ocean transition-all duration-300 group hover:-translate-y-1"
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <Badge variant="outline" className="w-fit mb-2 text-xs">
                    {feature.category}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Technology Stack Overview */}
        <Card className="bg-gradient-deep text-primary-foreground shadow-deep">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Advanced Technology Integration
                </h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Microscope className="w-5 h-5 text-accent" />
                    <span>Real-time species identification using computer vision</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Satellite className="w-5 h-5 text-accent" />
                    <span>Satellite data integration for ocean monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-accent" />
                    <span>Predictive analytics for conservation planning</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  View Technical Architecture
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent">FastAPI</div>
                  <div className="text-sm text-primary-foreground/80">Backend Framework</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent">PostGIS</div>
                  <div className="text-sm text-primary-foreground/80">Geospatial Database</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent">TensorFlow</div>
                  <div className="text-sm text-primary-foreground/80">ML Framework</div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent">Kubernetes</div>
                  <div className="text-sm text-primary-foreground/80">Orchestration</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}