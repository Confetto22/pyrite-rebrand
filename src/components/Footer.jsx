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
    refLink: "#",
    type: "quickLinks",
  },
  {
    ref: "about",
    refLink: "#",
    type: "quickLinks",
  },
  {
    ref: "projects",
    refLink: "#",
    type: "quickLinks",
  },
  {
    ref: "journal",
    refLink: "#",
    type: "quickLinks",
  },
  {
    ref: "Weija, Ghana",
    refLink: "#",
    icon: <CiLocationOn />,
    type: "contact",
  },
  {
    ref: "info@pyriteclassics.com",
    refLink: "#",
    icon: <IoMdMail />,
    type: "contact",
  },
  {
    ref: "+233(0)593552731",
    refLink: "#",
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
    <footer className="footer  bg-[#11131C] text-[white] p-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:items-center md:justify-items-center py-11 md:py-20">
        <div className=" h-full footer_box flex flex-col items-start justify-start gap-5">
          <h2 className="font-bold text-[1.8rem] uppercase">About pyrite</h2>
          <p className="md:max-w-[300px] max-w-[400px] text-[var(--secondary-color)]">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudanti. Sed ut perspiciatis unde omnis iste natus
            voluptatem accusantium doloremque laudanti.
          </p>
          <div className=" flex items-center gap-4 ">
            {footerSocials.map((social) => (
              <Link
                to={social.refLink}
                key={social.ref}
                className="border border-[var(--neon)] p-3 hover:bg-[var(--neon)] hover:text-black ease-in duration-200"
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
                className=" w-full flex items-center gap-3 capitalize text-[var(--secondary-color)]"
              >
                <hr className="w-full max-w-[17px] border-none bg-[var(--neon)] h-[2px] " />

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
                className="flex items-start gap-1 md:max-w-[270px] text-[var(--secondary-color)]"
              >
                <span className="text-[var(--neon)] text-[1.2rem]">
                  {contact.icon}
                </span>
                {contact.ref}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr className="bg-[var(--secondary-color)] h-[1px] border-none" />
      <div className="copyright flex flex-col items-center p-4 text-center text-[var(--secondary-color)]">
        <p>Copyright &copy; {currYear}. All rights reserved.</p>
        <p>
          Developed by{" "}
          <Link
            to={"#"}
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
