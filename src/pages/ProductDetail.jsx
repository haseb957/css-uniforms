import { useParams } from "react-router-dom";
import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <section className="py-20 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-md"
          />
        </div>

        {/* Product Info */}
        <div>
          <p className="text-red-600 font-medium mb-3">
            {product.category}
          </p>

          <h1 className="text-4xl font-bold mb-5">
            {product.name}
          </h1>

          <p className="text-2xl font-semibold mb-6">
            {product.price}
          </p>

          <p className="text-gray-600 mb-8">
            Premium quality uniform designed for comfort,
            durability, and professional appearance.
          </p>

          <button className="bg-red-600 text-white px-6 py-3 rounded-md">
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;