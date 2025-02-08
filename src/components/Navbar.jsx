import { Link, NavLink } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
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
    <section className="navbar p-5 absolute top-0 w-full text-white">
      <div className="navtop flex   items-center justify-between   ">
        <div className=" flex lg:hidden  w-full items-center justify-between md:justify-start">
          <button className="menuBt">
            <IoMenu size={30} />
          </button>
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1719970385/pyrite/newpyritelogo-removebg-preview_mmqdgc.png"
            alt="logo"
            className="max-w-[200px]"
          />
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
        <div className="navtop_contacts  items-center gap-5 hidden md:flex">
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
  );
};

export default Navbar;
