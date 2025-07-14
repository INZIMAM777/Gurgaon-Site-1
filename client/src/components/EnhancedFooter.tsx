import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Smartphone,
  Download,
  Star,
  Shield,
  Award,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const EnhancedFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    "Company": [
      { name: "About 99acres", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Careers", href: "/careers" },
      { name: "Terms & Conditions", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Grievances", href: "/grievances" },
      { name: "Testimonials", href: "/testimonials" },
      { name: "Unsubscribe", href: "/unsubscribe" }
    ],
    "Properties": [
      { name: "Buy Properties", href: "/search?type=buy" },
      { name: "Rent Properties", href: "/search?type=rent" },
      { name: "New Projects", href: "/projects" },
      { name: "Commercial Properties", href: "/search?type=commercial" },
      { name: "Plots & Land", href: "/search?type=land" },
      { name: "PG & Co-living", href: "/search?type=pg" },
      { name: "Property Services", href: "/services" },
      { name: "Post Property", href: "/post-property" }
    ],
    "Tools & Insights": [
      { name: "Property Valuation", href: "/tools/valuation" },
      { name: "Home Loan EMI", href: "/tools/emi-calculator" },
      { name: "Area Unit Converter", href: "/tools/area-converter" },
      { name: "Stamp Duty Calculator", href: "/tools/stamp-duty" },
      { name: "Price Trends", href: "/insights/price-trends" },
      { name: "Locality Insights", href: "/insights/locality" },
      { name: "Market Reports", href: "/insights/reports" },
      { name: "Investment Guide", href: "/insights/investment" }
    ],
    "Popular Searches": [
      { name: "Property in Mumbai", href: "/search?city=Mumbai" },
      { name: "Property in Delhi", href: "/search?city=Delhi" },
      { name: "Property in Bangalore", href: "/search?city=Bangalore" },
      { name: "Property in Pune", href: "/search?city=Pune" },
      { name: "Property in Chennai", href: "/search?city=Chennai" },
      { name: "Property in Hyderabad", href: "/search?city=Hyderabad" },
      { name: "Property in Kolkata", href: "/search?city=Kolkata" },
      { name: "Property in Ahmedabad", href: "/search?city=Ahmedabad" }
    ]
  };

  const achievements = [
    { icon: Star, label: "4.5 Star Rating", value: "Google Play" },
    { icon: Shield, label: "RERA Verified", value: "Properties" },
    { icon: Award, label: "Best Property Portal", value: "2024" },
    { icon: TrendingUp, label: "10M+ Users", value: "Monthly" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-orange-500 mb-2">99acres</h3>
              <p className="text-gray-300 text-sm mb-4">
                India's No. 1 Property Portal. Find your dream home with verified properties, 
                expert insights, and hassle-free transactions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span>1800 41 99099</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-orange-500" />
                  <span>support@99acres.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  <span>Pan India Service</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "https://facebook.com/99acres" },
                  { icon: Twitter, href: "https://twitter.com/99acres" },
                  { icon: Instagram, href: "https://instagram.com/99acres" },
                  { icon: Youtube, href: "https://youtube.com/99acres" },
                  { icon: Linkedin, href: "https://linkedin.com/company/99acres" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-full hover:bg-orange-600 transition-colors"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="lg:col-span-1">
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <Link 
                      to={link.href}
                      className="text-gray-300 hover:text-orange-500 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Mobile App Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-orange-500" />
              Download Our Mobile App
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the best property search experience on your mobile. Download now!
            </p>
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-800">
                <Download className="h-4 w-4 mr-2" />
                Play Store
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-800">
                <Download className="h-4 w-4 mr-2" />
                App Store
              </Button>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h4 className="font-semibold mb-4">Our Achievements</h4>
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg">
                  <achievement.icon className="h-5 w-5 text-orange-500" />
                  <div>
                    <div className="text-xs font-medium">{achievement.label}</div>
                    <div className="text-xs text-gray-400">{achievement.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        {/* Disclaimer */}
        <div className="mb-6">
          <h4 className="font-semibold mb-3">Disclaimer</h4>
          <p className="text-gray-400 text-xs leading-relaxed">
            99acres.com does not offer any loans nor does it endorse any lender. 
            99acres.com is only acting as a referral/lead generation partner and is not responsible for any loan sanction/rejection or any other offer by the lender. 
            The information provided herein is sourced from the respective developers/projects. While every care has been taken to verify the same, 
            we do not make any representation or warranty, express or implied, with respect to the completeness, accuracy or reliability of the information.
          </p>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-700">
          <div className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} 99acres.com. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link to="/sitemap" className="hover:text-orange-500">Sitemap</Link>
            <Link to="/rss" className="hover:text-orange-500">RSS Feed</Link>
            <Link to="/feedback" className="hover:text-orange-500">Feedback</Link>
            <Link to="/blog" className="hover:text-orange-500">Blog</Link>
            <Link to="/help" className="hover:text-orange-500">Help Center</Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex justify-center gap-4 mt-6 pt-6 border-t border-gray-700">
          <Badge variant="outline" className="border-gray-600 text-gray-300">
            <Shield className="h-3 w-3 mr-1" />
            SSL Secured
          </Badge>
          <Badge variant="outline" className="border-gray-600 text-gray-300">
            <Star className="h-3 w-3 mr-1" />
            ISO Certified
          </Badge>
          <Badge variant="outline" className="border-gray-600 text-gray-300">
            <Award className="h-3 w-3 mr-1" />
            RERA Compliant
          </Badge>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;