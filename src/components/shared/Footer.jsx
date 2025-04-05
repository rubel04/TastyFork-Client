const Footer = () => {
  return (
    <div className="bg-amber-100 text-base-content">
      <footer className="footer sm:footer-horizontal md:w-10/12 mx-auto p-10">
        <aside>
          <img className="w-16 object-cover" src="/logo.png" alt="" />
          <p>
            <span className="text-xl font-medium">TastyFork Ltd.</span>
            <br />
            Taste the Magic, One Fork at a Time.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Products</a>
          <a className="link link-hover">News</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
