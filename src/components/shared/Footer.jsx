import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-amber-100 text-base-content">
      <footer className="footer sm:footer-horizontal md:w-10/12 mx-auto p-10">
        <aside>
          <img className="w-16 object-cover" src="/logo.png" alt="" />
          <p className="text-gray-600">
            <span className="text-5xl font-medium font-birthstone">TastyFork</span>
            <br />
            Taste the Magic, One Fork at a Time.
          </p>
        </aside>
        <nav>
          <h6 className="text-xl text-black font-medium">Services</h6>
          <a className="link link-hover text-base text-gray-600">Products</a>
          <a className="link link-hover text-base text-gray-600">News</a>
          <a className="link link-hover text-base text-gray-600">Contact Us</a>
        </nav>
        <nav>
          <h6 className="text-xl text-black font-medium">Legal</h6>
          <a className="link link-hover text-base text-gray-600">
            Terms of use
          </a>
          <a className="link link-hover text-base text-gray-600">
            Privacy policy
          </a>
          <a className="link link-hover text-base text-gray-600">
            Cookie policy
          </a>
        </nav>
        <nav>
          <h6 className="text-xl text-black font-medium">Social Links</h6>
          <div className="flex gap-3 text-2xl">
            <a
              href="https://www.facebook.com/tastyfork"
              className="text-2xl text-blue-500 hover:text-blue-600 transition cursor-pointer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/tastyfork"
              className="text-2xl text-[#d62976] hover:text-[#962fbf] transition cursor-pointer"
            >
              <FaInstagramSquare />
            </a>
            <a
              href="https://x.com/tastyfork"
              className="text-2xl text-blue-500 hover:text-blue-600 transition cursor-pointer"
            >
              <FaTwitter />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
