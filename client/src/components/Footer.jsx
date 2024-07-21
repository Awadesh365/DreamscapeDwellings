import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between px-4">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">
            Dreamscape<span className="text-yellow-300">Dwellings</span>
          </h3>
          <p className="text-sm"></p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">Explore</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <Link to="/">
                <a onClick={scrollToTop}>Home</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/search">
                <a onClick={scrollToTop}>Search</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold">Connect</h3>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="mailto:36awadesh">Email us</a>
            </li>
            <li className="mb-2">
              <a href="tel:(+91) 9058261129">Call us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
