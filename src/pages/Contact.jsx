import { toast } from "react-toastify";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
    e.target.reset(); // Optional: clears form
  };
  return (
    <div className="w-10/12 mx-auto min-h-screen pt-16">
      <div className="bg-gradient-to-br from-blue-50 to-white px-8 pt-8 pb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl md:text-5xl font-bold ">
            Get in <span className="text-[#64BCAE]">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm lg:text-lg max-w-2xl mx-auto">
            We’re here to help. Reach out to schedule appointments, ask
            questions, or learn more about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-lg p-8 space-y-6"
          >
            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-black">
                Message
              </label>
              <textarea
                rows="5"
                required
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#64BCAE] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 font-bold"
            >
              Send Message
            </button>
          </form>
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.845142270742!2d90.40436007590441!3d23.751183688938775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c0b9c4297b%3A0x9df50cc0d377252d!2sApollo%20Hospital!5e0!3m2!1sen!2sbd!4v1718610119734!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
