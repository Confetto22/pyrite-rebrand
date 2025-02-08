import { Link } from "react-router-dom";
import SecHeading from "./common/SecHeading";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const services = [
  {
    name: "movie production",
    icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1738939584/pyrite/icon_1_dsy9vb.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgImg:
      "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1720833104/pyrite/pyritePic11_ye2hz7.jpg')]",
  },
  {
    name: "movie Directing",
    icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1738939584/pyrite/icon_3_t82um7.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgImg:
      "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1738943916/pyrite/modern-steadicam-against-videographer-and-his-assi-73CZ95V_pb2fcu.jpg')]",
  },
  {
    name: "High Quality Work",
    icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1738939584/pyrite/icon_6_elktw4.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgImg:
      "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1719673403/pyrite/pexels-ron-lach-8088386_viwstf.webp')]",
  },
  {
    name: "Sound Effects",
    icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1738939584/pyrite/icon_2_sdx5pn.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgImg:
      "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722248578/pyrite/Asset3_hbi2ah.jpg')]",
  },
  {
    name: "Live Streaming",
    icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1738939584/pyrite/icon_4_vmrzp7.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgImg:
      "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1719609865/pyrite/close-up-of-steadicam-screens-with-female-model-using-laptop-by-table-min_y04dup.webp')]",
  },
  {
    name: "Video Converting",
    icon: "https://res.cloudinary.com/dv9aqxptd/image/upload/v1738939584/pyrite/icon_5_ucidgb.png",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.",
    bgImg:
      "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1719609864/pyrite/man-editing-video-min_t03zeu.webp')]",
  },
];

const OurServices = () => {
  return (
    <section className="our_services flex flex-col gap-8 p-4 py-24">
      <SecHeading
        title={"services"}
        titleStyle={""}
        heading={"our services"}
        headingStyle={"md:text-[3rem] max-w-[500px]  lg:text-[4rem]"}
        divStyle={" items-center text-center"}
        newDivStyle={"justify-center "}
      />
      <div className="allServices grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
        {services.map((service) => (
          <div
            key={service.name}
            className={`service ease-in duration-300   bg-center bg-cover ${service.bgImg} max-w-[400px]  `}
          >
            <div className="black_cover hover:bg-transparent ease-in duration-300 bg-[#000] w-full h-full">
              <div className="w-full h-full bg-[#000000b3] px-8 py-10 flex flex-col items-start gap-4">
                <img
                  src={service.icon}
                  alt="movie production"
                  className="max-w-[80px]"
                />
                <h2 className="text-white capitalize md:text-[1.7rem] font-bold">
                  {service.name}
                </h2>
                <p className="text-[var(--secondary-color)]">{service.desc}</p>
                <Link
                  to={"#"}
                  className="text-[var(--secondary-color)] flex items-center gap-1 uppercase  ease-in duration-200 hover:text-[#E3F81F]"
                >
                  <HiMiniArrowLongRight /> read more
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
