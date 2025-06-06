import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import SecHeading from "./SecHeading";

const faqValues = [
  {
    question: "What kind of movies does Jilova Studios produce?",
    answer:
      "Jilova Studios produces a wide range of films, including dramas, comedies, documentaries, and more. We're passionate about telling unique and compelling stories that resonate with audiences.",
  },
  {
    question: " How can I submit my script or idea to Jilova Studios?",
    answer:
      "We'd love to hear from you! You can submit your script or idea through our online submission form on our website. Our team reviews all submissions carefully, and we'll be in touch if we're interested in learning more.",
  },
  {
    question:
      "What is the typical production process like for a Jilova Studios film?",
    answer:
      "Our production process typically involves several stages, including development, pre-production, production, and post-production. We work closely with our writers, directors, and producers to bring each project to life.",
  },
  {
    question: "Can I purchase or stream Jilova Studios films online?",
    answer:
      "Yes! Many of our films are available to stream or purchase on popular platforms like Amazon Prime, Apple TV, and Google Play. You can also find our films on our website, where we often feature trailers and clips",
  },
  {
    question:
      "How can I stay up-to-date on Jilova Studios' latest projects and news?",
    answer:
      "We'd love for you to join our community! You can follow us on social media via the links below or sign up for our newsletter on our website to stay up-to-date on our latest projects, news, and behind-the-scenes insights",
    links: [
      {
        ref: "Youtube",
        refLink: "#",
      },
      {
        ref: "tiktok",
        refLink: "#",
      },
      //   youtube: "",
      //   youtubeLink: "tel:+233244496968",
      //   email: "info@mysteryembassy.com",
      //   emailLink: "mailto:info@mysteryembassy.com",
    ],
  },
];

const Faq = () => {
  return (
    <section className="faq flex flex-col gap-9 md:flex-row-reverse md:items-center md:gap-[3rem] px-7 py-16 md:pr-0">
      <div className="md:w-[50%] overflow-hidden rounded-md">
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1749124929/pyrite/director-service-bg-updated_u3qkxb.jpg"
          alt="pyrite classics"
          className="w-full hover:scale-110 ease-in duration-300 rounded-md"
        />
      </div>
      <div className="accordions max-w-[700px] w-full md:w-[50%]">
        <SecHeading
          title={"faq"}
          titleStyle={" w-full text-left"}
          heading={"Find out the most common questions asked"}
          headingStyle={
            "md:text-[2.2rem] text-black max-w-[500px] md:leading-[2.4rem]"
          }
          divStyle={" items-start text-left"}
          newDivStyle={"justify-center "}
        />
        <Accordion type="single" collapsible className="w-full">
          {faqValues.map((faq, index) => (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionTrigger className=" cursor-pointer font-[500] text-[1.1rem] capitalize text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
                {faq.links && (
                  <div className="mt-2 flex items-center gap-4">
                    {faq.links.map((link) => (
                      <Link
                        to={link.refLink}
                        key={link.ref}
                        className="text-blue-400 capitalize text-[1rem] underline font-[500] hover:text-blue-600 ease-in underline-offset-1 duration-200 hover:underline-offset-4"
                        target="_blank"
                      >
                        {link.ref}
                      </Link>
                    ))}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
