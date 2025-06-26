import dentist1 from "../assets/dentist1.webp";
import dentist2 from "../assets/dentist2.webp";
import dentist3 from "../assets/dentist3.webp";
import dentist4 from "../assets/dentist4.webp";
const About = () => {
  return (
    <div className="bg-white">
      <div className="w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 pt-14 p-8">
        <div className="grid grid-cols-2 grid-rows-4 gap-4">
          <div className="row-span-2">
            <img
              className="w-[265px] h-[340px] object-cover transform transition duration-300 ease-in-out hover:scale-110"
              src={dentist1}
              alt="Dentist 1"
            />
          </div>
          <div className="row-span-2 my-auto">
            <img
              className="w-[265px] h-[180px] object-cover transform transition ease-in-out duration-500  hover:scale-110"
              src={dentist2}
              alt="Dentist 2"
            />
          </div>
          <div className="col-start-1 row-start-3 relative">
            <img
              className="w-[265px] h-[180px] object-cover absolute -top-0 transform transition ease-in-out duration-300  hover:scale-110"
              src={dentist4}
              alt="Dentist 4"
            />
          </div>
          <div className="row-span-2 col-start-2 row-start-3 relative">
            <img
              className="w-[265px] h-[340px] object-cover absolute -top-20 transform transition ease-in-out duration-300  hover:scale-110"
              src={dentist3}
              alt="Dentist 3"
            />
          </div>
        </div>

        <div className="p-4 items-center space-y-4">
          <h2 className="text-5xl font-bold mt-4 lg:mt-24 text-[#64BCAE]">
            The Dental <br /> Center National <br /> Hospital
          </h2>
          <p className="pt-8 font-serif">
            One of the most important factors about people’s lives is the
            information of, the use of, and the growing knowledge of medicine.
            Medicine is a form of art. It depends on how skillfully doctors
            apply their knowledge when dealing with patients
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
