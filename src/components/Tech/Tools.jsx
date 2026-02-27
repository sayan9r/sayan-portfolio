import React from "react";
import { Button } from "@heroui/react";

function Tools() {
  const techStack = {
    Languages: ["C", "C++", "JavaScript", "Python"],
    Frontend: ["React", "EJS","Next.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "Socket.io"],
    Database: ["SQL","PostgreSQL", "Neon"],
    Tools: ["GitHub","REST APIs", "Postman", "Vercel","Render"],
  };

  const buttonStyle =
    "border border-[#FF4500]/60 text-white bg-transparent rounded-lg font-semibold hover:bg-[#FF4500] hover:text-white hover:scale-105 transition-all duration-300 px-5 py-2 text-sm md:text-base";

  return (
    <div className="min-h-screen w-full bg-gray-950 px-6 py-16 md:px-20">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-wide">
          My <span className="text-[#FF4500]">Tech Stack</span> & Tools
        </h2>
        <p className="text-gray-400 mt-4 text-sm md:text-base">
          Technologies I use to design, build, and deploy scalable applications
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-12 max-w-5xl mx-auto">

        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>

            {/* Category Title */}
            <h3 className="text-xl md:text-2xl font-bold text-[#FF4500] mb-4">
              {category}
            </h3>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              {items.map((item) => (
                <Button
                  key={item}
                  variant="outline"
                  className={buttonStyle}
                >
                  {item}
                </Button>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Tools;