import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mic, MicOff, Search, Locate } from "lucide-react";
import { useLocation } from "wouter";
import { cityData } from "@/data/cityData";

interface EnhancedHeroSectionProps {
  onFilterChange?: (filters: any) => void;
}

const EnhancedHeroSection = ({ onFilterChange }: EnhancedHeroSectionProps) => {
  const [, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const [propertyType, setPropertyType] = useState("All Residential");
  const [searchTab, setSearchTab] = useState("buy");
  const [isListening, setIsListening] = useState(false);
  const [userLocation, setUserLocation] = useState<string>("");
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const recognition = useRef<SpeechRecognition | null>(null);

  // Speech recognition setup
  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = false;
      recognition.current.interimResults = false;
      recognition.current.lang = 'en-US';

      recognition.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsListening(false);
      };

      recognition.current.onerror = () => {
        setIsListening(false);
      };

      recognition.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const startVoiceSearch = () => {
    if (recognition.current) {
      setIsListening(true);
      recognition.current.start();
    }
  };

  const stopVoiceSearch = () => {
    if (recognition.current) {
      recognition.current.stop();
      setIsListening(false);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation(`Lat: ${latitude.toFixed(2)}, Lng: ${longitude.toFixed(2)}`);
          setSelectedCity("Bangalore");
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  };

  const handleSearch = () => {
    const filters = {
      searchTab,
      propertyType,
      city: selectedCity,
      query: searchQuery
    };
    
    // Update parent component filters
    if (onFilterChange) {
      onFilterChange(filters);
    }
    
    const params = new URLSearchParams({
      city: selectedCity,
      type: propertyType,
      query: searchQuery
    });
    setLocation(`/search?${params.toString()}`);
  };

  // Real-time filter updates
  const updateFilters = () => {
    if (onFilterChange) {
      onFilterChange({
        searchTab,
        propertyType,
        city: selectedCity,
        query: searchQuery
      });
    }
  };

  // Update filters when values change
  useEffect(() => {
    if (onFilterChange) {
      onFilterChange({
        searchTab,
        propertyType,
        city: selectedCity,
        query: searchQuery
      });
    }
  }, [searchTab, propertyType, selectedCity, searchQuery, onFilterChange]);

  const filteredCities = cityData.filter(city => 
    city.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="relative bg-gradient-to-br from-orange-600 via-orange-700 to-red-700 text-white overflow-hidden">
      {/* Hero Banner */}
      <div className="relative z-10 bg-gradient-to-r from-orange-600 to-orange-800 p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">SUMADHURA</h2>
            <p className="text-lg md:text-xl mb-1">DREAM CATCHER DEAL</p>
            <div className="bg-white/10 rounded-lg p-3 md:p-4 backdrop-blur-sm">
              <h3 className="font-semibold mb-1">ZERO REGISTRATION FEE & ZERO STAMP DUTY</h3>
              <p className="text-sm">Book your new home now | Save up to ₹27 Lakhs* | T&C Apply*</p>
              <p className="text-xs">Offer Valid From 05th July to 15th Aug 2025</p>
              <Button variant="outline" className="mt-2 bg-transparent border-white text-white hover:bg-white/20">
                Explore Now →
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold">DREAM</div>
                <div className="text-lg md:text-xl">CATCHER</div>
                <div className="text-lg md:text-xl">DEAL</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Search Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Search Card */}
        <Card className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <CardContent className="p-0">
            {/* Search Tabs */}
            <div className="bg-gray-50 border-b">
              <div className="flex flex-wrap">
                <Button
                  variant={searchTab === "buy" ? "default" : "ghost"}
                  className={`rounded-none border-b-2 ${
                    searchTab === "buy" 
                      ? "border-blue-600 bg-white text-blue-600" 
                      : "border-transparent text-gray-600"
                  }`}
                  onClick={() => setSearchTab("buy")}
                >
                  Buy
                </Button>
                <Button
                  variant={searchTab === "rent" ? "default" : "ghost"}
                  className={`rounded-none border-b-2 ${
                    searchTab === "rent" 
                      ? "border-blue-600 bg-white text-blue-600" 
                      : "border-transparent text-gray-600"
                  }`}
                  onClick={() => setSearchTab("rent")}
                >
                  Rent
                </Button>
                <Button
                  variant={searchTab === "new-launch" ? "default" : "ghost"}
                  className={`rounded-none border-b-2 ${
                    searchTab === "new-launch" 
                      ? "border-blue-600 bg-white text-blue-600" 
                      : "border-transparent text-gray-600"
                  }`}
                  onClick={() => setSearchTab("new-launch")}
                >
                  New Launch
                  <Badge className="ml-2 bg-red-500">NEW</Badge>
                </Button>
                <Button
                  variant={searchTab === "commercial" ? "default" : "ghost"}
                  className={`rounded-none border-b-2 ${
                    searchTab === "commercial" 
                      ? "border-blue-600 bg-white text-blue-600" 
                      : "border-transparent text-gray-600"
                  }`}
                  onClick={() => setSearchTab("commercial")}
                >
                  Commercial
                </Button>
                <Button
                  variant={searchTab === "plots" ? "default" : "ghost"}
                  className={`rounded-none border-b-2 ${
                    searchTab === "plots" 
                      ? "border-blue-600 bg-white text-blue-600" 
                      : "border-transparent text-gray-600"
                  }`}
                  onClick={() => setSearchTab("plots")}
                >
                  Plots/Land
                </Button>
                <Button
                  variant={searchTab === "projects" ? "default" : "ghost"}
                  className={`rounded-none border-b-2 ${
                    searchTab === "projects" 
                      ? "border-blue-600 bg-white text-blue-600" 
                      : "border-transparent text-gray-600"
                  }`}
                  onClick={() => setSearchTab("projects")}
                >
                  Projects
                </Button>
                <Button
                  variant={searchTab === "post" ? "default" : "ghost"}
                  className={`rounded-none border-b-2 ${
                    searchTab === "post" 
                      ? "border-blue-600 bg-white text-blue-600" 
                      : "border-transparent text-gray-600"
                  }`}
                  onClick={() => setSearchTab("post")}
                >
                  Post Property
                  <Badge className="ml-2 bg-green-500">FREE</Badge>
                </Button>
              </div>
            </div>

            {/* Search Form */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
                <div className="lg:col-span-3">
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Residential">All Residential</SelectItem>
                      <SelectItem value="Apartment">Apartment</SelectItem>
                      <SelectItem value="House">Independent House</SelectItem>
                      <SelectItem value="Villa">Villa</SelectItem>
                      <SelectItem value="Penthouse">Penthouse</SelectItem>
                      <SelectItem value="Studio">Studio</SelectItem>
                      <SelectItem value="Plot">Plot/Land</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="lg:col-span-6 relative">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      placeholder='Search "3 BHK for sale in Mumbai"'
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowCityDropdown(e.target.value.length > 0);
                      }}
                      className="pl-10 pr-20 h-12 text-lg"
                      onFocus={() => setShowCityDropdown(searchQuery.length > 0)}
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={getCurrentLocation}
                        className="p-2 h-8 w-8"
                      >
                        <Locate className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={isListening ? stopVoiceSearch : startVoiceSearch}
                        className={`p-2 h-8 w-8 ${isListening ? 'text-red-500' : ''}`}
                      >
                        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  {/* City Dropdown */}
                  {showCityDropdown && (
                    <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-60 overflow-y-auto shadow-lg">
                      <CardContent className="p-2">
                        {filteredCities.slice(0, 10).map((city) => (
                          <Button
                            key={city.name}
                            variant="ghost"
                            className="w-full justify-start text-left hover:bg-gray-100"
                            onClick={() => {
                              setSelectedCity(city.name);
                              setSearchQuery(city.name);
                              setShowCityDropdown(false);
                            }}
                          >
                            <MapPin className="h-4 w-4 mr-2" />
                            <div>
                              <div className="font-medium">{city.name}</div>
                              <div className="text-sm text-gray-500">City</div>
                            </div>
                          </Button>
                        ))}
                      </CardContent>
                    </Card>
                  )}

                  {isListening && (
                    <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                      🎤 Listening...
                    </div>
                  )}
                </div>

                <div className="lg:col-span-3">
                  <Button 
                    onClick={handleSearch}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold h-12 text-lg"
                  >
                    Search
                  </Button>
                </div>
              </div>

              {/* Recent Searches */}
              <div className="mt-6 pt-4 border-t">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm text-gray-600">Recent searches:</span>
                  <Button variant="outline" size="sm" className="text-xs">
                    Buy in Chennai South , Independent/B...
                  </Button>
                  <Button variant="link" className="text-blue-600 text-xs">
                    View all searches
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Location Display */}
        {userLocation && (
          <div className="text-center mt-4">
            <p className="text-white/80 text-sm">📍 {userLocation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnhancedHeroSection;