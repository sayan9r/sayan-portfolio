import React, { useState } from "react";
import axios from "axios";
import { API_URL, SUBMIT_RESPONE } from "../../api";

function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); // 🔥 new state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError(""); // clear error while typing
  };

  const handleSubmit = async () => {

    // ✅ Validation check
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all the details");
      return; // stop execution
    }

    try {
      setLoading(true);

      await axios.post(
        `${API_URL}${SUBMIT_RESPONE}`,
        formData
      );

      alert("Feedback submitted successfully 🚀");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      console.error(error);
      setError("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex justify-center items-center px-6 py-16">

      <div className="w-full max-w-2xl bg-gray-900 p-10 rounded-xl shadow-lg border border-orange-500">

        <h1 className="text-4xl font-bold text-orange-500 mb-4">
          Feedback ⚡
        </h1>

        <p className="text-gray-400 mb-8">
          Your feedback helps me improve and build better experiences.
        </p>

        <div className="flex flex-col gap-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-800 p-4 rounded-lg focus:outline-none focus:border-orange-500 border border-gray-700"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-800 p-4 rounded-lg focus:outline-none focus:border-orange-500 border border-gray-700"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Write your feedback..."
            value={formData.message}
            onChange={handleChange}
            className="bg-gray-800 p-4 rounded-lg focus:outline-none focus:border-orange-500 border border-gray-700"
          ></textarea>

          {/* 🔴 Error Message */}
          {error && (
            <p className="text-red-500 text-sm font-medium">
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-lg font-semibold text-black"
          >
            {loading ? "Submitting..." : "Submit Feedback 🚀"}
          </button>

        </div>

      </div>

    </div>
  );
}

export default Feedback;