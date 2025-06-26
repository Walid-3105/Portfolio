import root from "../assets/RootCanal.webp";
import visit from "../assets/Visit.webp";
import smile from "../assets/Smile.webp";

const blogs = [
  {
    id: 1,
    title: "5 Tips to Maintain a Healthy Smile",
    date: "June 15, 2025",
    image: smile,
    content: `Keeping a healthy smile goes beyond brushing. Floss daily, limit sugary drinks, visit your dentist regularly, and never ignore signs of tooth sensitivity. Consistency is key to long-term dental health.`,
  },
  {
    id: 2,
    title: "Understanding Root Canal Treatment",
    date: "June 10, 2025",
    image: root,
    content: `Heart disease is preventable with the right lifestyle. Eat heart-friendly foods, exercise regularly, manage stress, and get regular health screenings. Small habits can lead to big changes.`,
  },
  {
    id: 3,
    title: "How Often Should You Visit a Dentist?",
    date: "June 5, 2025",
    image: visit,
    content: `Diabetes management starts with understanding its causes. Monitor your blood sugar, stay active, eat balanced meals, and work closely with your doctor for a care plan that fits your life.`,
  },
];

const Blogs = () => {
  return (
    <div className="w-10/12 mx-auto pt-16">
      <div className="px-8 py-16 space-y-20  bg-blue-50">
        <div className="text-center mb-12 ">
          <h1 className="text-4xl md:text-5xl font-bold">
            Doctor’s <span className="text-[#64BCAE]">Health</span> Blog
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Explore expert health tips, latest treatments, and medical guides.
          </p>
        </div>

        {blogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-10`}
          >
            <div className="md:w-1/2 w-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="md:w-1/2 w-full">
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#64BCAE] mb-4">
                {blog.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {blog.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
