import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const footerResources = [
  {
    ref: "facebook",
    refLink: "#",
    icon: <FaFacebookF />,
    type: "socials",
  },
  {
    ref: "instagram",
    refLink: "#",
    icon: <FaInstagram />,
    type: "socials",
  },
  {
    ref: "youtube",
    refLink: "#",
    icon: <FaYoutube />,
    type: "socials",
  },
  {
    ref: "whatsapp",
    refLink: "#",
    icon: <FaWhatsapp />,
    type: "socials",
  },
  {
    ref: "home",
    refLink: "/",
    type: "quickLinks",
  },
  {
    ref: "about",
    refLink: "/about-us",
    type: "quickLinks",
  },
  {
    ref: "projects",
    refLink: "/projects",
    type: "quickLinks",
  },
  {
    ref: "Services",
    refLink: "/services",
    type: "quickLinks",
  },
  {
    ref: "Contact",
    refLink: "/contact",
    type: "quickLinks",
  },
  {
    ref: "1 Airport Square",
    refLink:
      "https://www.google.com/maps/place/1+Airport+Square/@5.6004514,-0.1799437,17z/data=!3m1!4b1!4m6!3m5!1s0xfdf9b24d499ad2d:0x8354c5d0aa1d3b04!8m2!3d5.6004461!4d-0.1773688!16s%2Fg%2F11jjm7r_f2?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D",
    icon: <CiLocationOn />,
    type: "contact",
  },
  {
    ref: "info.jilovastudios.com",
    refLink: "mailto:info.jilovastudios.com",
    icon: <IoMdMail />,
    type: "contact",
  },
  {
    ref: "+233(0)-202-416-677",
    refLink: "tel:233202416677",
    icon: <FaPhone />,
    type: "contact",
  },
];

const footerSocials = footerResources.filter(
  (social) => social.type === "socials"
);
const quickLinks = footerResources.filter((link) => link.type === "quickLinks");
const footerContacts = footerResources.filter(
  (contact) => contact.type === "contact"
);
const currYear = new Date().getFullYear();
// console.log(currYear);
// console.log(quickLinks);

const Footer = () => {
  //   const footerSocials = [
  //     {
  //       ref: "facebook",
  //       refLink: "#",
  //       icon: <FaFacebookF />,
  //       type: "socials",
  //     },
  //     {
  //       ref: "instagram",
  //       refLink: "#",
  //       icon: <FaInstagram />,
  //       type: "socials",
  //     },
  //     {
  //       ref: "youtube",
  //       refLink: "#",
  //       icon: <FaYoutube />,
  //       type: "socials",
  //     },
  //     {
  //       ref: "whatsapp",
  //       refLink: "#",
  //       icon: <FaWhatsapp />,
  //       type: "socials",
  //     },
  //   ];

  // const footerSocials=

  return (
    <footer className="footer  bg-[var(--secondary-color)] text-[white] p-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:items-center md:justify-items-center py-11 md:py-20">
        <div className=" h-full footer_box flex flex-col items-start justify-start gap-5">
          <h2 className="font-bold text-[1.8rem] uppercase">About Jilova</h2>
          <p className="md:max-w-[300px] max-w-[400px] text-white">
            Jilova Studios is a creative movie production company dedicated to
            crafting compelling stories that inspire, educate, and captivate
            audiences. With expertise in producing high-impact visual content,
            we bring ideas to life through film, video, and multimedia
            productions
          </p>
          <div className=" flex items-center gap-4 ">
            {footerSocials.map((social) => (
              <Link
                to={social.refLink}
                key={social.ref}
                className="border border-[var(--primary-color)] p-3 hover:bg-[var(--primary-color)] hover:text-black ease-in duration-200"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer_box flex flex-col items-start justify-start gap-5  h-full  max-w-[350px]">
          <h2 className="font-bold text-[1.8rem] uppercase">quick links</h2>

          <div className=" flex flex-col items-start  w-full gap-4 ">
            {quickLinks.map((link) => (
              <Link
                to={link.refLink}
                key={link.ref}
                className=" w-full flex items-center gap-3 capitalize text-white"
              >
                <hr className="w-full max-w-[17px] border-none bg-[var(--primary-color)] h-[2px] " />

                {link.ref}
              </Link>
            ))}
          </div>
        </div>
        <div className=" h-full  footer_box flex flex-col items-start justify-start gap-5">
          <h2 className="font-bold text-[1.8rem] uppercase">our location</h2>

          <div className="flex flex-col   items-start justify-start h-full gap-4 ">
            {footerContacts.map((contact) => (
              <Link
                to={contact.refLink}
                key={contact.ref}
                className="flex items-start gap-1 md:max-w-[270px] text-white"
              >
                <span className="text-[var(--primary-color)] text-[1.2rem]">
                  {contact.icon}
                </span>
                {contact.ref}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="bg-white h-[1px] border-none" />
      <div className="copyright flex flex-col items-center p-4 text-center text-white">
        <p>Copyright &copy; {currYear}. All rights reserved.</p>
        <p>
          Developed by{" "}
          <Link
            to={"https://github.com/Confetto22"}
            target="_blank"
            className="underline underline-offset-2"
          >
            confetto
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
