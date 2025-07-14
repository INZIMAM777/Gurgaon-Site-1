import { Building, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Download, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-white mb-2">Stay Updated with 99acres</h3>
              <p className="text-orange-100">Get the latest property news and market insights</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 rounded-lg text-gray-900"
              />
              <button className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Building className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">99acres</span>
            </div>
            <p className="text-slate-300 mb-6 text-sm leading-relaxed">
              India's No. 1 Property Portal. Find properties for sale and rent across India. 
              Your trusted partner in real estate with 15+ years of excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-orange-500" />
                <span>1800 41 99099 (Toll-free)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-orange-500" />
                <span>services@99acres.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span>Mumbai, Delhi, Bangalore & 50+ cities</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Buy Properties */}
          <div>
            <h3 className="font-semibold text-white mb-4">BUY PROPERTIES</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Apartments in Mumbai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Flats in Delhi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Houses in Bangalore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Villas in Pune</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Properties in Chennai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Plots in Hyderabad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial in Gurgaon</a></li>
            </ul>
          </div>

          {/* Rent Properties */}
          <div>
            <h3 className="font-semibold text-white mb-4">RENT PROPERTIES</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">Flats for Rent in Mumbai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Houses for Rent in Delhi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">PG in Bangalore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Apartments for Rent in Pune</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Flats for Rent in Chennai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Office Space in Hyderabad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Commercial for Rent</a></li>
            </ul>
          </div>

          {/* New Projects */}
          <div>
            <h3 className="font-semibold text-white mb-4">NEW PROJECTS</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">New Launch in Mumbai</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Under Construction Delhi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ready to Move Bangalore</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Luxury Projects Pune</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affordable Housing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">RERA Approved</a></li>
            </ul>
          </div>

          {/* Company & Tools */}
          <div>
            <h3 className="font-semibold text-white mb-4">COMPANY & TOOLS</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><a href="#" className="hover:text-white transition-colors">About 99acres</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">EMI Calculator</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Area Converter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Price Trends</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Locality Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
            </ul>
          </div>
        </div>

        {/* App Download Section */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="font-semibold text-white mb-2">Download 99acres App</h3>
              <p className="text-slate-300 text-sm">Get the best property deals on your mobile</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
                <Download className="h-5 w-5" />
                <div>
                  <div className="text-xs text-slate-400">Download on</div>
                  <div className="text-sm font-medium">App Store</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
                <Download className="h-5 w-5" />
                <div>
                  <div className="text-xs text-slate-400">Get it on</div>
                  <div className="text-sm font-medium">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Cities Section */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <h3 className="font-semibold text-white mb-4">PROPERTIES BY TOP CITIES</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Mumbai Property</a>
            <a href="#" className="hover:text-white transition-colors">Delhi Property</a>
            <a href="#" className="hover:text-white transition-colors">Bangalore Property</a>
            <a href="#" className="hover:text-white transition-colors">Pune Property</a>
            <a href="#" className="hover:text-white transition-colors">Chennai Property</a>
            <a href="#" className="hover:text-white transition-colors">Hyderabad Property</a>
            <a href="#" className="hover:text-white transition-colors">Kolkata Property</a>
            <a href="#" className="hover:text-white transition-colors">Gurgaon Property</a>
            <a href="#" className="hover:text-white transition-colors">Noida Property</a>
            <a href="#" className="hover:text-white transition-colors">Ghaziabad Property</a>
            <a href="#" className="hover:text-white transition-colors">Faridabad Property</a>
            <a href="#" className="hover:text-white transition-colors">Ahmedabad Property</a>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <h3 className="font-semibold text-white mb-4">AWARDS & RECOGNITION</h3>
          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-slate-300">Best Property Portal 2023</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-slate-300">Customer Choice Award</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-sm text-slate-300">Digital Innovation Award</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <p className="text-xs text-slate-400 leading-relaxed">
            <strong>Disclaimer:</strong> 99acres.com is only an intermediary offering its platform to facilitate transactions between Seller and Customer/Buyer/User and is not and cannot be a party to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended by various builders/developers. The Company shall not be liable in respect of any loss or damage including direct, indirect, punitive, special, exemplary, consequential, as may be suffered by the user as a result of the offers or information on the Website.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <p>© 2024 99acres.com. All rights reserved.</p>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.5/5 Customer Rating</span>
              </div>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
              <a href="#" className="hover:text-white transition-colors">Help</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;