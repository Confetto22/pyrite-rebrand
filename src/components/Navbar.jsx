import { Link, NavLink, useLocation } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
// import { IoClose } from "react-icons/io5";

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
      refLink: "/about-us",
    },
    {
      name: "services",
      refLink: "/services",
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

  const pageLocation = useLocation();
  return (
    <nav className="navbar px-5 md:px-8 py-5  flex items-center justify-between">
      <Link to={"/"}>
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1749147676/pyrite/jilova-logo-removebg-preview_mq5pee.png"
          alt="pyrite classics"
          className="max-w-[100px]"
        />
      </Link>
      <menu className="md:flex items-center gap-4 uppercase text-[1.1rem] font-[500] hidden">
        {pageLinks.map((link) => (
          <Link to={link.refLink} key={link.name}>
            {link.name}
          </Link>
        ))}
      </menu>

      <Sheet>
        <SheetTrigger asChild>
          <button className="md:hidden text-[1.7rem] border border-[var(--primary-color)] p-2 rounded-sm text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white ease-in duration-200">
            <IoMenu />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle>
            <h2 className="uppercase font-[700] text-[1.6rem]">
              jilova studios
            </h2>
            <hr className="mt-2 mb-9" />
          </SheetTitle>
          <SheetDescription>
            <menu className="flex flex-col items-start  gap-4 uppercase text-[1.1rem] font-[500]">
              {pageLinks.map((link) => (
                <SheetClose asChild key={link.name}>
                  <Link
                    to={link.refLink}
                    key={link.name}
                    className="hover:text-[var(--primary-color)] ease-in duration-200"
                  >
                    {link.name}
                  </Link>
                </SheetClose>
              ))}
            </menu>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>

    // <section className="navbar p-5 absolute top-0 w-full text-white z-[9999]">
    //   <div className="navtop flex   items-center justify-between   ">
    //     <div className=" flex lg:hidden  w-full items-center justify-between md:justify-start">
    //       <button className="menuBt">
    //         <IoMenu size={30} />
    //       </button>
    //       <img
    //         src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1719970385/pyrite/newpyritelogo-removebg-preview_mmqdgc.png"
    //         alt="logo"
    //         className="max-w-[200px]"
    //       />
    //     </div>
    //     <div className="navtop_socials  items-center gap-5 hidden lg:flex ">
    //       {navtopSocials.map((social) => (
    //         <Link to={"#"} key={social.name}>
    //           {social.icon}
    //         </Link>
    //       ))}
    //     </div>

    //     <img
    //       src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1719970385/pyrite/newpyritelogo-removebg-preview_mmqdgc.png"
    //       alt="logo"
    //       className="max-w-[200px] hidden lg:block"
    //     />
    //     <div className="navtop_contacts  items-center gap-5 hidden md:flex">
    //       <Link to={"tel:233593552731"} className="flex items-center">
    //         <FiPhone /> 0593552731
    //       </Link>
    //       <Link
    //         to={"mailto:enockagyei1999@gmail.com"}
    //         className="flex items-center uppercase"
    //       >
    //         info@pyriteclassics
    //       </Link>
    //     </div>
    //   </div>

    //   <hr className="border-none h-[1px] bg-[#f4f4f4] mt-3 opacity-40 " />
    //   <menu className="navbottom  items-center justify-center  gap-9 px-12 uppercase hidden lg:flex bg-[#000000a0]">
    //     {pageLinks.map((page) => (
    //       <NavLink
    //         className={`${
    //           pageLocation.pathname === page.refLink
    //             ? "text-[var(--primary-color)] border-b-2 border-b-[var(--primary-color)] "
    //             : ""
    //         } hover:text-[var(--primary-color)] hover:border-b-2 border-b-[var(--primary-color)] ease-in duration-300 py-2 pt-4 `}
    //         to={page.refLink}
    //         key={page.name}
    //       >
    //         {page.name}
    //       </NavLink>
    //     ))}
    //   </menu>
    // </section>
  );
};

export default Navbar;
