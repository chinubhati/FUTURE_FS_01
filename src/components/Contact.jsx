import React from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error.text);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-600 dark:text-blue-400">
          Contact Me
        </h2>

        {/*Contact Form */}
        <form
          onSubmit={sendEmail}
          className="bg-white/80 dark:bg-gray-800/50 rounded-2xl shadow-md p-8 border border-gray-200 dark:border-gray-700 backdrop-blur-sm space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Your Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Details */}
        <div className="mt-10 bg-white/10 rounded-2xl py-6 px-4 backdrop-blur-sm inline-block border border-white/20 shadow-lg">
          <p className="text-lg">
            📞 <a href="tel:+919818322392" className="text-blue-400 hover:underline">+91 9818322392</a>
          </p>
          <p className="text-lg">
            ✉️ <a href="mailto:chinubhati07@gmail.com" className="text-blue-400 hover:underline">chinubhati07@gmail.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

