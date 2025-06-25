import dentist3 from "../assets/dentist3.webp";
const Services = () => {
  return (
    <div className="bg-white">
      <div className="w-10/12 mx-auto px-6 pt-8 pb-12 bg-blue-50 h-[500px]">
        <h3 className="text-4xl font-bold text-center items-center pb-8">
          Our Service
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {/* 1 */}
          <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-[1000ms] ease-in-out">
            <div className="overflow-hidden">
              <img
                src={dentist3}
                alt="Card Service"
                className="w-full h-60 object-cover transition-all duration-[1000ms] ease-in-out group-hover:h-[100px]"
              />
            </div>

            <div className="p-4 h-[100px] group-hover:h-[160px] transition-all duration-[1000ms] overflow-hidden">
              <h3 className="text-lg font-semibold text-blue-900">
                Cardiology
              </h3>
              <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                We send a doctor to visit the patient at home...
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-[1000ms] ease-in-out">
            <div className="overflow-hidden">
              <img
                src={dentist3}
                alt="Card Service"
                className="w-full h-60 object-cover transition-all duration-[1000ms] ease-in-out group-hover:h-[100px]"
              />
            </div>

            <div className="p-4 h-[100px] group-hover:h-[160px] transition-all duration-[1000ms] overflow-hidden">
              <h3 className="text-lg font-semibold text-blue-900">
                Cardiology
              </h3>
              <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                We send a doctor to visit the patient at home...
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-[1000ms] ease-in-out">
            <div className="overflow-hidden">
              <img
                src={dentist3}
                alt="Card Service"
                className="w-full h-60 object-cover transition-all duration-[1000ms] ease-in-out group-hover:h-[100px]"
              />
            </div>

            <div className="p-4 h-[100px] group-hover:h-[160px] transition-all duration-[1000ms] overflow-hidden">
              <h3 className="text-lg font-semibold text-blue-900">
                Cardiology
              </h3>
              <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                We send a doctor to visit the patient at home...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
