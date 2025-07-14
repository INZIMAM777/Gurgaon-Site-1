import { useState, useMemo } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import { combinedProperties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Grid, List, SlidersHorizontal } from "lucide-react";

const MoreProjects = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    city: "",
    propertyType: "",
    bedrooms: "",
    status: "",
    priceRange: ""
  });
  const [sortBy, setSortBy] = useState("latest");

  const filteredProperties = useMemo(() => {
    let filtered = [...combinedProperties];

    // Apply filters
    if (filters.city) {
      filtered = filtered.filter(p => p.city.toLowerCase() === filters.city.toLowerCase());
    }
    if (filters.propertyType && filters.propertyType !== 'all') {
      filtered = filtered.filter(p => p.type && p.type.toLowerCase() === filters.propertyType.toLowerCase());
    }
    if (filters.bedrooms && filters.bedrooms !== 'all') {
      filtered = filtered.filter(p => p.beds === parseInt(filters.bedrooms));
    }
    if (filters.status) {
      filtered = filtered.filter(p => p.status.toLowerCase() === filters.status.toLowerCase());
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\s]/g, '').replace('Cr', '00').replace('Lakh', ''));
          const priceB = parseFloat(b.price.replace(/[₹,\s]/g, '').replace('Cr', '00').replace('Lakh', ''));
          return priceA - priceB;
        });
        break;
      case "price-high":
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\s]/g, '').replace('Cr', '00').replace('Lakh', ''));
          const priceB = parseFloat(b.price.replace(/[₹,\s]/g, '').replace('Cr', '00').replace('Lakh', ''));
          return priceB - priceA;
        });
        break;
      case "area":
        filtered.sort((a, b) => {
          const areaA = parseInt(a.area);
          const areaB = parseInt(b.area);
          return areaB - areaA;
        });
        break;
      default:
        // Keep original order for "latest"
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-muted-foreground mb-4">
          <Link to="/" className="hover:text-foreground">Home</Link>
          {" > "}
          <span>All Projects ({filteredProperties.length} of {combinedProperties.length} properties)</span>
        </div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">All Projects & Properties</h1>
            <p className="text-muted-foreground">
              Discover {filteredProperties.length} properties across major cities in India
            </p>
          </div>
          
          {/* View Controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-80 space-y-4`}>
            <div className="bg-card rounded-lg p-4 border">
              <h3 className="font-semibold mb-4">Filter Properties</h3>
              <SearchFilters onFilterChange={(filters) => setFilters(filters)} />
              
              {/* Sort Options */}
              <div className="mt-6">
                <label className="block text-sm font-medium mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="latest">Latest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="area">Area: Largest First</option>
                </select>
              </div>
            </div>
          </div>

          {/* Properties Grid/List */}
          <div className="flex-1">
            {filteredProperties.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No properties found matching your criteria</p>
                <Button onClick={() => setFilters({city: "", propertyType: "", bedrooms: "", status: "", priceRange: ""})}>
                  Clear Filters
                </Button>
              </div>
            ) : (
              <div className={
                viewMode === "grid" 
                  ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  : "space-y-4"
              }>
                {filteredProperties.map((property) => (
                  <PropertyCard
                    key={property.id}
                    {...property}
                    className={viewMode === "list" ? "flex-row" : ""}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MoreProjects;
