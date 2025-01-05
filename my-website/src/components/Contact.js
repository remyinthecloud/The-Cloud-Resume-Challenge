import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-b from-white-600 to-white-500 py-24 px-6 text-black text-center"
    >
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="mb-6">Feel free to reach out to discuss projects or collaboration.</p>
      <a
        href="mailto:remy.paul98@proton.me"
        className="inline-block bg-white text-white-600 px-6 py-3 rounded-lg shadow-md hover:bg-white-100"
      >
        Contact Me
      </a>
    </section>
  );
};

export default ContactSection;
