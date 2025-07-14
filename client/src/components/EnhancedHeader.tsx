import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown, 
  User, 
  Menu, 
  Search, 
  Globe, 
  Home, 
  Users, 
  Building, 
  Store, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  Star,
  Bell,
  Heart,
  Calculator,
  FileText,
  Wallet,
  X
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cityData } from "@/data/cityData";

const EnhancedHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [selectedCity, setSelectedCity] = useState("All India");

  const megaMenuItems = {
    "For Buyers": {
      sections: [
        {
          title: "BUY A HOME",
          items: [
            { name: "Residential Properties", href: "/search?type=residential", icon: Home },
            { name: "Commercial Properties", href: "/search?type=commercial", icon: Building },
            { name: "Plots/Land", href: "/search?type=land", icon: MapPin },
            { name: "New Projects", href: "/search?type=projects", icon: Star }
          ]
        },
        {
          title: "TOP CITIES", 
          items: cityData.slice(0, 8).map(city => ({
            name: `Property in ${city.name}`,
            href: `/search?city=${city.name}`,
            count: city.count
          }))
        },
        {
          title: "TOOLS & INSIGHTS",
          items: [
            { name: "Price Trends", href: "/insights/price-trends", icon: TrendingUp },
            { name: "Home Loan Calculator", href: "/tools/loan-calculator", icon: Calculator },
            { name: "Area Unit Converter", href: "/tools/area-converter", icon: FileText },
            { name: "Property Valuation", href: "/tools/valuation", icon: Wallet }
          ]
        }
      ]
    },
    "For Tenants": {
      sections: [
        {
          title: "RENT A HOME",
          items: [
            { name: "Apartments for Rent", href: "/search?type=rent&category=apartment", icon: Home },
            { name: "Houses for Rent", href: "/search?type=rent&category=house", icon: Building },
            { name: "PG/Co-living", href: "/search?type=pg", icon: Users },
            { name: "Commercial Rental", href: "/search?type=commercial-rent", icon: Store }
          ]
        },
        {
          title: "TOP CITIES",
          items: cityData.slice(0, 8).map(city => ({
            name: `Rent in ${city.name}`,
            href: `/search?type=rent&city=${city.name}`,
            count: Math.floor(city.count * 0.3)
          }))
        },
        {
          title: "RENTAL TOOLS",
          items: [
            { name: "Rental Agreement", href: "/tools/rental-agreement", icon: FileText },
            { name: "Rent Calculator", href: "/tools/rent-calculator", icon: Calculator },
            { name: "Tenant Verification", href: "/tools/verification", icon: User },
            { name: "Rental Insights", href: "/insights/rental", icon: TrendingUp }
          ]
        }
      ]
    },
    "For Owners": {
      sections: [
        {
          title: "SELL/RENT YOUR PROPERTY",
          items: [
            { name: "Post Property FREE", href: "/post-property", icon: Home, badge: "FREE" },
            { name: "Property Valuation", href: "/tools/property-valuation", icon: Calculator },
            { name: "Market Analysis", href: "/insights/market", icon: TrendingUp },
            { name: "Property Management", href: "/services/management", icon: Building }
          ]
        },
        {
          title: "SERVICES",
          items: [
            { name: "Photo Shoot", href: "/services/photography", icon: Star },
            { name: "Legal Services", href: "/services/legal", icon: FileText },
            { name: "Loan Assistance", href: "/services/loans", icon: Wallet },
            { name: "Interior Design", href: "/services/interiors", icon: Home }
          ]
        }
      ]
    },
    "Insights": {
      sections: [
        {
          title: "MARKET INSIGHTS",
          items: [
            { name: "Locality Insights", href: "/insights/locality", icon: MapPin },
            { name: "Price Trends", href: "/insights/price-trends", icon: TrendingUp },
            { name: "Market Reports", href: "/insights/reports", icon: FileText },
            { name: "Investment Guide", href: "/insights/investment", icon: Wallet }
          ]
        },
        {
          title: "TOOLS & CALCULATORS",
          items: [
            { name: "EMI Calculator", href: "/tools/emi-calculator", icon: Calculator },
            { name: "Area Converter", href: "/tools/area-converter", icon: FileText },
            { name: "Stamp Duty Calculator", href: "/tools/stamp-duty", icon: Calculator },
            { name: "Registration Cost", href: "/tools/registration", icon: Wallet }
          ]
        }
      ]
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-50 border-b text-xs">
        <div className="max-w-7xl mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-gray-600">India's No. 1 Property Portal</span>
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3" />
                <span>1800 41 99099</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/nri" className="text-gray-600 hover:text-primary">For NRI</Link>
              <Link to="/mobile-app" className="text-gray-600 hover:text-primary">Mobile App</Link>
              <div className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                <span>EN</span>
                <ChevronDown className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Location */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="text-2xl font-bold text-orange-600">99acres</div>
                <Badge variant="secondary" className="text-xs">CLONE</Badge>
              </Link>
              
              <div className="ml-6 hidden md:flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-2 text-sm">
                      <MapPin className="h-4 w-4 text-orange-600" />
                      <span className="font-medium">{selectedCity}</span>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80">
                    <div className="p-2">
                      <Input placeholder="Search city..." className="mb-2" />
                      <div className="grid grid-cols-2 gap-1 max-h-60 overflow-y-auto">
                        <DropdownMenuItem onClick={() => setSelectedCity("All India")}>
                          All India
                        </DropdownMenuItem>
                        {cityData.map((city) => (
                          <DropdownMenuItem 
                            key={city.name}
                            onClick={() => setSelectedCity(city.name)}
                          >
                            {city.name}
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Navigation Menu */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {Object.entries(megaMenuItems).map(([key, value]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className="text-sm font-medium">
                      {key}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-screen max-w-5xl p-6">
                        <div className="grid grid-cols-3 gap-8">
                          {value.sections.map((section, idx) => (
                            <div key={idx}>
                              <h4 className="text-sm font-semibold text-orange-600 mb-3">
                                {section.title}
                              </h4>
                              <ul className="space-y-2">
                                {section.items.map((item, itemIdx) => (
                                  <li key={itemIdx}>
                                    <NavigationMenuLink asChild>
                                      <Link
                                        to={item.href}
                                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-600 hover:bg-gray-50 p-2 rounded-md transition-colors"
                                      >
                                        {item.icon && <item.icon className="h-4 w-4" />}
                                        <span>{item.name}</span>
                                        {item.badge && (
                                          <Badge variant="secondary" className="text-xs">
                                            {item.badge}
                                          </Badge>
                                        )}
                                        {item.count && (
                                          <span className="text-xs text-gray-500 ml-auto">
                                            ({item.count})
                                          </span>
                                        )}
                                      </Link>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span className="text-sm">Shortlist</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-1">
                <Bell className="h-4 w-4" />
                <span className="text-sm">Alerts</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span className="hidden md:inline text-sm">Login</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Login / Register</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Home className="mr-2 h-4 w-4" />
                    <span>My Properties</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Heart className="mr-2 h-4 w-4" />
                    <span>Saved Properties</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell className="mr-2 h-4 w-4" />
                    <span>Property Alerts</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Search className="mr-2 h-4 w-4" />
                    <span>Saved Searches</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Contact Support</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button 
                size="sm" 
                className="bg-orange-600 hover:bg-orange-700 text-white"
                asChild
              >
                <Link to="/post-property">
                  Post Property
                  <Badge variant="secondary" className="ml-2 bg-green-500 text-white">FREE</Badge>
                </Link>
              </Button>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="space-y-4">
                {Object.entries(megaMenuItems).map(([key, value]) => (
                  <div key={key} className="border-b pb-4">
                    <h3 className="font-semibold text-orange-600 mb-2">{key}</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {value.sections.map((section) => (
                        <div key={section.title}>
                          <h4 className="text-xs font-medium text-gray-500 mb-1">
                            {section.title}
                          </h4>
                          {section.items.slice(0, 4).map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="flex items-center gap-2 text-sm py-1 px-2 rounded hover:bg-gray-50"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item.icon && <item.icon className="h-4 w-4" />}
                              {item.name}
                              {item.badge && (
                                <Badge variant="secondary" className="text-xs">
                                  {item.badge}
                                </Badge>
                              )}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default EnhancedHeader;