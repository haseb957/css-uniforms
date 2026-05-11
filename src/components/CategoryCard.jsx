const CategoryCard = ({ title, image }) => {
  return (
    <div className="group overflow-hidden rounded-xl shadow-md cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-4 bg-white">
        <h3 className="text-xl font-semibold text-center">{title}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;