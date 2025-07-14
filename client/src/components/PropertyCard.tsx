import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Phone, 
  Heart, 
  Share2, 
  Camera,
  Shield,
  CheckCircle,
  Calendar,
  TrendingUp
} from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: string;
    image: string;
    beds?: number;
    baths?: number;
    sqft?: number;
    type: string;
    status: "Ready to Move" | "Under Construction" | "New Launch";
    possession?: string;
    isRERA?: boolean;
    verified?: boolean;
  };
  className?: string;
}

const PropertyCard = ({ property, className }: PropertyCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready to Move":
        return "bg-green-100 text-green-800 border-green-200";
      case "Under Construction":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "New Launch":
        return "bg-blue-100 text-blue-800 border-blue-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const defaultImage = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop";

  return (
    <div className={cn(
      "bg-white rounded-xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer",
      className
    )}>
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={imageError ? defaultImage : property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={handleImageError}
        />
        
        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {property.isRERA && (
            <Badge className="bg-green-600 text-white text-xs font-semibold px-2 py-1">
              <Shield className="h-3 w-3 mr-1" />
              RERA
            </Badge>
          )}
          {property.verified && (
            <Badge className="bg-blue-600 text-white text-xs font-semibold px-2 py-1">
              <CheckCircle className="h-3 w-3 mr-1" />
              VERIFIED
            </Badge>
          )}
        </div>

        {/* Status Badge */}
        <div className="absolute top-3 right-3">
          <Badge className={cn("text-xs font-medium border", getStatusColor(property.status))}>
            {property.status}
          </Badge>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
          >
            <Heart className={cn("h-4 w-4", isLiked ? "fill-red-500 text-red-500" : "text-gray-600")} />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-white/90 hover:bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <Share2 className="h-4 w-4 text-gray-600" />
          </Button>
        </div>

        {/* Photo Count */}
        <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
            <Camera className="h-3 w-3" />
            <span>12 Photos</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-bold text-gray-900">{property.price}</span>
          {property.type === "Apartment" && (
            <span className="text-sm text-gray-500 ml-2">onwards</span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 text-lg leading-tight">
          {property.title}
        </h3>

        {/* Location */}
        <div className="flex items-start gap-1 mb-4">
          <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {property.location}
          </p>
        </div>

        {/* Property Details */}
        {(property.beds || property.baths || property.sqft) && (
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            {property.beds && (
              <div className="flex items-center gap-1">
                <Bed className="h-4 w-4" />
                <span>{property.beds} Beds</span>
              </div>
            )}
            {property.baths && (
              <div className="flex items-center gap-1">
                <Bath className="h-4 w-4" />
                <span>{property.baths} Baths</span>
              </div>
            )}
            {property.sqft && (
              <div className="flex items-center gap-1">
                <Square className="h-4 w-4" />
                <span>{property.sqft} sq.ft</span>
              </div>
            )}
          </div>
        )}

        {/* Possession */}
        {property.possession && (
          <div className="flex items-center gap-1 mb-4 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>{property.possession}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4 border-t border-gray-100">
          <Button 
            variant="outline" 
            className="flex-1 text-orange-500 border-orange-200 hover:bg-orange-50"
            onClick={(e) => e.stopPropagation()}
          >
            <Phone className="h-4 w-4 mr-2" />
            Contact
          </Button>
          <Button 
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            View Details
          </Button>
        </div>

        {/* Price Trend Indicator */}
        <div className="mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-green-600">
              <TrendingUp className="h-3 w-3" />
              <span>Price increased by 5% in last 6 months</span>
            </div>
            <span className="text-gray-500">ID: {property.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;