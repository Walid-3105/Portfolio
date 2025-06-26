import { FaPhone, FaPlay } from "react-icons/fa";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="bg-white">
      <div
        className="w-full lg:w-10/12 mx-auto h-full rounded-md bg-white "
        style={{
          backgroundImage: {},
          backgroundSize: "cover",
        }}
      >
        <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0   justify-between pt-16">
          <div className="p-8 my-auto w-full lg:w-[50%]">
            <h1 className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] font-medium">
              Where Bright Smiles Begin
            </h1>
            <p className="text-[16px]  mt-2">
              Experience personalized dental care with comfort, quality, and
              compassion.
            </p>
            <div className="flex items-center flex-wrap gap-[20px] mt-6">
              <button className="py-1.5 px-4 min-w-fit dark:border-slate-500 bg-[#64BCAE] text-white rounded-full hover:bg-transparent hover:border-[#64BCAE] hover:text-[#64BCAE] transition-all duration-200 border font-semibold">
                Get Started
              </button>
              <Link to="/contact">
                <button className="bg-gray-200 min-w-fit dark:bg-slate-800 rounded-full py-1.5 px-4 flex items-center gap-2 hover:bg-[#e0e0e0] dark:hover:bg-slate-700 transition duration-300">
                  <FaPhone className="bg-[#64BCAE] text-white p-1.5 rounded-full text-xl" />
                  <span className="font-semibold text-gray-800 dark:text-white">
                    Book Appointment
                  </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="object-cover bg-no-repeat max-w-sm lg:w-[500px] items-end">
            <img src={banner} alt="" />
          </div>
        </header>
      </div>
    </div>
  );
};

export default HeroSection;
