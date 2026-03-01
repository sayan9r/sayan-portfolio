import React from "react";
import helloImg from "../../assets/hello.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-start px-6 md:px-25 py-16">

      {/* Main Contact Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT SECTION */}
        <div className="flex flex-col gap-6 flex-1">

          {/* Heading */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-orange-500">
              Contact Me ⚡
            </h1>

            {/* Added sentence */}
            <p className="text-gray-400 mt-3 text-sm md:text-base max-w-md">
              Have any question or want to work together? I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-lg mt-4">

            <div className="flex items-center gap-4">
              <FaPhone className="text-orange-500 text-xl" />
              <span>+91 74072 64892</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-orange-500 text-xl" />
              <span>sayan18082005@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-orange-500 text-xl" />
              <span>Kolkata, West Bengal, India</span>
            </div>

          </div>

        </div>

        {/* RIGHT SECTION IMAGE */}
        {/* <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={helloImg}
            alt="hello"
            className="w-64 md:w-80 rounded-xl   hover:scale-105 transition duration-300"
          />
        </div> */}

      </div>

      {/* SOCIAL SECTION */}
      <div className="w-full max-w-6xl mt-16 border-t border-gray-800 pt-8">

        <h2 className="text-2xl font-semibold text-orange-500 mb-6">
          Connect with me 🚀
        </h2>

        <div className="flex flex-wrap gap-6">

          <a
            href="https://github.com/sayan9r"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-gray-900 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-black transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sayan-sahoo-102b44343/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-gray-900 px-6 py-3 rounded-lg hover:bg-orange-500 hover:text-black transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>

    </div>
  );
}

export default Contact;