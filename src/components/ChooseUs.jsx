import { motion } from "framer-motion";

const ChooseUs = () => {
  const chooseCards = [
    {
      title: "Expertise in visual storytelling",
      desc: "We craft visual tales that linger in your heart. Choose us for a cinematic experience like no other!",
      icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1719632615/pyrite/cube-notes-stack_54637_brco2g.png",
    },
    {
      title: "Cutting-Edge Technology",
      desc: "We blend the latest tech innovations seamlessly into our productions, ensuring your story shines brighter with every frame.",
      icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1719619297/pyrite/video-camera_8474650_hwicwh.png",
    },
    {
      title: "Diverse Portfolio of Success",
      desc: "Our track record speaks volumes! Our diverse portfolio of success showcases our ability to bring any story to life.",
      icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1719619296/pyrite/film_7547147_qdtiuj.png",
    },
    {
      title: "Creative Collaboration",
      desc: "Our passion for creative collaboration fuels every project we touch. Partner with us to turn your vision into a cinematic masterpiece where teamwork sparks magic on screen!",
      icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1719632615/pyrite/value_12139887_a7fafn.png",
    },
  ];
  return (
    <>
      <section className="chooseUs bg-[var(--bg-color)] py-24 md:flex md:flex-row md:items-center md:justify-between">
        <div className="chooseUs_head bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722247960/pyrite/Asset1_qx7hq2.jpg')] bg-cover bg-center rounded-r-[30%] md:rounded-r-[50%] md:min-h-[80vh] min-h-60vh] md:w-[50%]">
          <div className="chooseUs_cover min-h-[60vh] w-full h-full bg-[#000000ab] p-8 flex flex-col justify-center gap-4 rounded-r-[30%] md:rounded-r-[50%] md:min-h-[80vh]">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", duration: 1, stiffness: 40 },
                opacity: { duration: 2 },
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="subheading_dets flex flex-col gap-4"
            >
              <h3 className="subheading_headtext text-[var(--primary-color)] uppercase text-[1rem] ">
                {" "}
                why choose us{" "}
              </h3>
              <p className="subheading_introtext text-white text-2xl capitalize md:text-4xl md:max-w-[500px]">
                We build a solid foundation to achieve extraordinary
                achievements
              </p>
            </motion.div>
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
              className="text-gray-300"
            >
              We strive for perfection and our main focus is creating the best
              creative plan to help you or your business. That is why we work
              closely with our clients from beginning until end, making sure
              your ideas are in safe and capable hands from concept to delivery.
            </motion.p>
          </div>
        </div>
        <div className="chooseUs_cards md:w-[50%] flex flex-col gap-4 py-8">
          {chooseCards.map((card) => (
            <div
              key={card.title}
              className="chooseUs_card flex flex-row  items-center justify-center gap-4 px-4"
            >
              <div className="chooseCard_imgbox bg-[var(--neon)] p-4 rounded-full">
                <motion.img
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    y: { type: "spring", duration: 1, stiffness: 40 },
                    opacity: { duration: 2 },
                    ease: "easeInOut",
                  }}
                  viewport={{ once: true }}
                  src={card.icon}
                  alt="pyrite classics"
                  className="chooseCard_img max-w-[30px]"
                />
              </div>
              <div className="chooseCard_text w-5/6 flex flex-col gap-1 text-white">
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
                  className="text-[1.4rem] capitalize font-[600]"
                >
                  {card.title}
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
                  className="text-gray-300 text-[1rem]"
                >
                  {" "}
                  {card.desc}{" "}
                </motion.p>
              </div>
            </div>
          ))}

          {/* <div className="chooseUs_card flex flex-row  items-center justify-center gap-4 px-4">
            <div className="chooseCard_imgbox">
              <img
                src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1719619297/pyrite/video-camera_8474650_hwicwh.png"
                alt="pyrite classics"
                className="chooseCard_img"
              />
            </div>
            <div className="chooseCard_text w-5/6 flex flex-col gap-1">
              Cutting-Edge Technology
              <p className="text-gray-300 text-sm">
                {" "}
                We blend the latest tech innovations seamlessly into our
                productions, ensuring your story shines brighter with every
                frame.{" "}
              </p>
            </div>
          </div>
          <div className="chooseUs_card flex flex-row  items-center justify-center gap-4 px-4">
            <div className="chooseCard_imgbox">
              <img
                src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1719619296/pyrite/film_7547147_qdtiuj.png"
                alt="pyrite classics"
                className="chooseCard_img"
              />
            </div>
            <div className="chooseCard_text w-5/6 flex flex-col gap-1">
              Diverse Portfolio of Success
              <p className="text-gray-300 text-sm">
                {" "}
                Our track record speaks volumes! Our diverse portfolio of
                success showcases our ability to bring any story to life.{" "}
              </p>
            </div>
          </div>
          <div className="chooseUs_card flex flex-row  items-center justify-center gap-4 px-4">
            <div className="chooseCard_imgbox">
              <img
                src="https://res.cloudinary.com/dv9aqxptd/image/upload/v1719632615/pyrite/value_12139887_a7fafn.png"
                alt="pyrite classics"
                className="chooseCard_img"
              />
            </div>
            <div className="chooseCard_text w-5/6 flex flex-col gap-1">
              <p className="text-white"> Creative Collaboration </p>
              <p className="text-gray-300 text-sm">
                {" "}
                Our passion for creative collaboration fuels every project we
                touch. Partner with us to turn your vision into a cinematic
                masterpiece where teamwork sparks magic on screen!{" "}
              </p>
            </div> */}
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default ChooseUs;
