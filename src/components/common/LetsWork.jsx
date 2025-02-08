// import { Link } from "react-router-dom";
import Button from "./Button";

const LetsWork = () => {
  return (
    <section className="lets_work  h-[70vh] relative">
      <video
        src="https://res.cloudinary.com/dv9aqxptd/video/upload/v1738979355/pyrite/y2mate.com_-_INDONESIA_Our_HomeCinematic_Video_v720P_online-video-cutter.com_vgp2au.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="videoBg absolute  h-full w-full object-cover  object-center"
      ></video>
      <div className="cover relative w-full h-full text-white flex flex-col items-center justify-center gap-8 p-5">
        <h3 className="text-[#E3F81F] uppercase tracking-wider text-[1.6rem]">
          let&apos;s work
        </h3>
        <p className="font-bold text-[2.3rem] md:text-[3rem] max-w-[500px] text-center">
          Whatever You&apos;re Into, Get Into Produce
        </p>
        <Button to={"#"}>contact us</Button>
      </div>
    </section>
  );
};

export default LetsWork;
