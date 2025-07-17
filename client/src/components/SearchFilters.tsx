import React, { useState } from "react";

type FilterType = {
  keyword: string;
  category: string;
  minPrice: number;
  maxPrice: number;
};

const categories = ["All", "Electronics", "Clothing", "Books", "Accessories"];

const SearchFilters = ({ onFilterChange }: { onFilterChange: (filters: FilterType) => void }) => {
  const [filters, setFilters] = useState<FilterType>({
    keyword: "",
    category: "All",
    minPrice: 0,
    maxPrice: 1000,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const updatedFilters = {
      ...filters,
      [name]: name.includes("Price") ? Number(value) : value,
    };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <div style={{ padding: "1rem", background: "#f9f9f9", borderRadius: "8px", display: "grid", gap: "0.75rem" }}>
      <input
        type="text"
        name="keyword"
        placeholder="Search keyword..."
        value={filters.keyword}
        onChange={handleChange}
        style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
      />

      <select
        name="category"
        value={filters.category}
        onChange={handleChange}
        style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          value={filters.minPrice}
          onChange={handleChange}
          style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          value={filters.maxPrice}
          onChange={handleChange}
          style={{ flex: 1, padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }}
        />
      </div>
    </div>
  );
};

export default SearchFilters;
