/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdFacebook, MdOutlineSlowMotionVideo } from "react-icons/md";
import { ImPinterest, ImTwitter, ImWhatsapp, ImYoutube } from "react-icons/im";

const NavLinkItem = ({ to, text }) => (
  <Link to={to} className="flex items-center gap-2  font-medium text-sm">
    <HiOutlineArrowNarrowRight className="text-primary text-xl" />
    {text}
  </Link>
);

const socialMediaLinks = [
  { Icon: MdFacebook, color: "text-blue-500", text: "Facebook" },
  { Icon: ImYoutube, color: "text-red-500", text: "Youtube" },
  { Icon: ImPinterest, color: "text-red-700", text: "Pinterest" },
  { Icon: ImTwitter, color: "text-sky-400", text: "Twitter" },
  { Icon: ImWhatsapp, color: "text-green-500", text: "Whatsapp" },
];

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/blogs", text: "Blogs" },
  { to: "/contact", text: "Contact" },
];

const Footer = () => {
  return (
    <div className="px-8 md:px-44 lg:px-36  shadow-xl shadow-slate-100 border-t-2 bg-white">
      <div className="pt-16 lg:pt-24 grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-7 ">
        <div className="flex justify-start">
          <div>
            <div className="text-sm font-medium mt-0 lg:mt-3">
              <a className="text-xl flex text-left lg:text-center items-center font-bold">
                Flossy Dental
              </a>
            </div>
            <p className="lg:block hidden">
              @ {new Date().getFullYear()} Flossy Dental.dev
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-semibold ">Page</h1>
          <div className="my-3 space-y-2">
            {navLinks.map((link, index) => (
              <NavLinkItem key={index} to={link.to} text={link.text} />
            ))}
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Legal</h1>
          <div className="my-3 space-y-2">
            <NavLinkItem to="/" text="Terms & Conditions" />
            <NavLinkItem to="/" text="License" />
            <NavLinkItem to="/" text="Contact" />
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Social</h1>
          <div className="my-3 space-y-2">
            {socialMediaLinks.map(({ Icon, color, text }, index) => (
              <div key={index} className="flex items-center gap-1">
                <Icon className={`${color} text-xl`} />
                <p className=" font-medium text-sm">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="text-sm font-medium text-center mt-5 pb-6 lg:pt-4 lg:pb-10">
        © theFlossy Dental. {new Date().getFullYear()}, Bangladesh. All rights
        reserved
      </p>
    </div>
  );
};

export default Footer;
