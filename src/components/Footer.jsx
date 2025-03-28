import { FiPhone } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const footerLinks = [
  {
    name: "facebook",
    icon: <FaFacebookF />,
    refLink: "#",
    genre: "socials",
  },
  {
    name: "instagram",
    icon: <FaInstagram />,
    refLink: "#",
    genre: "socials",
  },
  {
    name: "youtube",
    icon: <FaYoutube />,
    refLink: "#",
    genre: "socials",
  },
  {
    name: "whatsapp",
    icon: <FaWhatsapp />,
    refLink: "#",
    genre: "socials",
  },
  //   {
  //     name: "205 New South East Road",
  //     icon: <IoLocationOutline />,
  //     refLink: "#",
  //     genre: "contacts",
  //   },
  {
    name: "+233(0)59-355-2731",
    icon: <FaPhoneAlt />,
    refLink: "#",
    genre: "contacts",
  },
  {
    name: "info@pyriteclassics.com",
    icon: <MdMailOutline />,
    refLink: "#",
    genre: "contacts",
  },
  {
    name: "home",
    refLink: "/",
    genre: "quickLink",
  },
  {
    name: "about",
    refLink: "#",
    genre: "quickLink",
  },
  {
    name: "services",
    refLink: "#",
    genre: "quickLink",
  },
  {
    name: "journal",
    refLink: "#",
    genre: "quickLink",
  },
  {
    name: "contact",
    refLink: "#",
    genre: "quickLink",
  },
];

const footerContacts = footerLinks.filter(
  (contacts) => contacts.genre === "contacts"
);
const footerPages = footerLinks.filter((links) => links.genre === "quickLink");
const footerSocials = footerLinks.filter(
  (socials) => socials.genre === "socials"
);

const Footer = () => {
  return (
    <footer className="p-8 py-16 grid grid-cols-1 gap-x-[5rem] md:grid-cols-2 lg:grid-cols-4 bg-[#0000008f]">
      <div className="footer_col flex flex-col gap-8 text-[1.1rem]">
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1719970385/pyrite/newpyritelogo-removebg-preview_mmqdgc.png"
          alt="footer logo"
          className="footer_logo max-w-[180px]"
        />
        <p className="text-stone-100">
          Lorem ipsum dolor sit amet consect etur adi pisicing elit sed do
          eiusmod tempor incididunt.
        </p>
        <ul className="flex gap-5">
          {footerSocials.map((social) => (
            <Link
              to={social.refLink}
              key={social.name}
              className="text-[var(--primary-color)] text-[1.3rem]"
            >
              {social.icon}
            </Link>
          ))}
        </ul>
      </div>

      <div className="footer_col flex flex-col gap-8 text-[1.1rem]">
        <h2 className="text-white uppercase font-bold text-[1.8rem]">
          quick links
        </h2>
        <p className="text-stone-100">
          Lorem ipsum dolor sit amet consect etur adi pisicing elit sed do
          eiusmod tempor incididunt.
        </p>
        <ul className="flex flex-col items-start gap-1">
          {footerPages.map((page) => (
            <Link
              to={page.refLink}
              key={page.name}
              className="text-stone-400 flex items-center justify-between gap-1 capitalize  ease-in-out duration-500 pr-12 hover:pr-6 min-w-[200px] hover:text-[var(--primary-color)]"
            >
              {page.name} <MdOutlineKeyboardArrowRight />
            </Link>
          ))}
        </ul>
      </div>

      <div className="footer_col flex flex-col gap-8 text-[1.1rem]">
        <h2 className="text-white uppercase font-bold text-[1.8rem]">
          contact info
        </h2>
        <Link to={"#"} className="text-stone-100">
          Weija, Accra Ghana <br />
          P.O.Box 256
        </Link>
        <ul className="flex flex-col items-start gap-1">
          {footerContacts.map((contact) => (
            <Link
              to={contact.refLink}
              key={contact.name}
              className="text-stone-400 flex items-center justify-between gap-1   ease-in-out duration-500  hover:text-[var(--primary-color)]"
            >
              {contact.icon}
              {contact.name}
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
