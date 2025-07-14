import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const PopularLocations = () => {
  const locations = [
    {
      city: "Mumbai",
      areas: [
        { name: "Andheri West", properties: "850+", avgPrice: "₹2.5 Cr", trend: "+5%" },
        { name: "Bandra", properties: "450+", avgPrice: "₹4.2 Cr", trend: "+8%" },
        { name: "Powai", properties: "380+", avgPrice: "₹1.8 Cr", trend: "+12%" },
        { name: "Thane", properties: "620+", avgPrice: "₹1.2 Cr", trend: "+6%" }
      ],
      image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=400&h=300&fit=crop"
    },
    {
      city: "Bangalore", 
      areas: [
        { name: "Whitefield", properties: "520+", avgPrice: "₹95 L", trend: "+15%" },
        { name: "Electronic City", properties: "340+", avgPrice: "₹80 L", trend: "+10%" },
        { name: "Koramangala", properties: "290+", avgPrice: "₹1.5 Cr", trend: "+7%" },
        { name: "HSR Layout", properties: "410+", avgPrice: "₹1.1 Cr", trend: "+9%" }
      ],
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=300&fit=crop"
    },
    {
      city: "Delhi NCR",
      areas: [
        { name: "Gurgaon", properties: "780+", avgPrice: "₹1.8 Cr", trend: "+11%" },
        { name: "Noida", properties: "650+", avgPrice: "₹85 L", trend: "+13%" },
        { name: "Faridabad", properties: "420+", avgPrice: "₹65 L", trend: "+8%" },
        { name: "Greater Noida", properties: "350+", avgPrice: "₹45 L", trend: "+18%" }
      ],
      image: "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=400&h=300&fit=crop"
    }
  ];

  const trendingAreas = [
    { name: "Hinjewadi, Pune", growth: "+22%", reason: "IT Hub Development" },
    { name: "Sector 150, Noida", growth: "+25%", reason: "Metro Connectivity" },
    { name: "Sarjapur Road, Bangalore", growth: "+18%", reason: "Tech Parks" },
    { name: "Goregaon, Mumbai", growth: "+15%", reason: "Infrastructure Growth" },
    { name: "Gachibowli, Hyderabad", growth: "+20%", reason: "IT Expansion" },
    { name: "OMR, Chennai", growth: "+16%", reason: "Commercial Development" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Popular Locations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore properties in India's most sought-after locations with verified listings 
            and real-time market insights.
          </p>
        </div>

        {/* City-wise Popular Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {locations.map((location, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={location.image} 
                  alt={location.city}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-gray-900">
                    <MapPin className="h-3 w-3 mr-1" />
                    {location.city}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-4">Top Areas in {location.city}</h3>
                <div className="space-y-3">
                  {location.areas.map((area, areaIdx) => (
                    <div key={areaIdx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{area.name}</h4>
                        <div className="flex items-center gap-3 text-sm text-gray-600">
                          <span>{area.properties} properties</span>
                          <span>•</span>
                          <span>Avg: {area.avgPrice}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-green-600 border-green-200">
                          <TrendingUp className="h-3 w-3 mr-1" />
                          {area.trend}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Button asChild className="w-full mt-4" variant="outline">
                  <Link to={`/search?city=${location.city}`}>
                    View All Properties in {location.city}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trending Areas */}
        <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              🔥 Trending Areas This Month
            </h3>
            <p className="text-gray-600">
              Areas showing highest growth in property demand and investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingAreas.map((area, idx) => (
              <Card key={idx} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{area.name}</h4>
                    <Badge className="bg-red-100 text-red-700 border-red-200">
                      HOT
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{area.reason}</span>
                    <div className="flex items-center gap-1 text-green-600 font-medium">
                      <TrendingUp className="h-3 w-3" />
                      <span className="text-sm">{area.growth}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link to="/insights/market-trends">
                View All Market Trends
                <TrendingUp className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularLocations;