import React, { useState, useEffect } from 'react';
import Products from "../components/Products";       
import ProductCard from "../components/ProductCard"; 

const categories = ['All', 'T-Shirts', 'Dresses', 'Tops', 'Bottoms', 'Shirts', 'Jackets', 'Footwear', 'Accessories'];

const Home = () => {
  // Initialize from localStorage if available, else default 'All'
  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem('selectedCategory') || 'All';
  });

  // Save selected category to localStorage on change
  useEffect(() => {
    localStorage.setItem('selectedCategory', selectedCategory);
  }, [selectedCategory]);

  const normalizedSelected = selectedCategory.trim().toLowerCase();

  const filteredProducts =
    normalizedSelected === 'all'
      ? Products
      : Products.filter(
          (product) =>
            product.category &&
            product.category.trim().toLowerCase() === normalizedSelected
        );

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 min-h-screen">
      {/* Header */}
      <div className="text-center px-4 md:px-8 lg:px-12 py-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-900 mb-4">
          🌞 Summer Collection
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium max-w-2xl mx-auto">
          Refresh your wardrobe with the hottest summer trends! Explore breathable, vibrant, and stylish picks perfect for the sunny season.
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 px-4 sm:px-6 md:px-10 mb-10">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 text-sm sm:text-base rounded-full font-semibold border transition shadow-sm ${
              selectedCategory === category
                ? 'bg-purple-700 text-white border-purple-700'
                : 'bg-white text-purple-800 border-purple-300 hover:bg-purple-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
