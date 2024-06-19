import { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    emailjs
      .send(
        "service_1h34ys4",
        "template_jurdpdq",
        {
          to_name: "Hasanal mohamed",
          from_email: email,
          from_name: name,
          to_email: "hextechltd24@gmail.com",
          message: message,
        },
        "vDj2w1aFk3iyuZD08"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div
      id="contact"
      className="bg-white p-4 md:p-8 lg:p-12 xl:p-16 md:w-1/2 mx-auto"
    >
      <h2 className="text-3xl font-semibold mb-4 text-center">Get in Touch</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="mb-4 md:flex">
          <div className="mb-4 md:mr-4 md:w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
            />
          </div>

          <div className="md:w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
        </div>

        <button
          className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline md:w-1/2 mx-auto"
          type="submit"
          style={{ backgroundColor: "#222220" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
