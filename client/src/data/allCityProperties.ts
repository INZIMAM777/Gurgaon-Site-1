// Additional properties for all cities (20 each)
interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  imageUrl: string;
  features: string[];
  propertyType: string;
  status: string;
  city: string;
}

// Generate properties for all cities
const generateCityProperties = (cityName: string, startId: number): Property[] => {
  const propertyTypes = ["Apartment", "Villa", "Studio", "Penthouse", "Duplex"];
  const statuses = ["Ready to Move", "Under Construction"];
  const locations = {
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

  const cityLocations = locations[cityName as keyof typeof locations] || ["Central Area", "North Zone", "South Zone", "East Zone", "West Zone"];
  
  return Array.from({ length: 20 }, (_, index) => {
    const id = startId + index;
    const propertyType = propertyTypes[index % propertyTypes.length];
    const status = statuses[index % statuses.length];
    const location = cityLocations[index % cityLocations.length];
    const bedrooms = [1, 2, 3, 4, 5][index % 5];
    
    // Price calculation based on city tier and property type
    const basePrices = {
      "Hyderabad": [45, 85, 1.2, 2.5, 4.5],
      "Pune": [35, 75, 1.1, 2.2, 3.8],
      "Chennai": [40, 80, 1.0, 2.0, 3.5],
      "Kolkata": [25, 55, 0.8, 1.5, 2.8],
      "Ahmedabad": [30, 65, 0.9, 1.8, 3.2],
      "Gurgaon": [55, 95, 1.4, 2.8, 5.2],
      "Noida": [45, 85, 1.2, 2.4, 4.5],
      "Faridabad": [35, 65, 0.9, 1.8, 3.2],
      "Ghaziabad": [30, 55, 0.8, 1.6, 2.8],
      "Thane": [65, 95, 1.3, 2.6, 4.8],
      "Navi Mumbai": [55, 85, 1.1, 2.2, 4.0],
      "Indore": [25, 45, 0.7, 1.4, 2.5],
      "Bhopal": [20, 38, 0.6, 1.2, 2.2],
      "Jaipur": [28, 52, 0.8, 1.6, 2.8],
      "Lucknow": [22, 42, 0.6, 1.3, 2.4],
      "Kanpur": [18, 35, 0.5, 1.0, 1.8],
      "Nagpur": [20, 40, 0.6, 1.2, 2.2]
    };

    const cityPrices = basePrices[cityName as keyof typeof basePrices] || [25, 50, 0.8, 1.6, 3.0];
    const basePrice = cityPrices[bedrooms - 1];
    const price = basePrice >= 1 ? `₹${basePrice} Cr` : `₹${Math.round(basePrice * 100)} Lakh`;

    return {
      id: id.toString(),
      title: `${bedrooms} BHK ${propertyType} in ${location}`,
      price,
      location: `${location}, ${cityName}`,
      area: `${500 + (bedrooms * 200) + (index * 50)} sq.ft`,
      bedrooms,
      bathrooms: Math.min(bedrooms, bedrooms === 1 ? 1 : bedrooms - 1),
      imageUrl: `https://images.unsplash.com/photo-${1600047509782 + (index * 1000)}?w=300&h=200&fit=crop`,
      features: ["Parking", "Security", "Lift", "Gym"][index % 4] === "Parking" ? 
        ["Parking", "Security", "Lift"] : 
        ["Gym", "Swimming Pool", "Garden", "Security"],
      propertyType,
      status,
      city: cityName
    };
  });
};

// Generate properties for all remaining cities
export const hyderabadProperties = generateCityProperties("Hyderabad", 61);
export const puneProperties = generateCityProperties("Pune", 81);
export const chennaiProperties = generateCityProperties("Chennai", 101);
export const kolkataProperties = generateCityProperties("Kolkata", 121);
export const ahmedabadProperties = generateCityProperties("Ahmedabad", 141);
export const gurgaonProperties = generateCityProperties("Gurgaon", 161);
export const noidaProperties = generateCityProperties("Noida", 181);
export const faridabadProperties = generateCityProperties("Faridabad", 201);
export const ghaziabadProperties = generateCityProperties("Ghaziabad", 221);
export const thaneProperties = generateCityProperties("Thane", 241);
export const naviMumbaiProperties = generateCityProperties("Navi Mumbai", 261);
export const indoreProperties = generateCityProperties("Indore", 281);
export const bhopalProperties = generateCityProperties("Bhopal", 301);
export const jaipurProperties = generateCityProperties("Jaipur", 321);
export const lucknowProperties = generateCityProperties("Lucknow", 341);
export const kanpurProperties = generateCityProperties("Kanpur", 361);
export const nagpurProperties = generateCityProperties("Nagpur", 381);

// Combine all additional properties
export const additionalProperties = [
  ...hyderabadProperties,
  ...puneProperties,
  ...chennaiProperties,
  ...kolkataProperties,
  ...ahmedabadProperties,
  ...gurgaonProperties,
  ...noidaProperties,
  ...faridabadProperties,
  ...ghaziabadProperties,
  ...thaneProperties,
  ...naviMumbaiProperties,
  ...indoreProperties,
  ...bhopalProperties,
  ...jaipurProperties,
  ...lucknowProperties,
  ...kanpurProperties,
  ...nagpurProperties
];