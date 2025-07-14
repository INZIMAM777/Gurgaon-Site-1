import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Software Engineer",
      location: "Bangalore",
      rating: 5,
      text: "Found my dream home in Whitefield through 99acres. The verification process was thorough and the support team was extremely helpful throughout the journey.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      propertyType: "3 BHK Apartment",
      deal: "₹95 Lakhs"
    },
    {
      name: "Priya Sharma",
      role: "Marketing Manager", 
      location: "Mumbai",
      rating: 5,
      text: "Excellent service! The property insights and market trends helped me make an informed decision. Got a great deal in Andheri with their expert guidance.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      propertyType: "2 BHK Apartment",
      deal: "₹1.8 Crores"
    },
    {
      name: "Amit Patel",
      role: "Business Owner",
      location: "Pune",
      rating: 5,
      text: "Used 99acres for both buying and renting properties. The platform is user-friendly and the property verification gives peace of mind. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      propertyType: "Villa",
      deal: "₹2.5 Crores"
    },
    {
      name: "Sneha Reddy",
      role: "IT Consultant",
      location: "Hyderabad",
      rating: 4,
      text: "Great experience with 99acres. Found multiple options in Gachibowli area. The virtual tours and detailed property information saved a lot of time.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      propertyType: "3 BHK Flat",
      deal: "₹75 Lakhs"
    },
    {
      name: "Vikram Singh",
      role: "Investment Banker",
      location: "Delhi",
      rating: 5,
      text: "Professional service with authentic property listings. The loan assistance and legal support made the entire process smooth and hassle-free.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      propertyType: "4 BHK Penthouse",
      deal: "₹3.2 Crores"
    },
    {
      name: "Meera Joshi",
      role: "Doctor",
      location: "Chennai",
      rating: 5,
      text: "Amazing support from the 99acres team. They helped me find a perfect home near my hospital. The price trends analysis was very accurate.",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
      propertyType: "2 BHK Apartment",
      deal: "₹65 Lakhs"
    }
  ];

  const stats = [
    { number: "4.8/5", label: "Average Rating" },
    { number: "50,000+", label: "Happy Customers" },
    { number: "99%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who found their dream homes with us. 
            Read real stories from real people.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-4">
                  <Quote className="h-8 w-8 text-blue-500 opacity-50" />
                  <div className="flex">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star 
                        key={starIdx}
                        className={`h-4 w-4 ${
                          starIdx < testimonial.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Property Details */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Property:</span>
                    <span className="font-medium">{testimonial.propertyType}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Deal Value:</span>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {testimonial.deal}
                    </Badge>
                  </div>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      📍 {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Verified Reviews</h3>
              <p className="text-gray-600 text-sm">All reviews are from verified customers who completed transactions</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Quote className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real Stories</h3>
              <p className="text-gray-600 text-sm">Authentic experiences shared by real customers</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
                  ✓
                </Badge>
              </div>
              <h3 className="font-semibold text-lg mb-2">Trusted Platform</h3>
              <p className="text-gray-600 text-sm">India's most trusted property portal with verified listings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;