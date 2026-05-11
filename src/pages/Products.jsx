import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = [
  "All",
  "Chef Coats",
  "Aprons",
  "Chef Pants",
  "Caps",
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (
    <section className="py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase">
            Our Products
          </p>

          <h1 className="text-4xl font-bold mt-3">
            Explore Our Collection
          </h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`px-5 py-2 rounded-md ${
                selectedCategory === category
                  ? "bg-red-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
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

export default Products;