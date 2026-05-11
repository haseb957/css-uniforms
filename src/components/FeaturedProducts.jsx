import products from "../data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  return (
    <section className="py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-red-600 font-semibold uppercase">
            Featured Products
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Best Selling Uniforms
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;