

const Category = () => {
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Filter products based on selected category (case insensitive)
//   const filteredProducts =
//     selectedCategory.toLowerCase() === 'all'
//       ? Products
//       : Products.filter(
//           product =>
//             product.category &&
//             product.category.toLowerCase() === selectedCategory.toLowerCase()
//         );

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-100 min-h-screen py-10 px-6 md:px-12">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-4">🌞 Summer Collection</h1>
        <p className="text-md md:text-lg text-gray-700 font-medium max-w-xl mx-auto">
          Refresh your wardrobe with the hottest summer trends!
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold border transition shadow-sm ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 mb-2 truncate">{product.name}</h3>

              <div className="flex items-center justify-between">
                <div className="text-purple-900 font-semibold text-lg">
                  ₹{product.discountedPrice}{' '}
                  <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                </div>
                <span className="bg-yellow-400 text-black font-bold px-2 py-1 rounded-full text-xs">
                  {product.discountPercent}% OFF
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
