import { Link } from "react-router-dom";

const Button = ({ children, refLink, btStyle }) => {
  return (
    <Link
      to={refLink}
      className={` rounded-sm px-5 py-2 uppercase font-semibold hover:-translate-y-2 ease-in duration-200 text-white ${btStyle}`}
    >
      {children}
    </Link>
  );
};

export default Button;
