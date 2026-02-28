import React from "react";
import ideajamImg from "../../assets/ideajam.png"
import ideajamFinalImg from "../../assets/ideajamFinal.png"
import kritanj25Img from "../../assets/kritanj25.png"
import poster_prizeIMg from "../../assets/poster_prize.png"

function BlogPage() {

  const posts = [
     {
      id: 1,
      title: "Admission ",
      content:
        "Take admission on Narula Institute of Technology through WBJEE rank.",
      image: null,
      date: "02/08/2025",
    },
     {
      id: 2,
      title: "SIH 2024 ",
      content:
        "First perticipating on internal hackathon on college.Unfortunately we unable to submit due to the full slot of problem statemant.",
      image: null,
      date: "23/09/2024",
    },
    {
      id: 3,
      title: "Started My Full Stack Journey 🚀",
      content:
        "Today I officially started my full stack development journey on Udemy. I'm focusing on React, Node.js, and building real-world scalable applications.",
      image: null,
      date: "18/8/2024",
    },
    {
      id: 4,
      title: "JIS - IdeJam",
      content:
        "First time on the final Round of a hackathon [JIS_IDEAJAM 2025] was an incredible experience where I built a Crop Prediction system using AI, combining both software and hardware components. 🌱💻 I worked with real sensor data and intelligent models to predict crop outcomes. Reaching the final round made the journey even more rewarding and boosted my confidence as a developer. ",
      image: ideajamImg,
      date: "28/02/2025",
    },
    {
      id: 5,
      title: "JIS - IdeJam",
      content:
        "Standing at the Dhonno Dhanno Auditorium during the final prize distribution ceremony of my first hackathon was a surreal moment. Presenting my AI-based Crop Prediction project, built with both hardware sensors and software intelligence, felt incredibly rewarding. Being in the presence of inspiring personalities like Aman Gupta, Rajashri Nag, and Manish Pandey made the experience even more memorable. Reaching the final round marked a proud milestone in my journey of building impactful technology. 🚀🌱 ",
      image: ideajamFinalImg,
      date: "11/03/2025",
    },
    {
      id: 6,
      title: "KRITANJ'25",
      content:
        "At my college tech fest, I actively participated in multiple hackathons, coding competitions, and fun games, making it an exciting and memorable experience. 💻🎉 Under the leadership of my friend Arban Bhattacharya, our team secured 7th position in the “Code It Duo” competition, which was a proud and motivating achievement. 🏆 We also won stickers and badges, making the experience even more special. This fest strengthened my teamwork, problem-solving skills, and passion for coding. 🚀. ",
      image: kritanj25Img,
      date: "21/03/2025",
    },
    {
      id: 7,
      title: "POSTER PRESENTSTION",
      content:
        "secured the 1st position in the Poster Competition organized by the CSE Department under IE(I) during the Engineering Day Celebrations at my college.My poster was on ‘Floating Solar’, highlighting its potential in advancing sustainable and space-efficient renewable energy solutions with much benifits and economical impacts.My postar also have a soft copy that I have attached with the QR code on the poster Grateful for this recognition and the opportunity to contribute to meaningful discussions on innovation and sustainability. 🔗: https://lnkd.in/eES6pEtq ",
      image: poster_prizeIMg,
      date: "12/09/2025",
    },
      
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black">
          My <span className="text-[#FF4500]">Blog</span>
        </h1>
        <p className="text-gray-400 mt-3">
          Sharing my development journey, learnings, and experiences ✨
        </p>
      </div>

      {/* Blog Container */}
      <div className="w-[95%] md:w-[80%] mx-auto space-y-8">

        {[...posts].reverse().map((post) => (

          <div
            key={post.id}
            className="bg-gray-900 border border-[#FF4500]/20 hover:border-[#FF4500]/60 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF4500]/10"
          >

            {/* Title */}
            <h2 className="text-2xl font-bold text-[#FF4500] mb-3">
              {post.title}
            </h2>

            {/* Image */}
            {post.image && (
              <img
                src={post.image}
                alt="post"
                className="w-full max-h-[400px] object-cover rounded-lg mb-4 border border-gray-800"
              />
            )}

            {/* Content */}
            <p className="text-gray-300 leading-relaxed">
              {post.content}
            </p>

            {/* Date */}
            <div className="flex justify-end mt-4">
              <span className="text-gray-500 text-sm">
                {post.date}
              </span>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default BlogPage;