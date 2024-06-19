const Footer = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-left p-10">
          <div className="mb-4 w-full md:w-1/2 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">HexTech LTD </h3>
            <p className="text-gray-600">
              At <strong>HexTech LTD,</strong> we are dedicated to providing
              top-notch mobile repair services. Our experienced technicians use
              the highest quality parts to ensure your device functions like
              new. We pride ourselves on quick turnaround times, affordable
              pricing, and excellent customer service.
            </p>
          </div>

          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="list-none p-0">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <address>
              <p className="text-gray-600">Email: hextechltd24@gmail.com</p>
              <p className="text-gray-600">Phone: +1 (123) 456-7890</p>

              <p className="text-gray-600">37, Windsor road Hounslow</p>
              {/* eslint-disable-next-line no-irregular-whitespace */}
              <p className="text-gray-600">Tw4 7qj</p>
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
