import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "wouter";
import { 
  Home, 
  Building, 
  MapPin, 
  TrendingUp, 
  FileText, 
  User,
  Heart,
  Eye,
  Phone,
  ChevronRight
} from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    {
      title: "RENT A HOME",
      items: [
        "PG/CO-LIVING",
        "COMMERCIAL", 
        "POPULAR AREAS",
        "INSIGHTS",
        "ARTICLES & NEWS"
      ]
    },
    {
      title: "PROPERTIES IN BANGALORE EAST",
      items: [
        "Flats",
        "Builder Floors", 
        "Independent House",
        "Serviced Apartments",
        "Studio Apartments/1 RK Flats"
      ]
    },
    {
      title: "POPULAR SEARCHES",
      items: [
        "Property for rent in Bangalore East",
        "Verified Property in Bangalore East"
      ]
    }
  ];

  const userActivities = [
    { icon: Eye, label: "Recently Viewed", count: 0 },
    { icon: Heart, label: "Shortlisted", count: 0 },
    { icon: Phone, label: "Contacted", count: 0 }
  ];

  const insights = [
    "Understand localities",
    "Read Resident Reviews", 
    "Check Price Trends",
    "Tools, Utilities & more"
  ];

  return (
    <div className="w-80 bg-background border-r h-screen overflow-y-auto sticky top-0 hidden lg:block">
      {/* Contact Info */}
      <div className="p-4 bg-primary/5">
        <p className="text-sm text-muted-foreground mb-1">contact us toll free on</p>
        <p className="font-semibold text-primary">1800 41 99099 (9AM-11PM IST)</p>
        <p className="text-xs text-muted-foreground mt-2">
          Email us at services@99acres.com, or call us at 1800 41 99099 (IND Toll-Free)
        </p>
      </div>

      {/* Menu Items */}
      <div className="p-4 space-y-6">
        {menuItems.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-sm text-muted-foreground mb-3 tracking-wide">
              {section.title}
            </h3>
            <div className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <Button
                  key={itemIndex}
                  variant="ghost"
                  className="w-full justify-start text-sm hover:bg-primary/10"
                  asChild
                >
                  <Link to={`/${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                    <span>{item}</span>
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        ))}

        <Separator />

        {/* Recent Searches */}
        <div>
          <h3 className="font-semibold text-sm mb-3">Recent searches:</h3>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="text-xs">
              Buy in Chennai South , Independent/B...
            </Button>
            <Button variant="link" className="text-xs p-0 text-primary">
              View all searches
            </Button>
          </div>
        </div>

        <Separator />

        {/* Insights Section */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {insights.map((insight, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start text-sm hover:bg-primary/10"
              >
                <span className="text-blue-600">○</span>
                <span className="ml-2">{insight}</span>
              </Button>
            ))}
          </CardContent>
        </Card>

        <Separator />

        {/* User Activity */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="h-5 w-5" />
              Guest User
            </CardTitle>
            <p className="text-sm text-muted-foreground">Your Recent Activity</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-center py-4">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <p className="text-sm text-muted-foreground">Viewed</p>
            </div>
            
            <div className="space-y-2">
              {userActivities.map((activity, index) => {
                const IconComponent = activity.icon;
                return (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4 text-muted-foreground" />
                      <span>{activity.label}</span>
                    </div>
                    <Badge variant="outline">{activity.count}</Badge>
                  </div>
                );
              })}
            </div>

            <Button className="w-full mt-4" size="sm">
              Login/Register to Save Activity
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              & see your activities across browsers & devices...
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sidebar;