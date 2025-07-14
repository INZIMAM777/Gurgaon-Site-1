import PropertyCard from "./PropertyCard";
import { ArrowRight, TrendingUp, MapPin, Filter, Grid, List } from "lucide-react";
import { combinedProperties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";

// Use imported property data
const recommendedProjects = combinedProperties.slice(0, 12);
const newLaunchProjects = combinedProperties.filter(p => p.status === "New Launch").slice(0, 8);
const readyToMoveProjects = combinedProperties.filter(p => p.status === "Ready to Move").slice(0, 8);

const apartmentTypes = [
  {
    title: "Flats in Western Mumbai",
    count: "2,547 properties",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop",
    priceRange: "₹1.2 - 5.5 Cr"
  },
  {
    title: "Builder Floors in Western Mumbai",
    count: "1,234 properties",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop",
    priceRange: "₹85 L - 2.8 Cr"
  },
  {
    title: "Independent House in Western Mumbai",
    count: "856 properties",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop",
    priceRange: "₹1.8 - 8.5 Cr"
  },
  {
    title: "Plots in Western Mumbai",
    count: "432 properties",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop",
    priceRange: "₹45 L - 3.2 Cr"
  },
  {
    title: "Commercial in Western Mumbai",
    count: "678 properties",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop",
    priceRange: "₹2.5 - 15 Cr"
  },
  {
    title: "Luxury Apartments in Western Mumbai",
    count: "234 properties",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=300&h=200&fit=crop",
    priceRange: "₹5 - 25 Cr"
  }
];

const FeaturedProjects = () => {
  const [activeSection, setActiveSection] = useState("recommended");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const getSectionData = () => {
    switch (activeSection) {
      case "new-launch":
        return newLaunchProjects;
      case "ready-to-move":
        return readyToMoveProjects;
      default:
        return recommendedProjects;
    }
  };

  const getSectionTitle = () => {
    switch (activeSection) {
      case "new-launch":
        return "New Launch Projects";
      case "ready-to-move":
        return "Ready to Move Properties";
      default:
        return "Recommended Projects";
    }
  };

  const getSectionDescription = () => {
    switch (activeSection) {
      case "new-launch":
        return "Latest projects with modern amenities and attractive pricing";
      case "ready-to-move":
        return "Move-in ready properties for immediate possession";
      default:
        return "The most searched and trending projects across India";
    }
  };

  return (
    <div className="space-y-16">
      {/* Section Navigation */}
      <div className="flex flex-wrap gap-4 justify-center">
        {[
          { key: "recommended", label: "Recommended", icon: TrendingUp },
          { key: "new-launch", label: "New Launch", icon: MapPin },
          { key: "ready-to-move", label: "Ready to Move", icon: Grid }
        ].map(({ key, label, icon: Icon }) => (
          <Button
            key={key}
            variant={activeSection === key ? "default" : "outline"}
            onClick={() => setActiveSection(key)}
            className={`flex items-center gap-2 ${
              activeSection === key 
                ? "bg-orange-500 hover:bg-orange-600 text-white" 
                : "text-gray-600 hover:text-orange-500 border-gray-200"
            }`}
          >
            <Icon className="h-4 w-4" />
            {label}
          </Button>
        ))}
      </div>

      {/* Featured Properties Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {getSectionTitle()}
            </h2>
            <p className="text-gray-600 text-lg">
              {getSectionDescription()}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center border rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8 w-8 p-0"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8 w-8 p-0"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className={
          viewMode === "grid" 
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
            : "space-y-4 mb-8"
        }>
          {getSectionData().map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property}
              className={cn(
                "hover:shadow-xl transition-all duration-300",
                viewMode === "list" && "flex flex-row max-w-none"
              )}
            />
          ))}
        </div>

        <div className="text-center">
          <Link to="/more-projects" className="flex items-center gap-2 mx-auto text-primary hover:text-primary/80 font-medium w-fit">
            <span>View More Projects</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Property Types Section */}
      <section>
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Explore by Property Type
          </h2>
          <p className="text-gray-600 text-lg">
            Find the perfect property type in Western Mumbai
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartmentTypes.map((type, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2 leading-tight">
                  {type.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-200 mb-1">{type.count}</p>
                    <p className="text-lg font-semibold text-orange-300">{type.priceRange}</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Market Insights */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Market Insights
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest real estate trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-green-600 mb-2">+12%</div>
            <div className="text-sm text-gray-600">Price Growth (YoY)</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-blue-600 mb-2">₹8,450</div>
            <div className="text-sm text-gray-600">Avg. Price per sq.ft</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-orange-600 mb-2">2.3M</div>
            <div className="text-sm text-gray-600">Properties Sold</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProjects;