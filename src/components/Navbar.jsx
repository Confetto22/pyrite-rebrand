import { Link, useLocation } from "react-router-dom";
// import { FiPhone } from "react-icons/fi";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
// import { IoClose } from "react-icons/io5";

// import { useState } from "react";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const navtopSocials = [
  //   {
  //     name: "facebook",
  //     icon: <FaFacebookF />,
  //     refLink: "#",
  //   },
  //   {
  //     name: "instagram",
  //     icon: <FaInstagram />,
  //     refLink: "#",
  //   },
  //   {
  //     name: "youtube",
  //     icon: <FaYoutube />,
  //     refLink: "#",
  //   },
  //   {
  //     name: "whatsapp",
  //     icon: <FaWhatsapp />,
  //     refLink: "#",
  //   },
  // ];

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
      name: "projects",
      refLink: "/projects",
    },
    {
      name: "contact",
      refLink: "/contact",
    },
  ];

  const pageLocation = useLocation();
  return (
    <nav className="navbar px-5 md:px-8 py-5  flex items-center justify-between ">
      <div className="flex items-center gap-4">
        <Link to={"/"}>
          <img
            src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1749147676/pyrite/jilova-logo-removebg-preview_mq5pee.png"
            alt="pyrite classics"
            className="max-w-[100px]"
          />
        </Link>
        <h2 className="uppercase font-[700] text-[var(--primary-color)] text-[1.2rem]">
          jilova studios
        </h2>
      </div>
      <div className="md:flex hidden items-center md:gap-[3rem] lg:gap-[7rem] ">
        <menu className="flex items-center gap-4 uppercase text-[1.1rem] font-[500] ">
          {pageLinks.map((link) => (
            <Link
              to={link.refLink}
              key={link.name}
              className={`${
                pageLocation.pathname === link.refLink
                  ? "text-[var(--secondary-color)] border-b-2 border-b-[var(--secondary-color)] "
                  : ""
              } hover:text-[var(--secondary-color)]   ease-in duration-300   `}
            >
              {link.name}
            </Link>
          ))}
        </menu>
        <Link
          to={"/contact"}
          className="uppercase bg-[var(--primary-color)] text-white font-[600] px-4 py-3 rounded-sm flex items-center gap-1 border border-[var(--primary-color)] hover:bg-transparent hover:text-[var(--primary-color)] ease-in duration-200"
        >
          get in touch <MdArrowOutward className="text-[1.2rem]" />
        </Link>
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <button className="md:hidden text-[1.7rem] border border-[var(--primary-color)] p-2 rounded-sm text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white ease-in duration-200">
            <IoMenu />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className="uppercase font-[700] text-[1.6rem]">
            jilova studios
          </SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="flex flex-col items-start  gap-4 uppercase text-[1.1rem] font-[500]">
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
          </div>
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
