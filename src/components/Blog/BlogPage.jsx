import React from "react";

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
        "First time on the final Round of a hackathon [JIS_IDEAJAM 2025].Built a crop prediction system both software & hardware . ",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
      date: "28/02/2025",
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