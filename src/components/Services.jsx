import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.webp";
const Services = () => {
  return (
    <div className="bg-white">
      <div className="w-full lg:w-10/12 mx-auto px-8 pt-8 pb-16 bg-blue-50 h-full lg:h-[550px]">
        <h3 className="text-3xl lg:text-4xl font-bold text-center items-center ">
          Our <span className="text-[#64BCAE]">Dental</span> Service
        </h3>
        <p className="mt-1 text-center items-center text-gray-600 text-sm lg:text-lg pb-8 w-2/3 mx-auto">
          Comprehensive dental care for every smile. Explore our professional
          treatments designed for comfort and long-lasting results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {/* 1 */}
          <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-[1000ms] ease-in-out">
            <div className="overflow-hidden">
              <img
                src={service1}
                alt="Card Service"
                className="w-full h-60 object-cover transition-all duration-[1000ms] ease-in-out group-hover:h-[100px]"
              />
            </div>

            <div className="p-4 h-[100px] group-hover:h-[160px] transition-all duration-[1000ms] overflow-hidden">
              <h3 className="text-lg font-semibold text-blue-900">
                Teeth Cleaning
              </h3>
              <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Remove plaque and tartar buildup to prevent gum disease and
                maintain a healthy smile. Our professional dental cleanings not
                only freshen your breath but also reduce the risk of cavities
                and tooth loss.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-[1000ms] ease-in-out">
            <div className="overflow-hidden">
              <img
                src={service2}
                alt="Card Service"
                className="w-full h-60 object-cover transition-all duration-[1000ms] ease-in-out group-hover:h-[100px]"
              />
            </div>

            <div className="p-4 h-[100px] group-hover:h-[160px] transition-all duration-[1000ms] overflow-hidden">
              <h3 className="text-lg font-semibold text-blue-900">
                Dental Fillings
              </h3>
              <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Restore teeth damaged by cavities or injury with durable and
                aesthetic fillings. Our modern composite fillings are designed
                to blend seamlessly with your natural teeth, ensuring both
                function and beauty.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-[1000ms] ease-in-out">
            <div className="overflow-hidden">
              <img
                src={service3}
                alt="Card Service"
                className="w-full h-60 object-cover transition-all duration-[1000ms] ease-in-out group-hover:h-[100px]"
              />
            </div>

            <div className="p-4 h-[100px] group-hover:h-[160px] transition-all duration-[1000ms] overflow-hidden">
              <h3 className="text-lg font-semibold text-blue-900">
                Teeth Whitening
              </h3>
              <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Brighten your smile with safe and effective in-office or
                take-home whitening treatments. Our professional teeth whitening
                solutions are designed to remove deep stains and discoloration
                caused by coffee, tea, smoking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
