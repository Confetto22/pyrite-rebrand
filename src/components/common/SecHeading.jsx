import { motion } from "framer-motion";

const SecHeading = ({
  title,
  heading,
  titleStyle,
  headingStyle,
  divStyle,
  newDivStyle,
}) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        delay: 0.2,
        y: { type: "spring", duration: 1, stiffness: 40 },
        opacity: { duration: 2 },
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
      className={`flex flex-col gap-4 ${divStyle}`}
    >
      <div
        className={`flex items-center w-full  gap-4 font-bold uppercase ${newDivStyle}`}
      >
        <hr className="bg-[var(--primary-color)] border-none h-[1px] w-full max-w-[50px]" />
        <h3 className={`text-[var(--primary-color)]  ${titleStyle}`}>
          {title}
        </h3>
      </div>
      <h2
        className={`${headingStyle} text-[2rem] font-bold md:leading-[4rem] leading-10  capitalize `}
      >
        {heading}
      </h2>
    </motion.div>
  );
};

export default SecHeading;
