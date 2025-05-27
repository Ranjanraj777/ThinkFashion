import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    toast.success(`${product.name} added to cart`);
  };

  const handleBuyNow = () => {
    toast.success(`Proceeding to buy ${product.name}`);
  };

  return (
    <div
      className="bg-gradient-to-r from-slate-500 via-sky-400 to-teal-400 
                 hover:scale-105 transition-transform duration-300 shadow-lg 
                 rounded-lg p-4 flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-64 sm:h-72 md:h-80 w-full object-cover rounded"
      />
      <h2 className="mt-2 font-semibold text-lg text-white">{product.name}</h2>
      <div className="flex items-center gap-2">
        <p className="text-gray-200 line-through text-sm">₹{product.originalPrice}</p>
        <p className="text-white font-bold text-base">₹{product.discountedPrice}</p>
      </div>
      <p className="text-yellow-200 font-semibold text-sm mt-1">
        {product.discountPercent}% OFF
      </p>

      <div className="mt-auto flex flex-col sm:flex-row gap-4 pt-4">
        <button
          onClick={handleAddToCart}
          className="w-full sm:flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="w-full sm:flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
