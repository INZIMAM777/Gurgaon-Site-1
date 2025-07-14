<<<<<<< HEAD:client/src/pages/SearchResults.tsx
import { useState, useEffect } from "react";
import { useSearch } from "wouter";
=======
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
>>>>>>> d8d2d33c1cae20c684541c15e19fe117a0da03fe:src/pages/SearchResults.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import SearchFilters from "@/components/SearchFilters";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, SlidersHorizontal, Grid, List, Filter, Map, Bookmark, Share2 } from "lucide-react";
import { combinedProperties } from "@/data/properties";

const SearchResults = () => {
<<<<<<< HEAD:client/src/pages/SearchResults.tsx
  const search = useSearch();
  const [filteredProperties, setFilteredProperties] = useState(combinedProperties);
=======
  const [searchParams] = useSearchParams();
>>>>>>> d8d2d33c1cae20c684541c15e19fe117a0da03fe:src/pages/SearchResults.tsx
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("relevance");
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    propertyType: 'all',
    bedrooms: 'all',
    bathrooms: 'all',
    status: 'all',
    amenities: [] as string[],
    area: [0, 5000],
    isRERA: false,
    verified: false
  });
  
  // Parse URL search params manually from wouter
  const searchParams = new URLSearchParams(search);
  const searchQuery = searchParams.get('q') || '';
  const searchLocation = searchParams.get('location') || '';
  const searchCategory = searchParams.get('category') || '';

  const filteredProperties = useMemo(() => {
    // Get posted properties from localStorage
    const postedProperties = JSON.parse(localStorage.getItem('postedProperties') || '[]');
    let allProps = [...combinedProperties, ...postedProperties];
    
    // Apply search filters
    if (searchQuery) {
      allProps = allProps.filter(property => 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.type.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (searchLocation && searchLocation !== 'Near Me') {
      allProps = allProps.filter(property => 
        property.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (searchCategory && searchCategory !== 'all') {
      if (searchCategory.includes('rent')) {
        // Filter for rental properties (this would need to be implemented in data)
        allProps = allProps.filter(property => property.type.toLowerCase().includes('rent'));
      } else if (searchCategory === 'new-launch') {
        allProps = allProps.filter(property => property.status === 'New Launch');
      } else if (searchCategory === 'ready-to-move') {
        allProps = allProps.filter(property => property.status === 'Ready to Move');
      }
    }
    
    // Apply additional filters
    if (filters.propertyType && filters.propertyType !== 'all') {
      allProps = allProps.filter(property => property.type === filters.propertyType);
    }
    
    if (filters.bedrooms && filters.bedrooms !== 'all') {
      allProps = allProps.filter(property => property.beds === parseInt(filters.bedrooms));
    }
    
    if (filters.status && filters.status !== 'all') {
      allProps = allProps.filter(property => property.status === filters.status);
    }

    if (filters.isRERA) {
      allProps = allProps.filter(property => property.isRERA);
    }

    if (filters.verified) {
      allProps = allProps.filter(property => property.verified);
    }

    if (filters.city && filters.city !== 'all') {
      filtered = filtered.filter(property => property.city === filters.city);
    }

    // Apply price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(property => {
        const priceStr = property.price.replace(/[₹,\s]/g, '');
        let price = 0;
        if (priceStr.includes('Cr')) {
          price = parseFloat(priceStr.replace('Cr', '')) * 10000000;
        } else if (priceStr.includes('Lakh') || priceStr.includes('L')) {
          price = parseFloat(priceStr.replace(/Lakh|L/g, '')) * 100000;
        }
        return price >= filters.priceRange[0] && price <= filters.priceRange[1];
      });
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        allProps.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\-\s]/g, '').split('-')[0]) || 0;
          const priceB = parseFloat(b.price.replace(/[₹,\-\s]/g, '').split('-')[0]) || 0;
          return priceA - priceB;
        });
        break;
      case 'price-high':
        allProps.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[₹,\-\s]/g, '').split('-')[0]) || 0;
          const priceB = parseFloat(b.price.replace(/[₹,\-\s]/g, '').split('-')[0]) || 0;
          return priceB - priceA;
        });
        break;
      case 'newest':
        allProps.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case 'area-high':
        allProps.sort((a, b) => (b.sqft || 0) - (a.sqft || 0));
        break;
      default:
        // Keep original order for relevance
        break;
    }
    
    return allProps;
  }, [searchQuery, searchLocation, searchCategory, filters, sortBy]);

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb & Search Info */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <span>Home</span>
            <span>›</span>
            <span>Search Results</span>
            {searchLocation && (
              <>
                <span>›</span>
                <span>{searchLocation}</span>
              </>
            )}
          </div>
          
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="h-5 w-5 text-orange-500" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {filteredProperties.length} Properties Found
              </h1>
              <p className="text-gray-600">
                {searchLocation || 'All Locations'} 
                {searchQuery && ` • "${searchQuery}"`}
                {searchCategory && ` • ${searchCategory.replace('-', ' ')}`}
              </p>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
                {Object.values(filters).some(v => v !== 'all' && v !== false && (Array.isArray(v) ? v.length > 0 : true)) && (
                  <span className="bg-orange-500 text-white text-xs rounded-full px-2 py-0.5 ml-1">
                    Active
                  </span>
                )}
              </Button>
              
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
                <Map className="h-4 w-4" />
                Map View
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="area-high">Area: Largest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <div className="sticky top-24">
                <SearchFilters onFilterChange={handleFilterChange} />
              </div>
            </div>
          )}
          
          {/* Properties Grid/List */}
          <div className="flex-1">
            {filteredProperties.length > 0 ? (
              <>
                {/* Results Summary */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-blue-900">
                        {filteredProperties.length} properties match your search
                      </h3>
                      <p className="text-sm text-blue-700">
                        Showing results for {searchLocation || 'all locations'}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-blue-700">Average Price</div>
                      <div className="font-semibold text-blue-900">₹2.5 Cr</div>
                    </div>
                  </div>
                </div>

                <div className={
                  viewMode === "grid" 
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "space-y-4"
                }>
                  {filteredProperties.map((property) => (
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

                {/* Load More */}
                {filteredProperties.length > 12 && (
                  <div className="text-center mt-12">
                    <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                      Load More Properties
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="mb-6">
                    <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      No properties found
                    </h3>
                    <p className="text-gray-600 mb-6">
                      We couldn't find any properties matching your search criteria. 
                      Try adjusting your filters or search terms.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <Button 
                      onClick={() => setFilters({
                        priceRange: [0, 10000000],
                        propertyType: 'all',
                        bedrooms: 'all',
                        bathrooms: 'all',
                        status: 'all',
                        amenities: [],
                        area: [0, 5000],
                        isRERA: false,
                        verified: false
                      })}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      Clear All Filters
                    </Button>
                    <div>
                      <Button variant="outline">
                        Browse All Properties
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchResults;