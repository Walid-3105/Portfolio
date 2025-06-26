import { Link } from "react-router-dom";
import root from "../assets/RootCanal.webp";
import visit from "../assets/Visit.webp";
import smile from "../assets/Smile.webp";

const blogs = [
  {
    id: 1,
    title: "5 Dental Care Tips for a Healthier Smile",
    date: "June 22, 2025",
    image: smile,
  },
  {
    id: 2,
    title: "Understanding Root Canal Treatment",
    date: "June 15, 2025",
    image: root,
  },
  {
    id: 3,
    title: "How Often Should You Visit a Dentist?",
    date: "June 8, 2025",
    image: visit,
  },
];

const BlogSection = () => {
  return (
    <section className="py-16  bg-gray-50">
      <div className="w-full lg:w-10/12 mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            From The <span className="text-[#64BCAE]">Doctor's</span> Desk
          </h2>
          <p className="text-gray-600">
            Stay informed with tips, advice, and the latest updates in dental
            care.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform duration-300 hover:scale-105 ease-in-out"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{blog.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {blog.title}
                </h3>
                <Link
                  to={`/blogs`}
                  className="inline-block text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
