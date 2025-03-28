import { Link, NavLink } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navtopSocials = [
    {
      name: "facebook",
      icon: <FaFacebookF />,
      refLink: "#",
    },
    {
      name: "instagram",
      icon: <FaInstagram />,
      refLink: "#",
    },
    {
      name: "youtube",
      icon: <FaYoutube />,
      refLink: "#",
    },
    {
      name: "whatsapp",
      icon: <FaWhatsapp />,
      refLink: "#",
    },
  ];

  const pageLinks = [
    {
      name: "home",
      refLink: "/",
    },
    {
      name: "about",
      refLink: "#",
    },
    {
      name: "services",
      refLink: "#",
    },
    {
      name: "journal",
      refLink: "#",
    },
    {
      name: "contact",
      refLink: "#",
    },
  ];

  return (
    <>
      <section className="navbar p-5 absolute top-0 w-full text-white">
        <div className="navtop flex   items-center justify-between   ">
          <div className=" flex lg:hidden  w-full items-center justify-between md:justify-between">
            <img
              src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1719970385/pyrite/newpyritelogo-removebg-preview_mmqdgc.png"
              alt="logo"
              className="max-w-[160px]"
            />
            <button
              className="menuBt bg-[var(--primary-color)] p-1 rounded-sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoMenu size={30} />
            </button>
          </div>
          <div className="navtop_socials  items-center gap-5 hidden lg:flex ">
            {navtopSocials.map((social) => (
              <Link to={"#"} key={social.name}>
                {social.icon}
              </Link>
            ))}
          </div>

          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1719970385/pyrite/newpyritelogo-removebg-preview_mmqdgc.png"
            alt="logo"
            className="max-w-[200px] hidden lg:block"
          />
          <div className="navtop_contacts  items-center gap-5 hidden md:hidden lg:flex">
            <Link to={"tel:233593552731"} className="flex items-center">
              <FiPhone /> 0593552731
            </Link>
            <Link
              to={"mailto:enockagyei1999@gmail.com"}
              className="flex items-center uppercase"
            >
              info@pyriteclassics
            </Link>
          </div>
        </div>

        <hr className="border-none h-[1px] bg-[#f4f4f4] mt-3 opacity-40 " />
        <menu className="navbottom  items-center justify-center  gap-9 px-12 uppercase hidden lg:flex bg-[#000000a0]">
          {pageLinks.map((page) => (
            <NavLink
              className={`${
                location.pathname === page.refLink
                  ? "text-[var(--primary-color)] border-b-2 border-b-[var(--primary-color)] "
                  : ""
              } hover:text-[var(--primary-color)] hover:border-b-2 border-b-[var(--primary-color)] ease-in duration-300 py-2 pt-4 `}
              to={page.refLink}
              key={page.name}
            >
              {page.name}
            </NavLink>
          ))}
        </menu>
      </section>
      <aside
        className={`h-screen w-[100%] py-5 pt-[90px] bg-[white] ease-in-out duration-700 z-[999] top-0 bottom-0 md:hidden fixed ${
          isOpen ? "left-0 " : "left-[-100%]"
        }`}
      >
        <button
          className="absolute top-[30px] right-[20px] bg-[var(--primary-color)] text-white rounded-sm p-1 hover:opacity-90 ease-in-out duration-300 hover:rotate-180"
          onClick={() => setIsOpen(false)}
        >
          <IoClose className="text-[2rem] " />
        </button>
        <ul className="menuList flex flex-col gap-[.1rem]">
          {pageLinks.map((link) => (
            <Link
              to={link.refLink}
              key={link.name}
              className=" py-3 px-4 pr-16 hover:pr-8 capitalize ease-in-out duration-500 font-semibold text-[1.1rem] flex items-center justify-between hover:text-[var(--primary-color)]"
            >
              {link.name}
              <span className="text-[1.3rem]">
                <MdOutlineKeyboardArrowRight />
              </span>
            </Link>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
