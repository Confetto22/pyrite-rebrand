import { motion } from "framer-motion";
import SecHeading from "./common/SecHeading";

const storyValues = [
  {
    title: "The Early Days",
    text: "Our journey started with a simple yet powerful idea: to tell stories that matter. We began working on small projects, honing our craft, and learning from each experience. As we grew, so did our vision, and we became determined to make a lasting impact in the film industry.",
  },
  {
    title: "Milestones and Achievements",
    text: "Throughout our journey, we've achieved numerous milestones and worked on projects that have resonated with audiences worldwide. From critically acclaimed short films to feature-length productions, each project has been a testament to our team's creativity, dedication, and passion.",
  },
  {
    title: "Our Philosophy",
    text: "At Jilova Studios, we believe that storytelling is an art form that has the power to transform lives. We're committed to crafting stories that are authentic, engaging, and memorable. Our philosophy is rooted in collaboration, creativity, and a relentless pursuit of excellence.",
  },
  {
    title: "Looking Ahead",
    text: "As we continue on our journey, we're excited to explore new stories, collaborate with talented individuals, and push the boundaries of cinematic storytelling. Our story is far from over, and we invite you to join us on this exciting journey...",
  },
];

const Story = () => {
  return (
    <section className="ourValue bg- px-8 pt-24 flex flex-col gap-[3rem] ">
      <div className="flex flex-col md:gap-[4rem] md:flex-row items-start md:items-stretch  gap-8">
        <div className="text flex flex-col justify-center  h-full gap-6">
          <SecHeading
            title={"our story"}
            titleStyle={" w-full text-left"}
            heading={"The Journey of Jilova Studios"}
            headingStyle={
              "md:text-[2.2rem] text-black max-w-[500px] md:leading-[2.6rem]"
            }
            divStyle={" items-start text-left"}
            newDivStyle={"justify-center "}
          />
          <p className="text-[1.1rem]">
            our story began with a shared passion for storytelling and a dream
            to create cinematic experiences that captivate and inspire
            audiences. Over the years, we&apos;ve grown into a team of dedicated
            professionals who are committed to bringing exceptional stories to
            life.
          </p>
          <div className="allStories flex flex-col gap-5">
            {storyValues.map((story) => (
              <div key={story.title}>
                <motion.h2
                  initial={{ x: -40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", duration: 1, stiffness: 40 },
                    opacity: { duration: 2 },
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="capitalize font-[700] text-[1.3rem] md:text-[1.6rem] text-[#282828]"
                >
                  {story.title}
                </motion.h2>
                <motion.p
                  initial={{ x: 40, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", duration: 1, stiffness: 40 },
                    opacity: { duration: 2 },
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  className="text-[#767676]"
                >
                  {story.text}
                </motion.p>
              </div>
            ))}
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1719673403/pyrite/pexels-ron-lach-8088386_viwstf.webp"
          alt="pyrite classics"
          className="w-full md:w-[50%] aspect-video object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default Story;
