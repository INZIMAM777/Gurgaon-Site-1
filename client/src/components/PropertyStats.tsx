import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Home, Users, Building, MapPin, Star } from "lucide-react";

const PropertyStats = () => {
  const stats = [
    {
      title: "Total Properties",
      value: "50,000+",
      change: "+12%",
      icon: Home,
      color: "text-blue-600"
    },
    {
      title: "Happy Customers", 
      value: "10M+",
      change: "+25%",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Cities Covered",
      value: "20+",
      change: "+5%",
      icon: MapPin,
      color: "text-orange-600"
    },
    {
      title: "RERA Verified",
      value: "35,000+",
      change: "+18%", 
      icon: Star,
      color: "text-purple-600"
    }
  ];

  const cityStats = [
    { city: "Mumbai", properties: "2,547", growth: "+8%" },
    { city: "Delhi", properties: "1,892", growth: "+12%" },
    { city: "Bangalore", properties: "1,653", growth: "+15%" },
    { city: "Hyderabad", properties: "1,234", growth: "+20%" },
    { city: "Pune", properties: "1,156", growth: "+10%" },
    { city: "Chennai", properties: "987", growth: "+7%" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            India's Most Trusted Property Platform
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join millions of users who trust us for their property needs. 
            We provide verified listings across major Indian cities.
          </p>
        </div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 mb-4 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
                <div className="flex items-center justify-center gap-1">
                  <TrendingUp className="h-3 w-3 text-green-500" />
                  <span className="text-xs text-green-600 font-medium">{stat.change}</span>
                  <span className="text-xs text-gray-500">vs last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* City-wise Statistics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5 text-orange-600" />
              Top Cities by Property Listings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityStats.map((city, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <h4 className="font-semibold text-gray-900">{city.city}</h4>
                    <p className="text-sm text-gray-600">{city.properties} properties</p>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    {city.growth}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Star className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg">RERA Verified</h3>
            <p className="text-gray-600 text-sm">All properties verified under RERA compliance for your safety</p>
          </div>
          
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Users className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg">Expert Support</h3>
            <p className="text-gray-600 text-sm">24/7 customer support from real estate experts</p>
          </div>
          
          <div className="space-y-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <TrendingUp className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg">Market Insights</h3>
            <p className="text-gray-600 text-sm">Real-time market trends and price analytics</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyStats;