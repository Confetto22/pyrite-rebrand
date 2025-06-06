import { motion } from "framer-motion";
import PageHead from "../components/common/PageHead";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";

const formInputs = [
  {
    title: "name",
    placeholder: "your name",
    type: "text",
  },
  {
    title: "email",
    placeholder: "your Email",
    type: "email",
  },
  {
    title: "phone",
    placeholder: "phone no.",
    type: "number",
  },
];

const contactValues = [
  {
    name: "Phone",
    value: "+233(0)593552731",
    refLink: "#",
    icon: <LuPhoneCall />,
  },
  {
    name: "Email",
    value: "info@pyritecalssics.com",
    refLink: "#",
    icon: <MdOutlineMail />,
  },
  {
    name: "Location",
    value: "1800 Abbot Kinney Blvd. Unit D & E Venice, CA 90291",
    refLink: "#",
    icon: <TfiLocationPin />,
  },
];

const Contact = () => {
  return (
    <section className="contact_page">
      <PageHead
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722248959/pyrite/Asset4_rishjn.jpg')]"
        }
        currProject={name}
        currPage={"Contact"}
        prevPage={"Home"}
        prevLink={"/"}
      />
      <section className="px-7 py-24 flex flex-col md:flex-row md:items-start md:justify-center gap-14 md:gap-5">
        <div className="contact-cards flex flex-col items-start gap-8 md:w-[40%] ">
          {contactValues.map((card) => (
            <Link
              to={card.refLink}
              key={card.name}
              className="flex items-center gap-1 "
            >
              <motion.span
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", duration: 1, stiffness: 40 },
                  opacity: { duration: 2 },
                  ease: "easeInOut",
                }}
                viewport={{ once: true }}
                className="text-[1.6rem] p-4 rounded-full text-[var(--secondary-color)] bg-[var(--primary-color)]"
              >
                {card.icon}
              </motion.span>
              <div className="text-[1.5rem] font-[600]">
                <motion.h2
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", duration: 1, stiffness: 40 },
                    opacity: { duration: 2 },
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className=""
                >
                  {card.name}
                </motion.h2>
                <motion.p
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", duration: 1, stiffness: 40 },
                    opacity: { duration: 2 },
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="text-[1.1rem] font-[300]"
                >
                  {card.value}
                </motion.p>
              </div>
            </Link>
          ))}
        </div>
        <form className="get-in-touch md:w-[50%] flex flex-col gap-3">
          {formInputs.map((formInput) => (
            <input
              type={formInput.type}
              key={formInput.title}
              placeholder={formInput.placeholder}
              required
              className="px-3 py-3 rounded-md border border-[#8888884e] min-h-[2.4rem] capitalize bg-white text-[#242424] placeholder:text-[#6c6c6c] focus:outline-none focus:border-[var(--primary-color)] ease-in duration-300"
            />
          ))}
          <textarea
            name=""
            className="px-3 py-3 rounded-md border border-[#8888884e] min-h-[12rem] capitalize bg-white text-[#242424] placeholder:text-[#6c6c6c] focus:outline-none"
            placeholder="message"
            required
          ></textarea>
          <button
            type="submit "
            className="bg-[var(--primary-color)] px-3 py-3 uppercase text-white font-[700] text-[1.1rem] rounded-sm border border-[var(--primary-color)] hover:bg-transparent hover:text-[var(--primary-color)] ease-in duration-300"
          >
            submit
          </button>
        </form>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.089405842192!2d-0.32081232566102424!3d5.553763833673537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdfbdf3d2cd56d5%3A0x288d247b8da7f24b!2sMystery%20Embassy%20International!5e0!3m2!1sen!2sgh!4v1749173993366!5m2!1sen!2sgh"
        className="w-full min-h-[70vh]"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Contact;
