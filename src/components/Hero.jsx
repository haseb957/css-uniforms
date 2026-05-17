import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div>
            <p style={{color:"oklch(0.67 0.18 144.23)"}} className="font-semibold uppercase tracking-wide mb-4">
              Premium Quality Uniforms
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Professional Chef & Hospitality Uniform Solutions
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Delivering premium chef uniforms, aprons, caps, and hospitality
              wear designed for comfort, durability, and professional style.
            </p>

            <div className="flex gap-4">
              <Link
                to="/products"
                className="text-white px-6 py-3 rounded-md font-medium"
                style={{backgroundColor:"oklch(0.67 0.18 144.23)", borderColor:"transparent"}}
              >
                Shop Products
              </Link>

              <Link
                to="/contact"
                className="border border-black px-6 py-3 rounded-md font-medium"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="/chef-uniform.jpg"
              alt="Chef Uniform"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;