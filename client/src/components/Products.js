const rawProducts = [
  {
    name: "Summer T-Shirt",
    category: "T-Shirts",
    image: "https://myambari.com/wp-content/uploads/2024/03/Summer-T-Shirt-Rs.325.jpg",
    originalPrice: 999,
    discountedPrice: 599,
  },
  {
    name: "Floral Dress",
    category: "Dresses",
    image: "https://assets.ajio.com/medias/sys_master/root/20240108/khUy/659c263b54c30e62769c6020/-473Wx593H-466958616-multi-MODEL.jpg",
    originalPrice: 1999,
    discountedPrice: 999,
  },
  {
    name: "Men's Polo",
    category: "T-Shirts",
    image: "https://img.damensch.com/products/johnny_polo_wisdom_wine_(5).jpg?fm=webp",
    originalPrice: 1299,
    discountedPrice: 899,
  },
  {
    name: "Women's Crop Top",
    category: "Tops",
    image: "https://charmgal.in/cdn/shop/files/30-09-2023Ashley00145.jpg?v=1698485450",
    originalPrice: 899,
    discountedPrice: 499,
  },
  {
    name: "Casual Shorts",
    category: "Bottoms",
    image: "https://m.media-amazon.com/images/I/615T9fjYCwL._AC_UY1100_.jpg",
    originalPrice: 799,
    discountedPrice: 499,
  },
  {
    name: "Beach Hat",
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/611xJ8GerUL.jpg",
    originalPrice: 599,
    discountedPrice: 299,
  },
  {
    name: "Linen Shirt",
    category: "Shirts",
    image: "https://assets.ajio.com/medias/sys_master/root/20250325/gjZ8/67e2b6b67a6cd4182f7fce9b/-473Wx593H-441408942-white-MODEL.jpg",
    originalPrice: 1399,
    discountedPrice: 899,
  },
  {
    name: "Maxi Skirt",
    category: "Bottoms",
    image: "https://media-us.landmarkshops.in/cdn-cgi/image/h=730,w=540,q=85,fit=cover/max-new/1000013696034-Multi-MULTI-1000013696034_01-2100.jpg",
    originalPrice: 1599,
    discountedPrice: 999,
  },
  {
    name: "Denim Jacket",
    category: "Jackets",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChip3G4XasTBstBNrdo9YBqrLjt1tjkWWXg&s",
    originalPrice: 2499,
    discountedPrice: 1799,
  },
  {
    name: "Flip Flops",
    category: "Footwear",
    image: "https://relaxofootwear.com/cdn/shop/files/SF0159G-BKTN-2.jpg?v=1744868722&width=800",
    originalPrice: 499,
    discountedPrice: 299,
  },
  {
    name: "Chino Pants",
    category: "Bottoms",
    image: "https://www.threedays.in/cdn/shop/files/Beige_Metro_Mod_Chino_Pants_-_Three_Days-6390715.jpg?v=1742368696",
    originalPrice: 1499,
    discountedPrice: 999,
  },
];

const Products = rawProducts.map((item) => ({
  ...item,
  discountPercent: Math.round(((item.originalPrice - item.discountedPrice) / item.originalPrice) * 100),
}));

export default Products;
