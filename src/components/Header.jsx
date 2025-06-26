import { useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa";

const Header = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="bg-white">
      <nav className="w-10/12 mx-auto flex items-center justify-between   bg-white rounded-full py-2 px-8 text-black fixed left-28 z-20">
        <NavLink to={"/"}>
          {" "}
          <h3 className="font-bold text-xl text-pretty">Flossy</h3>
        </NavLink>
        <ul className="items-center gap-[20px] text-[1rem] md:flex hidden">
          <NavLink to={"/"}>
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px]  hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              home
            </li>
          </NavLink>

          <NavLink to="/blogs">
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px]  hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              blogs
            </li>
          </NavLink>

          <NavLink to="/contact">
            <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px]  hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
              contact
            </li>
          </NavLink>
        </ul>

        <div className="items-center gap-[10px] flex">
          <Link to="/contact">
            <button className="bg-gray-200 min-w-fit dark:bg-slate-800 rounded-full py-1.5 px-4 flex items-center gap-2 hover:bg-[#e0e0e0] dark:hover:bg-slate-700 transition duration-300">
              <FaPhone className="bg-[#64BCAE] text-white p-1.5 rounded-full text-xl" />
              <span className="font-semibold text-gray-800 dark:text-white">
                Book Appointment
              </span>
            </button>
          </Link>

          <CiMenuFries
            className="text-[1.8rem] dark:text-[#abc2d3] mr-1 text-[#424242]c cursor-pointer md:hidden flex"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>

        {mobileSidebarOpen && (
          <aside className="md:hidden bg-white p-4 text-center absolute top-[65px] dark:bg-slate-700 right-0 w-full sm:w-[50%] rounded-md transition-all duration-300 z-20">
            <div className="relative mb-5">
              <input
                className="py-1.5 pr-4 dark:bg-slate-800 dark:text-[#abc2d3] dark:border-slate-900/50 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                placeholder="Search..."
              />
              <IoIosSearch className="absolute dark:text-slate-400 top-[8px] left-3 text-gray-500 text-[1.3rem]" />
            </div>
            <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
              <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                home
              </li>

              <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                features
              </li>

              <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                blogs
              </li>

              <li className="before:w-0 hover:before:w-full before:bg-[#3B9DF8] before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300 before:left-0 cursor-pointer capitalize">
                shop
              </li>
            </ul>
          </aside>
        )}
      </nav>
    </div>
  );
};

export default Header;
