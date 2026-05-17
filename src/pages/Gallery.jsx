import gallery from "../data/gallery";

const Gallery = () => {
  return (
    <section className="py-20 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p style={{color:"oklch(0.67 0.18 144.23)"}} className="font-semibold uppercase">
            Our Gallery
          </p>

          <h1 className="text-4xl font-bold mt-3">
            Showcase of Our Work
          </h1>

          <p className="text-gray-600 mt-4">
            Explore our premium uniform collection and craftsmanship.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-xl shadow-md group"
            >
              <img
                src={item.image}
                alt="Gallery"
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;