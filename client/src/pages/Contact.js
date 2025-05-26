import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-slate-500 via-sky-400 to-teal-400
 p-8 rounded-lg shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you. Reach out to us with any queries, feedback, or collaborations.
            </p>

            <div className="space-y-4 text-gray-700">
              <div>
                <strong>Address:</strong>
                <p>123 Fashion Street, Style City, NY 10001</p>
              </div>
              <div>
                <strong>Phone:</strong>
                <p>+1 (555) 123-4567</p>
              </div>
              <div>
                <strong>Email:</strong>
                <p>support@thinkfashion.com</p>
              </div>
              <div>
                <strong>Hours:</strong>
                <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Send a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white font-semibold py-3 px-6 rounded hover:bg-purple-700 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
