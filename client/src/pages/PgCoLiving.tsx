import React, { useState } from "react";

// Mock data for PG/Co-living listings
const listings = [
  {
    id: 1,
    name: "Sunshine PG for Boys",
    location: "Koramangala, Bangalore",
    price: "₹7,500/mo",
    gender: "Male",
    amenities: ["WiFi", "Meals", "Laundry", "AC"],
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Cozy Nest Co-Living",
    location: "HSR Layout, Bangalore",
    price: "₹9,000/mo",
    gender: "Unisex",
    amenities: ["WiFi", "Gym", "Housekeeping", "Parking"],
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Green Leaf PG for Girls",
    location: "Indiranagar, Bangalore",
    price: "₹8,200/mo",
    gender: "Female",
    amenities: ["WiFi", "Meals", "CCTV", "Power Backup"],
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80"
  }
];

const localities = [
  "Koramangala",
  "HSR Layout",
  "Indiranagar",
  "Whitefield",
  "Marathahalli"
];

const faqs = [
  {
    q: "What is a PG accommodation?",
    a: "PG (Paying Guest) accommodation is a rental housing option where tenants pay for lodging and sometimes meals, often sharing common facilities."
  },
  {
    q: "Are meals included in PGs?",
    a: "Many PGs offer meal plans, but it's best to check with the property for details."
  },
  {
    q: "Can I find women-only PGs?",
    a: "Yes, there are many women-only PGs and co-living spaces available."
  }
];

const PgCoLiving = () => {
  const [filter, setFilter] = useState({ gender: "All", locality: "All" });

  const filteredListings = listings.filter(l =>
    (filter.gender === "All" || l.gender === filter.gender || l.gender === "Unisex") &&
    (filter.locality === "All" || l.location.includes(filter.locality))
  );

  return (
    <div className="flex flex-col gap-8 p-6 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="bg-blue-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Find the Best PG & Co-Living Spaces</h1>
          <p className="text-lg text-gray-600 mb-4">Browse verified PGs and co-living options in Bangalore, just like on 99acres.com.</p>
          <div className="flex gap-4">
            <select
              className="border rounded px-3 py-2"
              value={filter.gender}
              onChange={e => setFilter(f => ({ ...f, gender: e.target.value }))}
            >
              <option value="All">All Genders</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Unisex">Unisex</option>
            </select>
            <select
              className="border rounded px-3 py-2"
              value={filter.locality}
              onChange={e => setFilter(f => ({ ...f, locality: e.target.value }))}
            >
              <option value="All">All Localities</option>
              {localities.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
          alt="PG/Co-Living Hero"
          className="rounded-lg w-64 h-40 object-cover shadow"
        />
      </section>

      {/* Featured Listings */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured PGs & Co-Living Spaces</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredListings.length === 0 ? (
            <div className="col-span-3 text-center text-gray-500">No listings found for selected filters.</div>
          ) : (
            filteredListings.map(listing => (
              <div key={listing.id} className="bg-white rounded-lg shadow p-4 flex flex-col">
                <img src={listing.image} alt={listing.name} className="rounded mb-3 h-40 object-cover" />
                <h3 className="font-bold text-lg mb-1">{listing.name}</h3>
                <div className="text-gray-600 text-sm mb-1">{listing.location}</div>
                <div className="text-primary font-semibold mb-2">{listing.price}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {listing.amenities.map(a => (
                    <span key={a} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{a}</span>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mb-2">For: {listing.gender}</div>
                <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">View Details</button>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Area Insights */}
      <section className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-3">Area Insights</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Safe and well-connected localities for students and professionals.</li>
          <li>Easy access to public transport, markets, and eateries.</li>
          <li>Resident reviews highlight cleanliness and amenities.</li>
        </ul>
        <div className="mt-4">
          <img src="https://maps.googleapis.com/maps/api/staticmap?center=Bangalore&zoom=12&size=400x200&key=YOUR_API_KEY" alt="Bangalore Map" className="rounded shadow w-full max-w-md" />
        </div>
      </section>

      {/* Popular Localities */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Popular Localities for PG/Co-Living</h2>
        <div className="flex flex-wrap gap-3">
          {localities.map(loc => (
            <span key={loc} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm cursor-pointer hover:bg-green-200">
              {loc}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ / Tips Section */}
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-3">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i}>
              <div className="font-semibold">Q: {faq.q}</div>
              <div className="text-gray-700">A: {faq.a}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PgCoLiving; 