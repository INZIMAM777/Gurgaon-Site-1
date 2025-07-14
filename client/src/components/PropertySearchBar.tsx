import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Mic, 
  Filter,
  Home,
  Building,
  Users,
  Store,
  Camera,
  TrendingUp
} from "lucide-react";
import { cityData } from "@/data/cityData";

interface PropertySearchBarProps {
  onSearch?: (filters: any) => void;
}

const PropertySearchBar = ({ onSearch }: PropertySearchBarProps) => {
  const [activeTab, setActiveTab] = useState("buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [propertyType, setPropertyType] = useState("All Residential");
  const [budget, setBudget] = useState("Any Budget");
  const [isListening, setIsListening] = useState(false);

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-IN';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch({
        searchTab: activeTab,
        query: searchQuery,
        city: selectedCity,
        propertyType: propertyType,
        budget: budget
      });
    }
  };

  const propertyTypes = {
    buy: [
      "All Residential",
      "Apartment",
      "Independent House",
      "Villa",
      "Penthouse",
      "Studio Apartment",
      "Residential Land"
    ],
    rent: [
      "All Residential",
      "Apartment",
      "Independent House",
      "Villa",
      "Penthouse",
      "Studio Apartment",
      "Office Space",
      "Shop/Showroom"
    ],
    commercial: [
      "All Commercial",
      "Office Space",
      "Co-working",
      "Shop/Showroom",
      "Warehouse",
      "Industrial Land",
      "Commercial Land"
    ],
    pg: [
      "All Options",
      "PG for Men",
      "PG for Women",
      "Co-living Spaces",
      "Hostel",
      "Shared Apartments"
    ]
  };

  const budgetOptions = {
    buy: [
      "Any Budget",
      "Under ₹50 Lakh",
      "₹50 Lakh - ₹1 Crore",
      "₹1 - ₹2 Crore",
      "₹2 - ₹5 Crore",
      "Above ₹5 Crore"
    ],
    rent: [
      "Any Budget",
      "Under ₹10,000",
      "₹10,000 - ₹25,000",
      "₹25,000 - ₹50,000",
      "₹50,000 - ₹1 Lakh",
      "Above ₹1 Lakh"
    ]
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg border p-6">
        {/* Tabs for Buy/Rent/Commercial/PG */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="buy" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Buy
            </TabsTrigger>
            <TabsTrigger value="rent" className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              Rent
            </TabsTrigger>
            <TabsTrigger value="commercial" className="flex items-center gap-2">
              <Store className="h-4 w-4" />
              Commercial
            </TabsTrigger>
            <TabsTrigger value="pg" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              PG
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            {/* Main Search Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Search Input */}
              <div className="md:col-span-4 relative">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search for locality, landmark, project, or builder"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-10 h-12"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 p-1 ${
                      isListening ? 'text-red-500 animate-pulse' : 'text-gray-400'
                    }`}
                    onClick={handleVoiceSearch}
                  >
                    <Mic className="h-4 w-4" />
                  </Button>
                </div>
                {isListening && (
                  <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-red-50 border border-red-200 rounded-md text-sm text-red-600 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    Listening... Speak now
                  </div>
                )}
              </div>

              {/* City Selector */}
              <div className="md:col-span-3">
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger className="h-12">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      <SelectValue />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Cities">All Cities</SelectItem>
                    {cityData.map((city) => (
                      <SelectItem key={city.name} value={city.name}>
                        <div className="flex justify-between items-center w-full">
                          <span>{city.name}</span>
                          <Badge variant="outline" className="text-xs ml-2">
                            {city.count}
                          </Badge>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Property Type */}
              <div className="md:col-span-2">
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes[activeTab]?.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Budget */}
              <div className="md:col-span-2">
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger className="h-12">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {(budgetOptions[activeTab] || budgetOptions.buy).map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-1">
                <Button 
                  onClick={handleSearch}
                  className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600 mr-2">Quick filters:</span>
              {activeTab === "buy" && (
                <>
                  <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                    Ready to Move
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                    Under Construction
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                    RERA Approved
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                    Verified
                  </Badge>
                </>
              )}
              {activeTab === "rent" && (
                <>
                  <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                    Immediate
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                    Furnished
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                    Pet Friendly
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-orange-50">
                    Parking
                  </Badge>
                </>
              )}
            </div>

            {/* Advanced Search Features */}
            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Camera className="h-4 w-4" />
                  Search by Image
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  Price Trends
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  Map View
                </Button>
              </div>
              
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PropertySearchBar;