import categories from "../data/categories";
import CategoryCard from "./CategoryCard";

const FeaturedCategories = () => {
  return (
    <section className="py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <p className="text-red-600 font-semibold uppercase">
            Our Categories
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Explore Our Product Range
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;