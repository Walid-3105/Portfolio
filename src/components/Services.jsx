import dentist3 from "../assets/dentist3.webp";
const Services = () => {
  return (
    <div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-12 bg-blue-50 h-[400px]">
        <div class="group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-[1000ms] ease-in-out">
          <div class="overflow-hidden">
            <img
              src={dentist3}
              alt="Card Service"
              class="w-full h-60 object-cover transition-all duration-[1000ms] ease-in-out group-hover:h-[100px]"
            />
          </div>

          <div class="p-4 h-[100px] group-hover:h-[160px] transition-all duration-[1000ms] overflow-hidden">
            <h3 class="text-lg font-semibold text-blue-900">Cardiology</h3>
            <p class="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              We send a doctor to visit the patient at home...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
