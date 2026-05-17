import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group">
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">
        <p className="text-sm text-red-600 mb-2">
          {product.category}
        </p>

        <h3 className="text-xl font-semibold mb-2">
          {product.name}
        </h3>

        <p className="font-bold mb-4">
          {product.price}
        </p>

        <Link
          to={`/products/${product.id}`}
          style={{backgroundColor:"oklch(0.67 0.18 144.23)", borderColor:"transparent"}}
          className="inline-block text-white px-5 py-2 rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;