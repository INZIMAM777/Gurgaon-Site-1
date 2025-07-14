import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  TrendingUp,
  Building,
  ArrowRight,
  Heart,
  Search,
  Bell,
  Calculator,
  MapPin,
  Phone,
  Mail,
  Star,
  Shield,
  Award
} from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="space-y-6">
      {/* User Profile Card */}
      <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-16 w-16 bg-orange-100 rounded-full flex items-center justify-center">
              <User className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Welcome to 99acres</h3>
              <p className="text-sm text-gray-600">Your property journey starts here</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm">
              <Heart className="h-4 w-4 text-orange-500" />
              <span className="text-gray-600">Save your favorite properties</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Search className="h-4 w-4 text-orange-500" />
              <span className="text-gray-600">Track your search history</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Bell className="h-4 w-4 text-orange-500" />
              <span className="text-gray-600">Get instant property alerts</span>
            </div>
          </div>

          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white mb-3">
            LOGIN / REGISTER
          </Button>
          <p className="text-xs text-center text-gray-500">
            Access all premium features on 99acres
          </p>
        </CardContent>
      </Card>

      {/* Quick Tools */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Quick Tools</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <Calculator className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium">EMI Calculator</span>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium">Price Trends</span>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Locality Guide</span>
              </div>
              <ArrowRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investment Opportunity */}
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-black" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold mb-2">InvestAcres</h3>
              <p className="text-sm text-slate-300 mb-3">
                Smart property investment guidance from experts. Get personalized recommendations.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                Explore Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Cities */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Popular Cities</h3>
          <div className="space-y-2">
            {[
              { city: "Mumbai", count: "2,547", growth: "+5.2%" },
              { city: "Delhi", count: "1,892", growth: "+3.8%" },
              { city: "Bangalore", count: "1,653", growth: "+7.1%" },
              { city: "Hyderabad", count: "1,234", growth: "+6.3%" },
              { city: "Pune", count: "1,156", growth: "+4.9%" },
              { city: "Chennai", count: "987", growth: "+3.2%" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2 cursor-pointer">
                <div>
                  <span className="text-sm font-medium text-gray-900">{item.city}</span>
                  <span className="text-xs text-gray-500 ml-2">({item.count} properties)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-green-600 font-medium">{item.growth}</span>
                  <ArrowRight className="h-3 w-3 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Services */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Building className="h-5 w-5 text-orange-500" />
            Our Services
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="text-sm font-medium text-gray-900 mb-1">Property Buying</h4>
              <p className="text-xs text-gray-600">Find your dream home with verified listings</p>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="text-sm font-medium text-gray-900 mb-1">Property Selling</h4>
              <p className="text-xs text-gray-600">List your property and get genuine buyers</p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="text-sm font-medium text-gray-900 mb-1">Rental Services</h4>
              <p className="text-xs text-gray-600">Rent or lease properties hassle-free</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trust Indicators */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-600" />
            Why Trust 99acres?
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Award className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-700">15+ Years of Excellence</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-700">4.5★ Customer Rating</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-700">Verified Properties</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Need Help?</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-blue-600" />
              <div>
                <div className="font-medium text-gray-900">1800 41 99099</div>
                <div className="text-xs text-gray-600">Toll-free (9AM-11PM IST)</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-blue-600" />
              <div>
                <div className="font-medium text-gray-900">services@99acres.com</div>
                <div className="text-xs text-gray-600">Email support</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;