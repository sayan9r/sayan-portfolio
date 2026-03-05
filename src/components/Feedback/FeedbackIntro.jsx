import React from "react";
import feedbackImg from "../../assets/feedback.png";
import { useNavigate } from "react-router-dom";

function FeedbackIntro() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-950 text-white flex items-center justify-center px-4 sm:px-6 md:px-16 py-16 w-full">

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center md:justify-between gap-10">

        {/* IMAGE */}
        <div className="flex justify-center w-full md:w-1/2">
          <img
            src={feedbackImg}
            alt="feedback"
            className="w-60 sm:w-72 md:w-96 rounded-xl shadow-lg"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 w-full md:w-1/2">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 leading-tight">
            Help me to get better <br />
            <span className="text-white">with your feedback</span>
          </h1>

          <p className="text-gray-400 max-w-md text-base md:text-lg">
            Your thoughts and suggestions truly matter.
            Every feedback helps me improve my work and build better experiences.
          </p>

          <button
            onClick={() => navigate("/feedback")}
            className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold text-black shadow-lg transition"
          >
            Give Feedback 🚀
          </button>

        </div>

      </div>
    </div>
  );
}

export default FeedbackIntro;