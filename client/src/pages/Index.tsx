import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import EnhancedFooter from "@/components/EnhancedFooter";
import EnhancedHeader from "@/components/EnhancedHeader";
import PropertyStats from "@/components/PropertyStats";
import PopularLocations from "@/components/PopularLocations";
import TestimonialsSection from "@/components/TestimonialsSection";
import Sidebar from "@/components/Sidebar";
import ScrollToTop from "@/components/ScrollToTop";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters, { FilterState } from "@/components/SearchFilters";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { combinedProperties } from "@/data/properties";
import { cityData } from "@/data/cityData";
import { Link } from "wouter";
import { Star, Verified, Building, Home, MapPin, TrendingUp, Menu, X, Filter } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    searchTab: "buy",
    propertyType: "All Residential",
    city: "Bangalore",
    query: "",
    priceRange: "all"
  });

  const [advancedFilters, setAdvancedFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    propertyType: "All Types",
    bedrooms: "Any",
    city: "All Cities",
    bathrooms: "Any",
    status: "All Status",
    areaRange: [0, 5000],
    specialFeatures: [],
    amenities: []
  });

  // Enhanced filtering with advanced filters
  const getFilteredProperties = () => {
    let filtered = combinedProperties;

    // Apply basic search filters first
    if (searchFilters.city && searchFilters.city !== "All Cities") {
      filtered = filtered.filter(p => p.city === searchFilters.city);
    }

    if (searchFilters.propertyType && searchFilters.propertyType !== "All Residential") {
      filtered = filtered.filter(p => {
        const propertyType = (p.propertyType || p.type || '').toLowerCase();
        const filterType = searchFilters.propertyType.toLowerCase();
        
        switch (filterType) {
          case 'apartment':
            return propertyType === 'apartment';
          case 'house':
          case 'independent house':
            return propertyType === 'house' || propertyType === 'independent house';
          case 'villa':
            return propertyType === 'villa';
          case 'plot':
          case 'plot/land':
            return propertyType === 'plot' || propertyType === 'land';
          case 'penthouse':
            return propertyType === 'penthouse';
          case 'studio':
            return propertyType === 'studio';
          default:
            return propertyType.includes(filterType);
        }
      });
    }

    if (searchFilters.query) {
      const query = searchFilters.query.toLowerCase();
      filtered = filtered.filter(p => {
        const title = (p.title || '').toLowerCase();
        const location = (p.location || '').toLowerCase();
        const city = (p.city || '').toLowerCase();
        const area = (p.area || '').toLowerCase();
        return title.includes(query) || location.includes(query) || 
               city.includes(query) || area.includes(query);
      });
    }

    // Apply advanced filters
    if (showAdvancedFilters) {
      // Price range filter
      if (advancedFilters.priceRange[0] > 0 || advancedFilters.priceRange[1] < 1000) {
        filtered = filtered.filter(p => {
          const priceRange = p.priceRange || 0;
          return priceRange >= advancedFilters.priceRange[0] && priceRange <= advancedFilters.priceRange[1];
        });
      }

      // Property type filter
      if (advancedFilters.propertyType !== "All Types") {
        filtered = filtered.filter(p => {
          const propertyType = (p.propertyType || p.type || '').toLowerCase();
          const filterType = advancedFilters.propertyType.toLowerCase();
          return propertyType === filterType || propertyType.includes(filterType);
        });
      }

      // Bedrooms filter
      if (advancedFilters.bedrooms !== "Any") {
        const bedroomCount = advancedFilters.bedrooms === "5+" ? 5 : parseInt(advancedFilters.bedrooms);
        filtered = filtered.filter(p => {
          const beds = p.beds || p.bedrooms || 0;
          return advancedFilters.bedrooms === "5+" ? beds >= 5 : beds === bedroomCount;
        });
      }

      // Bathrooms filter
      if (advancedFilters.bathrooms !== "Any") {
        const bathroomCount = advancedFilters.bathrooms === "4+" ? 4 : parseInt(advancedFilters.bathrooms);
        filtered = filtered.filter(p => {
          const baths = p.baths || p.bathrooms || 0;
          return advancedFilters.bathrooms === "4+" ? baths >= 4 : baths === bathroomCount;
        });
      }

      // City filter
      if (advancedFilters.city !== "All Cities") {
        filtered = filtered.filter(p => p.city === advancedFilters.city);
      }

      // Status filter
      if (advancedFilters.status !== "All Status") {
        filtered = filtered.filter(p => p.status === advancedFilters.status);
      }

      // Area range filter
      if (advancedFilters.areaRange[0] > 0 || advancedFilters.areaRange[1] < 5000) {
        filtered = filtered.filter(p => {
          const sqft = p.sqft || 0;
          return sqft >= advancedFilters.areaRange[0] && sqft <= advancedFilters.areaRange[1];
        });
      }

      // Special features filter
      if (advancedFilters.specialFeatures.length > 0) {
        filtered = filtered.filter(p => {
          const features = p.specialFeatures || [];
          return advancedFilters.specialFeatures.every(feature => 
            feature === "RERA Approved" ? p.isRERA : 
            feature === "Verified Properties" ? p.verified : 
            features.includes(feature)
          );
        });
      }

      // Amenities filter
      if (advancedFilters.amenities.length > 0) {
        filtered = filtered.filter(p => {
          const amenities = p.amenities || p.features || [];
          return advancedFilters.amenities.every(amenity => amenities.includes(amenity));
        });
      }
    }

    // Filter by search tab (rent vs buy)
    if (searchFilters.searchTab === "rent") {
      filtered = filtered.filter(p => {
        const id = typeof p.id === 'string' ? parseInt(p.id) || 0 : (p.id || 0);
        return id % 2 === 1;
      });
    } else {
      filtered = filtered.filter(p => {
        const id = typeof p.id === 'string' ? parseInt(p.id) || 0 : (p.id || 0);
        return id % 2 === 0;
      });
    }

    return filtered;
  };

  const filteredProperties = getFilteredProperties();
  const bangaloreProperties = filteredProperties.slice(0, 4);
  const featuredProjects = filteredProperties.slice(0, 6);
  const newLaunchProjects = filteredProperties.filter(p => p.status === "New Launch").slice(0, 3);
  const readyToMoveProjects = filteredProperties.filter(p => p.status === "Ready to Move").slice(0, 2);

  const handleFilterChange = (newFilters: any) => {
    setSearchFilters(prev => ({ ...prev, ...newFilters }));
  };

  const propertyTypes = [
    { name: "Residential Apartment", count: "7,900+", icon: Building },
    { name: "Independent House/Villa", count: "1,900+", icon: Home },
    { name: "Residential Land", count: "1,700+", icon: MapPin }
  ];

  const searchDemand = {
    apartments: ["ITPL", "Kadubeesanahalli", "Budigere Cross", "Harlur Road", "HBR Layout"],
    plots: ["HBR Layout", "Sarjapur", "Chikka Tirupathi", "NRI Layout", "Harlur Road"],
    builderFloor: ["HBR Layout", "ITPL", "Sarjapur", "TC Palaya", "Kalkere"]
  };

  const bhkOptions = [
    { type: "1 RK/1 BHK", count: "440+" },
    { type: "2 BHK", count: "3,300+" },
    { type: "3 BHK", count: "4,100+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnhancedHeader />
      <EnhancedHeroSection onFilterChange={handleFilterChange} />
      
      <div className="flex">
        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-black opacity-50" onClick={() => setSidebarOpen(false)}></div>
            <div className="relative">
              <Sidebar />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
          {/* Mobile Menu Button */}
          <div className="lg:hidden p-4 border-b">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2"
            >
              <Menu className="h-4 w-4" />
              Menu
            </Button>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
        {/* Filter Summary */}
        <section>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-medium">Current Filters:</span>
                <Badge variant="outline">{searchFilters.searchTab === "buy" ? "For Sale" : "For Rent"}</Badge>
                <Badge variant="outline">{searchFilters.propertyType}</Badge>
                <Badge variant="outline">{searchFilters.city}</Badge>
                {searchFilters.query && <Badge variant="outline">"{searchFilters.query}"</Badge>}
                <span className="text-muted-foreground">
                  Showing {filteredProperties.length} of {combinedProperties.length} properties
                </span>
              </div>
              
              {/* Advanced Filters Toggle */}
              <Button
                variant={showAdvancedFilters ? "default" : "outline"}
                size="sm"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                Advanced Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Advanced Filters Panel */}
        {showAdvancedFilters && (
          <section className="mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <SearchFilters onFilterChange={setAdvancedFilters} />
              </div>
              <div className="lg:col-span-3">
                <div className="bg-gray-50 rounded-lg p-4 text-center text-gray-500">
                  Use the filters on the left to refine your property search results
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Recommended Properties */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Recommended Properties
              </h2>
              <p className="text-muted-foreground">
                {searchFilters.searchTab === "buy" ? "Properties for Sale" : "Properties for Rent"} in {searchFilters.city}
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>Guest User</span>
                <Badge variant="outline">{filteredProperties.length} Found</Badge>
              </div>
              <p className="mt-1">Login/Register to Save & see your activities across browsers</p>
            </div>
          </div>

          {bangaloreProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {bangaloreProperties.map((property) => (
                <div key={property.id} className="relative">
                  <PropertyCard property={property} />
                  {property.verified && (
                    <Badge className="absolute top-2 left-2 bg-green-600 text-white">
                      <Verified className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                  <Badge className="absolute top-2 right-2 bg-blue-600 text-white">
                    {searchFilters.searchTab === "buy" ? "For Sale" : "For Rent"}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-500 text-lg mb-4">No properties found matching your criteria</p>
              <p className="text-gray-400">Try adjusting your search filters or explore different locations</p>
            </div>
          )}

          <div className="bg-primary/5 p-4 rounded-lg text-center">
            <p className="text-sm font-medium mb-2">Sell or rent faster at the right price!</p>
            <Link to="/post-property">
              <Button variant="outline" size="sm">Post Property, It's FREE</Button>
            </Link>
          </div>
        </section>

        {/* Apartments, Villas and more */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Apartments, Villas and more
            </h2>
            <p className="text-muted-foreground">in Bangalore East</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {propertyTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <IconComponent className="h-12 w-12 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{type.name}</h3>
                    <p className="text-2xl font-bold text-primary">{type.count} Properties</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Projects in High Demand */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Projects in High Demand
            </h2>
            <p className="text-muted-foreground">
              The most explored {searchFilters.propertyType} projects in {searchFilters.city}
            </p>
          </div>

          {readyToMoveProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {readyToMoveProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-green-600 text-white">RERA</Badge>
                      <Badge variant="outline" className="bg-white">Ready To Move</Badge>
                      <Badge className="bg-blue-600 text-white">
                        {searchFilters.searchTab === "buy" ? "For Sale" : "For Rent"}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
                    <p className="text-lg font-bold text-primary">{project.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No high-demand projects found for current filters</p>
            </div>
          )}
        </section>

        {/* Newly Launched Projects */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Newly launched projects
            </h2>
            <p className="text-muted-foreground">
              Limited launch offers available in {searchFilters.city}
            </p>
          </div>

          {newLaunchProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newLaunchProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                    <Badge className="absolute top-4 left-4 bg-red-600 text-white">NEW LAUNCH</Badge>
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                      {searchFilters.searchTab === "buy" ? "For Sale" : "For Rent"}
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{project.location}</p>
                    <p className="text-lg font-bold text-primary mb-2">{project.price}</p>
                    <div className="flex items-center gap-1 text-sm text-green-600 mb-3">
                      <TrendingUp className="h-4 w-4" />
                      <span>12.1% price increase in last 3 months</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        Get preferred options @zero brokerage
                      </Button>
                      <Button size="sm">View Number</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No new launch projects found for current filters</p>
            </div>
          )}
        </section>

        {/* Demand in Bangalore */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Demand in Bangalore
            </h2>
            <p className="text-muted-foreground">Where are buyers searching in Bangalore</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Apartment
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Most searched localities for Flat/Apartment</p>
                <div className="space-y-3">
                  {searchDemand.apartments.map((locality, index) => (
                    <div key={locality} className="flex items-center justify-between">
                      <span className="text-sm">#{index + 1} {locality}</span>
                      <span className="text-xs text-muted-foreground">{8 - index}% Searches</span>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="p-0 mt-4">View all 5 Localities</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Plots
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Most searched societies for Plots</p>
                <div className="space-y-3">
                  {searchDemand.plots.map((locality, index) => (
                    <div key={locality} className="flex items-center justify-between">
                      <span className="text-sm">#{index + 1} {locality}</span>
                      <span className="text-xs text-muted-foreground">{5 - index}% Searches</span>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="p-0 mt-4">View all 5 Localities</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Builder Floor
                </h3>
                <p className="text-sm text-muted-foreground mb-4">Most searched societies</p>
                <div className="space-y-3">
                  {searchDemand.builderFloor.map((locality, index) => (
                    <div key={locality} className="flex items-center justify-between">
                      <span className="text-sm">#{index + 1} {locality}</span>
                      <span className="text-xs text-muted-foreground">{5 - index}% Searches</span>
                    </div>
                  ))}
                </div>
                <Button variant="link" className="p-0 mt-4">View all 5 Localities</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* BHK Choice */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              BHK choice in mind?
            </h2>
            <p className="text-muted-foreground">Browse by no. of bedrooms in the house</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bhkOptions.map((option, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{option.type}</h3>
                  <p className="text-lg text-primary font-bold">{option.count} Properties</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

            <FeaturedProjects />
          </div>
        </div>
      </div>
      
      {/* Add New Enhanced Sections */}
      <PropertyStats />
      <PopularLocations />
      <TestimonialsSection />
      
      <EnhancedFooter />
      <ScrollToTop />
    </div>
  );
};

export default Index;