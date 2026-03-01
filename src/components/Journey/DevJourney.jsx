import React from 'react';

const DevJourney = () => {

  const experiences = [
      {
      year: "2024",
      title: "Frontend Foundations",
      company: "Learning Phase",
      desc: "Mastered responsive design, CSS architecture, and modern JavaScript.",
      tags: ["HTML", "CSS3", "JS"]
    },
    {
      year: "2024",
      title: "Backend Foundations",
      company: "APi connection",
      desc: "Established connection building web site with both frontend & Backend , along with APIs and databse connection .",
      tags: ["API","Express","Node.js", "Database","postman"]
    },
      {
      year: "2025",
      title: "Full Stack Developer",
      company: "PERN stack",
      desc: "Putting frontend and backend together in full-stack projects gave me the confidence to build complete, real-world applications from scratch .",
      tags: ["Auth","vercel"]
    },
    {
      year: "2026",
      title: " Portfolio & GroundMate",
      company: "Independent Projects",
      desc: "Architecting real-time sports management systems and high-performance React portfolios with a focus on robotic UI aesthetics And deploy them on prodection.",
      tags: ["Render", "Neon", "Socket.io"]
    },
  
    
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-mono px-4 sm:px-6 md:px-16 py-12 md:py-20 relative overflow-hidden">

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/4 w-60 md:w-96 h-60 md:h-96 bg-[#FF4500]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-60 md:w-96 h-60 md:h-96 bg-[#FF4500]/5 rounded-full blur-[120px]" />

      {/* Heading */}
      <div className="relative mb-12 md:mb-20 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic tracking-tight">
          DEV <span className="text-[#FF4500] drop-shadow-[0_0_12px_rgba(255,69,0,0.6)]">JOURNEY</span>
        </h2>

        <p className="text-gray-500 mt-3 uppercase tracking-[0.2em] text-xs md:text-sm">
          Experience / Timeline / Evolution
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Vertical line */}
        <div className="absolute left-3 sm:left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#FF4500] via-gray-700 to-transparent" />

        {experiences.map((item, index) => (

          <div
            key={index}
            className={`relative flex flex-col md:flex-row mb-10 md:mb-16 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* Year diamond */}
            <div className="absolute left-0 sm:left-1 md:left-1/2 md:-translate-x-1/2 flex justify-center">

              <div className="w-8 h-8 md:w-14 md:h-14 bg-gray-950 border-2 border-[#FF4500] rotate-45 flex items-center justify-center shadow-[0_0_12px_rgba(255,69,0,0.5)]">

                <span className="rotate-[-45deg] text-[9px] md:text-xs font-bold">
                  {item.year}
                </span>

              </div>

            </div>

            {/* Card */}
            <div className="ml-10 sm:ml-12 md:ml-0 md:w-[45%] group">

              <div className="bg-gray-900/60 border border-white/10 p-4 md:p-6 rounded-sm transition-all duration-300 hover:border-[#FF4500]/50 hover:bg-gray-900 relative">

                {/* Accent dot */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Year */}
                <span className="text-[#FF4500] font-bold text-sm md:text-lg block mb-1">
                  {item.year}
                </span>

                {/* Title */}
                <h3 className="text-base md:text-xl font-black uppercase group-hover:tracking-wide transition-all">
                  {item.title}
                </h3>

                {/* Company */}
                <p className="text-gray-500 text-xs mb-2 md:mb-4">
                  {item.company}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">

                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9px] md:text-[12px] px-3 py-1 bg-white/5 border border-orange-600 text-gray-400 hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default DevJourney;