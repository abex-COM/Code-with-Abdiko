import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const serviceID = "service_pylyirq";
  const templateID = "template_3uj2dvg";
  const userID = "5afh7B0IcHLdFAYRK"; // This is your public key

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!contactData.name || !contactData.email || !contactData.message) {
      setMessage("Please fill in all fields.");
      return;
    }

    setIsLoading(true);

    emailjs.send(serviceID, templateID, contactData, userID).then(
      () => {
        setContactData({ name: "", email: "", message: "" });
        setMessage(" Message sent successfully!");
        setIsLoading(false);

        setTimeout(() => {
          setMessage("");
        }, 3000);
      },
      (error) => {
        setMessage("❌ Failed to send message. Please try again.");
        console.error("EmailJS error:", error.text);
        setIsLoading(false);
      }
    );
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setContactData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div id="contact" className="container py-10 px-4 sm:px-6 lg:px-8 bg-base-100 flex flex-col items-center w-full justify-center">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Contact Us
      </h2>
      <div className="max-w-xl mx-auto bg-base-200 p-8 rounded-xl shadow-xl space-y-6 w-full  ">
        <form className="flex flex-col  w-full" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="form-control mb-4 grid  ">
            <label className="label" htmlFor="name">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              id="name"
              name="name"
              value={contactData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-control mb-4 grid ">
            <label className="label" htmlFor="email">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={contactData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Message Field */}
          <div className="form-control mb-6 grid">
            <label className="label" htmlFor="message">
              <span className="label-text">Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={contactData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="textarea textarea-bordered resize-none w-full"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-4 grid">
            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="loading loading-spinner loading-md text-white"></span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>

        {/* Status Message */}
        {message && (
          <p className="mt-4 text-center text-sm  font-medium">{message}</p>
        )}
      </div>
      <p className="text-sm text-center mt-4">
        Feel free to reach out for any inquiries or collaborations!
      </p>
      <p className="text-sm text-center mt-2">
        You can also download my CV for more details.
      </p>
      <a
        href="/PDF/cv.pdf"
        target="_blank"
        className="btn btn-secondary mt-4 rounded-md"
        download="cv.pdf"
      >
        Download
      </a>

    </div>
  );
}
