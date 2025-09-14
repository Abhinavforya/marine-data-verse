import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Waves, 
  Github, 
  ExternalLink, 
  Mail, 
  MapPin,
  Award,
  Users,
  Database
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-ocean rounded-lg flex items-center justify-center">
                <Waves className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Marine Data Platform</h3>
                <p className="text-sm text-muted-foreground">Marine Biodiversity Data Platform</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Empowering marine researchers with AI-driven analytics, real-time monitoring, 
              and collaborative tools for ocean biodiversity conservation.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {/* Removed SIH 2024 and CMLRE badges */}
              <Badge variant="outline" className="bg-accent/10 text-accent border-accent/20">
                <Users className="w-3 h-3 mr-1" />
                Open Source
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Data Hub
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  Research Maps
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  AI Analytics
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  API Documentation
                </Button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  <Github className="w-3 h-3 mr-2" />
                  GitHub Repository
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Technical Docs
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  <Mail className="w-3 h-3 mr-2" />
                  Contact Team
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="h-auto p-0 text-muted-foreground hover:text-primary">
                  <MapPin className="w-3 h-3 mr-2" />
                  Research Centers
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Marine Data Platform. Built with ❤️ for ocean conservation.
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              Terms of Use
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
              License
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}