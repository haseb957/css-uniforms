import { FaMedal, FaTruck, FaHeadset, FaTshirt } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaMedal />,
    title: "Premium Quality",
    description:
      "High-quality fabrics and durable stitching for professional use.",
  },
  {
    id: 2,
    icon: <FaTshirt />,
    title: "Custom Uniforms",
    description:
      "Customized uniforms tailored to your brand and business needs.",
  },
  {
    id: 3,
    icon: <FaTruck />,
    title: "Fast Delivery",
    description:
      "Reliable production and on-time delivery for all bulk orders.",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "Customer Support",
    description:
      "Dedicated support for orders, designs, and product consultation.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-100 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <p style={{color:"oklch(0.67 0.18 144.23)"}} className="font-semibold uppercase">
            Why Choose Us
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Built for Professionals
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We provide high-quality uniforms designed for comfort,
            durability, and a professional appearance.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="text-4xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;