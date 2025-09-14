import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  TrendingUp, 
  Fish, 
  Waves, 
  Thermometer, 
  Gauge,
  MapPin,
  Users,
  Database,
  Zap
} from "lucide-react";
import dataVisualization from "@/assets/data-visualization.jpg";
import researchInfrastructure from "@/assets/research-infrastructure.jpg";

export function Dashboard() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Real-Time Marine Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Monitor ocean conditions, track biodiversity, and analyze research data 
            with our comprehensive dashboard system.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-ocean text-primary-foreground shadow-ocean">
            <CardContent className="p-6 text-center">
              <Database className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold">2.4M+</div>
              <div className="text-sm text-primary-foreground/80">Data Records</div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-surface text-accent-foreground shadow-surface">
            <CardContent className="p-6 text-center">
              <Fish className="w-8 h-8 mx-auto mb-3" />
              <div className="text-2xl font-bold">15,847</div>
              <div className="text-sm text-accent-foreground/80">Species Identified</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card shadow-surface border-success/20">
            <CardContent className="p-6 text-center">
              <Activity className="w-8 h-8 mx-auto mb-3 text-success" />
              <div className="text-2xl font-bold text-success">98.5%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </CardContent>
          </Card>
          
          <Card className="bg-card shadow-surface border-warning/20">
            <CardContent className="p-6 text-center">
              <Users className="w-8 h-8 mx-auto mb-3 text-warning" />
              <div className="text-2xl font-bold text-warning">1,247</div>
              <div className="text-sm text-muted-foreground">Active Researchers</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Monitoring */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-ocean">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-success" />
                      Live Ocean Monitoring
                    </CardTitle>
                    <CardDescription>Real-time sensor data from research stations</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                    <Zap className="w-3 h-3 mr-1" />
                    Live
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <img 
                    src={dataVisualization} 
                    alt="Real-time marine data visualization with flowing data streams and network connections" 
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Thermometer className="w-6 h-6 mx-auto mb-2 text-primary" />
                    <div className="font-semibold text-primary">24.7°C</div>
                    <div className="text-xs text-muted-foreground">Water Temp</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Waves className="w-6 h-6 mx-auto mb-2 text-secondary" />
                    <div className="font-semibold text-secondary">7.8 pH</div>
                    <div className="text-xs text-muted-foreground">Acidity</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Gauge className="w-6 h-6 mx-auto mb-2 text-accent" />
                    <div className="font-semibold text-accent">2.3 m/s</div>
                    <div className="text-xs text-muted-foreground">Currents</div>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-success" />
                    <div className="font-semibold text-success">High</div>
                    <div className="text-xs text-muted-foreground">Biodiversity</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research Infrastructure */}
            <Card className="shadow-surface">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Research Infrastructure
                </CardTitle>
                <CardDescription>Distributed sensor network and research stations</CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={researchInfrastructure} 
                  alt="Satellite view of ocean with research vessels and underwater sensors showing marine research infrastructure" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm">View Full Map</Button>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-semibold text-success">127</span> active sensors
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* System Status */}
            <Card className="shadow-surface">
              <CardHeader>
                <CardTitle className="text-lg">System Health</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Data Processing</span>
                    <span className="text-success">98%</span>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>API Response</span>
                    <span className="text-success">95%</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Sensor Network</span>
                    <span className="text-warning">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="shadow-surface">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                  <div className="text-sm">
                    <div className="font-medium">New species detected</div>
                    <div className="text-muted-foreground">Bay of Bengal • 2 min ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div className="text-sm">
                    <div className="font-medium">Sensor data updated</div>
                    <div className="text-muted-foreground">Research Station Alpha • 5 min ago</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div className="text-sm">
                    <div className="font-medium">Analysis completed</div>
                    <div className="text-muted-foreground">Coral reef survey • 12 min ago</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-surface">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Database className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Activity className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  Add Location
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}