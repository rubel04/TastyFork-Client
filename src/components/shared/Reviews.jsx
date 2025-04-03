import Button_Primary from "./Button_Primary";

const ContactSection = () => {
  return (
    <div className="w-full bg-gray-100 py-8 md:py-16 px-4">
      <div className="md:w-11/12 mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-2 md:p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Location
          </h2>
          <iframe
            className="w-full h-64 md:h-96 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9011655226215!2d90.38542047535533!3d23.750883378689853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf5d3f0dc6e9%3A0x9a43f632aeb2a5b5!2sStarbucks%20Coffee!5e0!3m2!1sen!2sbd!4v1711681012345"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-2">
            <strong>Phone:</strong> +880 1234-567890
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Email:</strong> contact@tastyfork.com
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Address:</strong> 123, Dhanmondi, Dhaka
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-400 rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-400 rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 md:py-6 border border-gray-400 rounded"
              rows=""
              required
            ></textarea>
            <Button_Primary text="Send Message"></Button_Primary>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
