import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  Mic,
  ChevronDown,
  LocateFixed,
  TrendingUp,
  Home,
  Building2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("Buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  const handleSearch = () => {
    if (searchQuery.trim()) {
<<<<<<< HEAD:client/src/components/HeroSection.tsx
      setLocation(`/search?q=${encodeURIComponent(searchQuery)}&location=Western Mumbai`);
=======
      navigate(`/search?q=${encodeURIComponent(searchQuery)}&location=${selectedCity}&category=${activeTab.toLowerCase()}`);
    } else {
      navigate(`/search?location=${selectedCity}&category=${activeTab.toLowerCase()}`);
>>>>>>> d8d2d33c1cae20c684541c15e19fe117a0da03fe:src/components/HeroSection.tsx
    }
  };

  const handleLocationSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          toast({
            title: "Location Found",
            description: `Searching properties near your location`,
          });
<<<<<<< HEAD:client/src/components/HeroSection.tsx
          setLocation(`/search?lat=${latitude}&lng=${longitude}&location=Near Me`);
=======
          navigate(`/search?lat=${latitude}&lng=${longitude}&location=Near Me&category=${activeTab.toLowerCase()}`);
>>>>>>> d8d2d33c1cae20c684541c15e19fe117a0da03fe:src/components/HeroSection.tsx
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Unable to get your location. Please search manually.",
            variant: "destructive",
          });
        }
      );
    }
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        toast({
          title: "Voice Search Active",
          description: "Speak now to search for properties...",
        });
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsListening(false);
        toast({
          title: "Voice Search Complete",
          description: `Searching for: ${transcript}`,
        });
      };

      recognition.onerror = () => {
        setIsListening(false);
        toast({
          title: "Voice Search Error",
          description: "Could not hear your voice. Please try again.",
          variant: "destructive",
        });
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      toast({
        title: "Voice Search Not Supported",
        description: "Voice search is not supported in this browser.",
        variant: "destructive",
      });
    }
  };

  const tabs = [
    { name: "Buy", icon: Home },
    { name: "Rent", icon: Building2 },
    { name: "New Projects", isNew: true, icon: TrendingUp },
    { name: "PG / Co-living", icon: Building2 },
    { name: "Commercial", icon: Building2 },
    { name: "Plots/Land", icon: MapPin },
  ];

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Pune", "Chennai", 
    "Kolkata", "Ahmedabad", "Gurgaon", "Noida", "Thane", "Navi Mumbai"
  ];

  const trendingSearches = [
    "3 BHK in Mumbai",
    "2 BHK for rent in Bangalore",
    "Flats in Pune",
    "Independent house in Delhi",
    "Commercial space in Gurgaon"
  ];

  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-blue-50 min-h-[600px] relative">
      {/* Premium Banner */}
      <div className="relative h-24 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex-1">
            <div className="text-lg font-bold mb-1">
              INDIA'S NO. 1 PROPERTY PORTAL
            </div>
            <div className="text-sm text-slate-300">
              Find Properties for Sale and Rent in India
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&h=80&fit=crop" 
              alt="Premium Properties" 
              className="rounded-lg h-16"
            />
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-orange-400 mb-1">99acres</div>
            <div className="text-xs text-slate-300">TRUSTED BY MILLIONS</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
            <MapPin className="h-4 w-4 text-orange-500" />
            <span className="text-orange-500 font-medium">Buy in {selectedCity}</span>
            <span>•</span>
            <span>Explore real estate opportunities</span>
          </div>
        </div>

        {/* Main Search Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-5xl mx-auto border border-slate-200">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.name;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium transition-all relative ${
                    isActive
                      ? "text-orange-500 border-b-2 border-orange-500 bg-orange-50"
                      : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.name}
                  {tab.isNew && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                      NEW
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
            {/* City Selection */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">City</label>
              <Select value={selectedCity} onValueChange={setSelectedCity}>
                <SelectTrigger className="h-14 border-2 border-slate-200 focus:border-orange-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>{city}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Property Type */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Property Type</label>
              <Select defaultValue="all-residential">
                <SelectTrigger className="h-14 border-2 border-slate-200 focus:border-orange-500">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-residential">All Residential</SelectItem>
                  <SelectItem value="apartment">Apartment/Flat</SelectItem>
                  <SelectItem value="villa">Independent House/Villa</SelectItem>
                  <SelectItem value="plot">Plot/Land</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Input */}
            <div className="lg:col-span-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">Search Properties</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <Input
                  placeholder="Search '3 BHK for sale in Mumbai' or 'Locality, Landmark, Project'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-24 h-14 text-base border-2 border-slate-200 focus:border-orange-500"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 hover:bg-orange-100"
                    onClick={handleLocationSearch}
                    title="Search by current location"
                  >
                    <LocateFixed className="h-4 w-4 text-orange-500" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`h-10 w-10 hover:bg-orange-100 ${isListening ? 'bg-red-100 text-red-600' : ''}`}
                    onClick={handleVoiceSearch}
                    title="Voice search"
                  >
                    <Mic className={`h-4 w-4 ${isListening ? 'text-red-600' : 'text-orange-500'}`} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="lg:col-span-2">
              <Button 
                onClick={handleSearch}
                className="w-full h-14 bg-orange-500 hover:bg-orange-600 text-white text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Trending Searches */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-medium text-slate-600">Trending:</span>
              {trendingSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSearchQuery(search);
                    handleSearch();
                  }}
                  className="text-sm text-orange-500 hover:text-orange-600 hover:underline"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">2.5M+</div>
            <div className="text-sm text-slate-600">Properties Listed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">50K+</div>
            <div className="text-sm text-slate-600">New Listings Monthly</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">1M+</div>
            <div className="text-sm text-slate-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500">15+</div>
            <div className="text-sm text-slate-600">Years of Trust</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;