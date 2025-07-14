import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cityData } from "@/data/cityData";

interface SearchFiltersProps {
  onFilterChange: (filters: any) => void;
}

export interface FilterState {
  priceRange: [number, number];
  propertyType: string;
  bedrooms: string;
  city: string;
  bathrooms: string;
  status: string;
  areaRange: [number, number];
  specialFeatures: string[];
  amenities: string[];
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<FilterState>({
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

  const propertyTypes = [
    "All Types", "Apartment", "Independent House", "Villa", 
    "Penthouse", "Studio", "Plot/Land"
  ];

  const bedroomOptions = ["Any", "1", "2", "3", "4", "5+"];
  const bathroomOptions = ["Any", "1", "2", "3", "4+"];
  const statusOptions = ["All Status", "Ready to Move", "Under Construction", "New Launch"];

  const specialFeatures = ["RERA Approved", "Verified Properties"];
  
  const amenitiesList = [
    "Swimming Pool", "Gym/Fitness Center", "Parking Space", "24x7 Security",
    "Club House", "Garden/Landscaping", "Elevator/Lift", "Power Backup",
    "Water Supply", "Internet/Wi-Fi", "CCTV Surveillance", "Children's Play Area",
    "Jogging Track", "Multi-purpose Hall"
  ];

  const updateFilter = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    const defaultFilters: FilterState = {
      priceRange: [0, 1000],
      propertyType: "All Types",
      bedrooms: "Any",
      city: "All Cities",
      bathrooms: "Any",
      status: "All Status",
      areaRange: [0, 5000],
      specialFeatures: [],
      amenities: []
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  const toggleSpecialFeature = (feature: string) => {
    const updated = filters.specialFeatures.includes(feature)
      ? filters.specialFeatures.filter(f => f !== feature)
      : [...filters.specialFeatures, feature];
    updateFilter('specialFeatures', updated);
  };

  const toggleAmenity = (amenity: string) => {
    const updated = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    updateFilter('amenities', updated);
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">Filters</CardTitle>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={clearAllFilters}
            className="text-blue-600 border-blue-600 hover:bg-blue-50"
          >
            Clear All
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <label className="text-sm font-medium mb-3 block">Price Range</label>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => updateFilter('priceRange', value)}
              max={1000}
              min={0}
              step={10}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>₹{filters.priceRange[0]}L</span>
              <span>₹{filters.priceRange[1]}L</span>
            </div>
          </div>
        </div>

        {/* Property Type */}
        <div>
          <label className="text-sm font-medium mb-2 block">Property Type</label>
          <Select value={filters.propertyType} onValueChange={(value) => updateFilter('propertyType', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map(type => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Bedrooms */}
        <div>
          <label className="text-sm font-medium mb-2 block">Bedrooms</label>
          <Select value={filters.bedrooms} onValueChange={(value) => updateFilter('bedrooms', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {bedroomOptions.map(option => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* City */}
        <div>
          <label className="text-sm font-medium mb-2 block">City</label>
          <Select value={filters.city} onValueChange={(value) => updateFilter('city', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All Cities">All Cities</SelectItem>
              {cityData.map(city => (
                <SelectItem key={city.name} value={city.name}>{city.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="text-sm font-medium mb-2 block">Bathrooms</label>
          <Select value={filters.bathrooms} onValueChange={(value) => updateFilter('bathrooms', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {bathroomOptions.map(option => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Status */}
        <div>
          <label className="text-sm font-medium mb-2 block">Status</label>
          <Select value={filters.status} onValueChange={(value) => updateFilter('status', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {statusOptions.map(option => (
                <SelectItem key={option} value={option}>{option}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Area Range */}
        <div>
          <label className="text-sm font-medium mb-3 block">Area (sq ft)</label>
          <div className="px-2">
            <Slider
              value={filters.areaRange}
              onValueChange={(value) => updateFilter('areaRange', value)}
              max={5000}
              min={0}
              step={100}
              className="mb-2"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>{filters.areaRange[0]} sq ft</span>
              <span>{filters.areaRange[1]} sq ft</span>
            </div>
          </div>
        </div>

        {/* Special Features */}
        <div>
          <label className="text-sm font-medium mb-3 block">Special Features</label>
          <div className="space-y-2">
            {specialFeatures.map(feature => (
              <div key={feature} className="flex items-center space-x-2">
                <Checkbox
                  id={feature}
                  checked={filters.specialFeatures.includes(feature)}
                  onCheckedChange={() => toggleSpecialFeature(feature)}
                />
                <label htmlFor={feature} className="text-sm">{feature}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div>
          <label className="text-sm font-medium mb-3 block">Amenities</label>
          <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
            {amenitiesList.map(amenity => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity}
                  checked={filters.amenities.includes(amenity)}
                  onCheckedChange={() => toggleAmenity(amenity)}
                />
                <label htmlFor={amenity} className="text-sm">{amenity}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Active Filters Summary */}
        {(filters.specialFeatures.length > 0 || filters.amenities.length > 0) && (
          <div className="pt-4 border-t">
            <label className="text-sm font-medium mb-2 block">Active Filters</label>
            <div className="flex flex-wrap gap-1">
              {filters.specialFeatures.map(feature => (
                <Badge key={feature} variant="secondary" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {filters.amenities.map(amenity => (
                <Badge key={amenity} variant="outline" className="text-xs">
                  {amenity}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchFilters;