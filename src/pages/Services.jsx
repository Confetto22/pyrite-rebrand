import { Link } from "react-router-dom";
import { services } from "../components/common/allServices";
import PageHead from "../components/common/PageHead";
import { GoArrowUpRight } from "react-icons/go";

const Services = () => {
  // const navigate = useNavigate();
  return (
    <section className="services">
      <PageHead
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1722248959/pyrite/Asset4_rishjn.jpg')]"
        }
        // currProject={'name'}
        currPage={"Services"}
        prevPage={"Home"}
        prevLink={"/"}
      />

      <div className="allServices px-8 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-center">
        {services.map((service) => (
          <Link
            to={`/services/${service.name.replaceAll(" ", "-").toLowerCase()}`}
            key={service.name}
          >
            <div
              className={`cursor-pointer service ease-in duration-300   bg-center bg-cover ${service.bgImg} max-w-[400px] h-full`}
            >
              <div className="black_cover hover:bg-transparent ease-in duration-300 bg-[#000] w-full h-full">
                <div className="w-full h-full bg-[#000000c3] px-8 py-10 flex flex-col items-start gap-4">
                  <img
                    src={service.icon}
                    alt="movie production"
                    className="max-w-[50px] md:max-w-[80px]"
                  />
                  <h2 className="text-white capitalize md:text-[1.4rem] font-bold">
                    {service.name}
                  </h2>
                  <p className="text-[var(--secondary-color)]">
                    {service.desc.slice(0, 83)}...
                  </p>
                  <Link
                    to={`/services/${service.name
                      .replaceAll(" ", "-")
                      .toLowerCase()}`}
                    className="text-[var(--neon)] capitalize flex items-center font-[600] text-[1.2rem]"
                  >
                    read more <GoArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
