import { FaPhoneAlt } from "react-icons/fa";

const testimonials = [
  {
    name: "Jessica Reynolds",
    title: "The Best Dental Care!",
    text: "Dr. Michael Carter and his team made my smile brighter with their amazing teeth whitening service. The results were beyond my expectations!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Mark Thompson",
    title: "A Pain-Free Experience!",
    text: "I was nervous about getting dental implants, but Dr. James Patel made the process smooth and painless. I can finally smile with confidence!",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 5,
  },
  {
    name: "Emily Watson",
    title: "The Perfect Smile",
    text: "At Flossy, Dr. Sarah Bennett helped me straighten my teeth with clear aligners. The process was easy, and the results are amazing!",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white px-6 md:px-16">
      <div className="w-10/12 mx-auto">
        <div className=" flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              What Our <span className="text-blue-600">Happy</span> Patients Say
            </h2>
            <p className="text-gray-600 max-w-xl">
              Hear from our satisfied patients about their experiences at Flossy
              and how our expert care has transformed their dental health.
            </p>
          </div>
          <button className="mt-4 md:mt-0 flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
            <FaPhoneAlt className="text-sm" />
            Contact Us
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition transform duration-300 hover:scale-110 ease-in-out"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {t.title}
              </h3>
              <p className="text-gray-600 mb-4">{t.text}</p>
              <div className="flex items-center gap-3 border-t border-gray-200 pt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800">
                    {t.name}
                  </p>
                  <div className="flex gap-1 text-yellow-400 text-sm">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <span key={idx}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
