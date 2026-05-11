import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      {/* Banner */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch for product inquiries, bulk orders, or custom uniforms.
        </p>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-2xl text-red-600" />
                <p>+92 XXX XXXXXXX</p>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-2xl text-red-600" />
                <p>info@ccs.com</p>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-2xl text-red-600" />
                <p>Lahore, Pakistan</p>
              </div>

            </div>
          </div>

          {/* Form */}
          <div>
            <form className="bg-white shadow-md rounded-xl p-8 space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border p-4 rounded-md outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border p-4 rounded-md outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border p-4 rounded-md outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border p-4 rounded-md outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-3 rounded-md"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;