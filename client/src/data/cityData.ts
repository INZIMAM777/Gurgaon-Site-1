// City data with property counts as requested
export const cityData = [
  { name: "Mumbai", count: 2547 },
  { name: "Delhi", count: 1892 },
  { name: "Bangalore", count: 1653 },
  { name: "Hyderabad", count: 1234 },
  { name: "Pune", count: 1156 },
  { name: "Chennai", count: 987 },
  { name: "Kolkata", count: 834 },
  { name: "Ahmedabad", count: 756 },
  { name: "Gurgaon", count: 1445 },
  { name: "Noida", count: 1287 },
  { name: "Faridabad", count: 654 },
  { name: "Ghaziabad", count: 578 },
  { name: "Thane", count: 892 },
  { name: "Navi Mumbai", count: 743 },
  { name: "Indore", count: 456 },
  { name: "Bhopal", count: 378 },
  { name: "Jaipur", count: 567 },
  { name: "Lucknow", count: 345 },
  { name: "Kanpur", count: 234 },
  { name: "Nagpur", count: 298 }
];

// Generate 20 properties per city as requested
export const generateMoreProperties = (cityName: string, baseId: number) => {
  const propertyTypes = ["Apartment", "Villa", "Studio", "Penthouse", "Duplex"];
  const statuses = ["Ready to Move", "Under Construction", "New Launch"];
  
  const areasByCity = {
    "Mumbai": ["Borivali", "Andheri", "Bandra", "Powai", "Thane"],
    "Delhi": ["Connaught Place", "Lajpat Nagar", "Karol Bagh", "Dwarka", "Rohini"],
    "Bangalore": ["Koramangala", "Indiranagar", "Whitefield", "Electronic City", "Jayanagar"],
    "Hyderabad": ["Hitech City", "Gachibowli", "Madhapur", "Jubilee Hills", "Banjara Hills"],
    "Pune": ["Hinjewadi", "Wakad", "Aundh", "Koregaon Park", "Viman Nagar"],
    "Chennai": ["T Nagar", "Anna Nagar", "Velachery", "OMR", "Adyar"],
    "Kolkata": ["Salt Lake", "New Town", "Park Street", "Ballygunge", "Howrah"],
    "Ahmedabad": ["Satellite", "Bopal", "Prahlad Nagar", "Vastrapur", "Maninagar"],
    "Gurgaon": ["Cyber City", "Golf Course Road", "Sohna Road", "New Gurgaon", "DLF Phase 1"],
    "Noida": ["Sector 62", "Sector 18", "Greater Noida", "Sector 137", "Sector 76"],
    "Faridabad": ["Sector 21", "New Industrial Town", "Ballabgarh", "Sector 15", "Sector 82"],
    "Ghaziabad": ["Raj Nagar", "Vaishali", "Indirapuram", "Crossings Republik", "Nyay Khand"],
    "Thane": ["Ghodbunder Road", "Pokhran Road", "Hiranandani Estate", "Kasarvadavali", "Majiwada"],
    "Navi Mumbai": ["Vashi", "Nerul", "Kharghar", "Panvel", "CBD Belapur"],
    "Indore": ["Vijay Nagar", "AB Road", "Palasia", "Super Corridor", "Bhawarkua"],
    "Bhopal": ["New Market", "MP Nagar", "Arera Colony", "Kolar Road", "TT Nagar"],
    "Jaipur": ["Malviya Nagar", "Vaishali Nagar", "C Scheme", "Mansarovar", "Tonk Road"],
    "Lucknow": ["Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Rajajipuram"],
    "Kanpur": ["Civil Lines", "Kakadeo", "Swaroop Nagar", "Kidwai Nagar", "Govind Nagar"],
    "Nagpur": ["Dharampeth", "Sadar", "Wardha Road", "Khamla", "Medical Square"]
  };

  const areas = areasByCity[cityName as keyof typeof areasByCity] || ["Central Area", "North Zone", "South Zone", "East Zone", "West Zone"];
  
  return Array.from({ length: 20 }, (_, index) => {
    // Ensure each property type appears multiple times
    const propertyTypeDistribution = [
      "Apartment", "Apartment", "Apartment", "Apartment", // 4 apartments
      "House", "House", "House", // 3 houses
      "Villa", "Villa", "Villa", // 3 villas
      "Penthouse", "Penthouse", // 2 penthouses
      "Studio", "Studio", // 2 studios
      "Apartment", "House", "Villa", "Penthouse", "Studio" // 5 more mixed
    ];
    const propertyType = propertyTypeDistribution[index];
    const status = statuses[index % statuses.length];
    const area = areas[index % areas.length];
    const bedrooms = [1, 2, 3, 4, 5][index % 5];
    const sqft = [450, 650, 850, 1200, 1600][index % 5];
    
    // Price calculation based on city tier
    const priceMultipliers = {
      "Mumbai": [0.8, 1.2, 1.8, 3.2, 6.5],
      "Delhi": [0.7, 1.0, 1.5, 2.8, 5.2],
      "Bangalore": [0.6, 0.9, 1.3, 2.4, 4.8],
      "Hyderabad": [0.4, 0.7, 1.0, 1.8, 3.5],
      "Pune": [0.5, 0.8, 1.2, 2.2, 4.2],
      "Chennai": [0.4, 0.6, 0.9, 1.6, 3.0],
      "Kolkata": [0.3, 0.5, 0.7, 1.2, 2.2],
      "Ahmedabad": [0.3, 0.5, 0.8, 1.4, 2.6],
      "Gurgaon": [0.6, 0.9, 1.4, 2.6, 4.8],
      "Noida": [0.5, 0.8, 1.2, 2.2, 4.0],
      "Faridabad": [0.4, 0.6, 0.9, 1.6, 2.8],
      "Ghaziabad": [0.3, 0.5, 0.8, 1.4, 2.4],
      "Thane": [0.6, 0.9, 1.3, 2.4, 4.4],
      "Navi Mumbai": [0.5, 0.8, 1.2, 2.0, 3.8],
      "Indore": [0.25, 0.4, 0.6, 1.0, 1.8],
      "Bhopal": [0.2, 0.35, 0.5, 0.9, 1.6],
      "Jaipur": [0.3, 0.45, 0.7, 1.2, 2.2],
      "Lucknow": [0.25, 0.4, 0.6, 1.0, 1.8],
      "Kanpur": [0.2, 0.3, 0.45, 0.8, 1.4],
      "Nagpur": [0.2, 0.35, 0.5, 0.9, 1.6]
    };

    const multipliers = priceMultipliers[cityName as keyof typeof priceMultipliers] || [0.3, 0.5, 0.8, 1.4, 2.6];
    const basePrice = multipliers[bedrooms - 1];
    const price = basePrice >= 1 ? `₹${basePrice.toFixed(1)} Cr` : `₹${Math.round(basePrice * 100)} Lakh`;
    
    // Unique property images for variety
    const propertyImages = [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop", // Modern apartment
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop", // Luxury home
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop", // Villa exterior
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop", // Modern house
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop", // Apartment building
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400&h=300&fit=crop", // House front
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=400&h=300&fit=crop", // Residential complex
      "https://images.unsplash.com/photo-1600607688890-ac374a57fe0c?w=400&h=300&fit=crop", // Modern building
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop", // Contemporary home
      "https://images.unsplash.com/photo-1600573471957-692de6d265df?w=400&h=300&fit=crop", // Luxury villa
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=400&h=300&fit=crop", // High-rise apartment
      "https://images.unsplash.com/photo-1600563438938-a42b2c46cd97?w=400&h=300&fit=crop", // Garden home
      "https://images.unsplash.com/photo-1600563438901-c9f6e7a2aa44?w=400&h=300&fit=crop", // Penthouse view
      "https://images.unsplash.com/photo-1600563438901-a9e8a9a0e0f4?w=400&h=300&fit=crop", // Studio apartment
      "https://images.unsplash.com/photo-1600563438945-4b7c3e11a5b4?w=400&h=300&fit=crop", // Duplex house
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=400&h=300&fit=crop", // Commercial space
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=400&h=300&fit=crop", // Office building
      "https://images.unsplash.com/photo-1600047509782-20d39509584e?w=400&h=300&fit=crop", // Residential tower
      "https://images.unsplash.com/photo-1600047509517-e7b3b9f4f9e2?w=400&h=300&fit=crop", // Gated community
      "https://images.unsplash.com/photo-1600047509643-4d3b9b8b0f9f?w=400&h=300&fit=crop"  // Luxury complex
    ];

    // Enhanced amenities and features
    const amenitiesList = [
      "Swimming Pool", "Gym/Fitness Center", "Parking Space", "24x7 Security",
      "Club House", "Garden/Landscaping", "Elevator/Lift", "Power Backup",
      "Water Supply", "Internet/Wi-Fi", "CCTV Surveillance", "Children's Play Area",
      "Jogging Track", "Multi-purpose Hall"
    ];
    
    const specialFeaturesList = ["RERA Approved", "Verified Properties"];
    
    // Random amenities selection (3-8 amenities per property)
    const numAmenities = 3 + (index % 6);
    const selectedAmenities = amenitiesList
      .sort(() => Math.random() - 0.5)
      .slice(0, numAmenities);
    
    // Special features
    const selectedFeatures = [];
    if (Math.random() > 0.3) selectedFeatures.push("RERA Approved");
    if (Math.random() > 0.4) selectedFeatures.push("Verified Properties");
    
    // Convert price to lakhs for filtering
    const priceInLakhs = basePrice >= 1 ? Math.round(basePrice * 100) : Math.round(basePrice * 100);

    return {
      id: `${baseId + index}`,
      title: `${propertyType} in ${area}`,
      location: `${bedrooms} BHK ${propertyType} in ${area}, ${cityName}`,
      price: price,
      priceRange: priceInLakhs,
      image: propertyImages[index % propertyImages.length],
      beds: bedrooms,
      baths: Math.min(bedrooms, 3),
      sqft: sqft,
      type: propertyType,
      propertyType: propertyType,
      status: status as "Ready to Move" | "Under Construction" | "New Launch",
      possession: status === "Ready to Move" ? "Ready to Move" : `Possession from ${['Dec 2025', 'Mar 2026', 'Jun 2026', 'Sep 2026', 'Dec 2026'][index % 5]}`,
      isRERA: selectedFeatures.includes("RERA Approved"),
      verified: selectedFeatures.includes("Verified Properties"),
      city: cityName,
      area: area,
      amenities: selectedAmenities,
      specialFeatures: selectedFeatures,
      features: selectedAmenities
    };
  });
};

// Generate all city properties with 20 properties each
export const allCityProperties = cityData.flatMap((city, index) => 
  generateMoreProperties(city.name, index * 20 + 1000)
);