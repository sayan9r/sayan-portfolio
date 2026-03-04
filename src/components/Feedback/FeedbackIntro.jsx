import React from "react";
import feedbackImg from "../../assets/feedback.png";
import { useNavigate } from "react-router-dom";

function FeedbackIntro() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-950 text-white flex items-center px-6 md:px-16 py-16 ml-35 pt-5">

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT SECTION IMAGE */}
        <div className="flex-1 flex justify-center md:justify-start">
          <img
            src={feedbackImg}
            alt="feedback"
            className="w-72 md:w-96 rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* RIGHT SECTION TEXT */}
        <div className="flex-1 flex flex-col gap-6">

          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 leading-tight">
            Help me to get better <br />
            <span className="text-white">with your feedback</span>
          </h1>

          <p className="text-gray-400 max-w-md text-base md:text-lg">
            Your thoughts and suggestions truly matter. 
            Every feedback helps me improve my work and build better experiences.
          </p>

          <button
            onClick={() => navigate("/feedback")}
            className="w-fit bg-orange-500 hover:bg-orange-600 transition px-8 py-3 rounded-lg font-semibold text-black shadow-lg hover:scale-105 duration-300"
          >
            Give Feedback 🚀
          </button>

        </div>

      </div>

    </div>
  );
}

export default FeedbackIntro;