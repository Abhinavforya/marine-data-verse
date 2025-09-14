import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Activity, Database, Map, Waves } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center">
              <Waves className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Marine Data Platform</h1>
              <p className="text-sm text-muted-foreground">Marine Biodiversity Data Platform</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
              <Database className="w-4 h-4 mr-2" />
              Data Hub
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
              <Map className="w-4 h-4 mr-2" />
              Research Maps
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary">
              <Activity className="w-4 h-4 mr-2" />
              Live Monitoring
            </Button>
          </div>

          <div className="flex items-center space-x-3">
            <Badge variant="outline" className="bg-success/10 text-success border-success/30">
              <Activity className="w-3 h-3 mr-1" />
              Live
            </Badge>
            <Button variant="default" size="sm" className="bg-gradient-ocean shadow-ocean">
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}