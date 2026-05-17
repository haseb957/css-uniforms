const About = () => {
  return (
    <>
      {/* Banner */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          About CCS
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Delivering premium chef and hospitality uniforms
          with quality, comfort, and professionalism.
        </p>
      </section>

      {/* Company Intro */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <img
              src="/about/about-company.jpg"
              alt="About CCS"
              className="w-full rounded-xl shadow-md"
            />
          </div>

          <div>
            <p style={{color:"oklch(0.67 0.18 144.23)"}} className="font-semibold uppercase mb-4">
              Who We Are
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Crafting Professional Uniforms for Every Industry
            </h2>

            <p className="text-gray-600 mb-6">
              CCS specializes in premium chef uniforms,
              aprons, hospitality wear, and custom uniform
              solutions tailored to business needs.
            </p>

            <p className="text-gray-600">
              Our commitment to quality and precision ensures
              that every uniform meets industry standards and
              customer expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-100 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600">
              To provide durable, stylish, and functional
              uniforms for professionals across industries.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600">
              To become a leading uniform manufacturing
              company known for quality and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto text-center">
          
          <p style={{color:"oklch(0.67 0.18 144.23)"}} className="font-semibold uppercase">
            Our Process
          </p>

          <h2 className="text-4xl font-bold mt-3 mb-10">
            From Design to Delivery
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="p-8 shadow-md rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Design
              </h3>
              <p className="text-gray-600">
                Creating custom and functional uniform designs.
              </p>
            </div>

            <div className="p-8 shadow-md rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Production
              </h3>
              <p className="text-gray-600">
                Premium stitching and high-quality materials.
              </p>
            </div>

            <div className="p-8 shadow-md rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                Delivery
              </h3>
              <p className="text-gray-600">
                Fast and reliable order fulfillment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;