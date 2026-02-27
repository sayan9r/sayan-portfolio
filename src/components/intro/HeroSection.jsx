import React from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    // Changed h-[40vh] to min-h-[50vh] to prevent cutting off content on mobile
    <>
      <section className="h-auto md:h-[50vh] w-full flex flex-col md:flex-row bg-transparent items-center overflow-visible py-10 md:py-0">
        {/* 1st Div: Intro (50% Width) */}
        {/* Removed fixed pl-25/pt-20 for mobile, applied them only to md screens */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start px-6 md:pl-24 md:pt-10 gap-6 text-center md:text-left">
          <div className="text-white space-y-1">
            <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter">
              Hello.
            </h1>
            <p className="text-lg md:text-xl font-light font-mono tracking-wide opacity-90 pt-2">
              ----I'm Sayan,
            </p>
            <br className="hidden md:block" />
            <h1 className="text-3xl md:text-4xl font-black font-mono tracking-[0.05em] uppercase [word-spacing:-0.15em]">
              Software Developer
            </h1>
            <p className="text-sm md:text-base text-gray-400 font-mono tracking-wide mt-4">
              Building scalable web experiences & intelligent systems with clean
              code and creative design.
            </p>
          </div>

          {/* Buttons Row */}
          <div className="flex flex-row gap-4 mt-2">
            <Button
              className="border-2 border-[#FF4500] text-white bg-transparent rounded-none font-bold hover:bg-[#FF4500] transition-all px-4 md:px-6"
              variant="outline"
              onClick={() => navigate("/projects")}
            >
              GET PROJECT
            </Button>
            <Button
              className="border-2 border-[#FF4500] text-white bg-transparent rounded-none font-bold hover:bg-[#FF4500] transition-all px-4 md:px-6"
              variant="outline"
            >
              <a
                href="https://drive.google.com/file/d/13vk5DULQeQ7E2XtHhgojoXFTcgHmAsV4/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
          </div>
        </div>

        {/* 2nd Div: Circular Hero Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start relative">
          <div
            className="relative 
                     flex items-center justify-center
                     /* Desktop Adjustments: Pushing Right and Down */
                     md:ml-48 
                     md:mt-50
                     /* Mobile Adjustment: Small top margin to separate from text */
                     mt-16"
          >
            {/* Glowing Outer Circle */}
            <div
              className="absolute 
                       w-72 h-72 
                       md:w-[450px] md:h-[450px] 
                       rounded-full 
                       bg-[#FF4500]/15 
                       blur-3xl"
            ></div>

            {/* Image Wrapper */}
            <div
              className="relative 
                       w-64 h-64 
                       md:w-96 md:h-96 
                       rounded-full 
                       border-[6px] border-[#FF4500] 
                       shadow-[0_0_80px_rgba(255,69,0,0.6)] 
                       overflow-hidden"
            >
              <img
                src="/bg_image.png"
                alt="Sayan Sahoo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Optional: Robotic accents for the circle */}
            <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-[#FF4500] md:hidden"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-[#FF4500] md:hidden"></div>
          </div>
        </div>
      </section>

      <div className="bg-gray-900 w-full h-24 mt-15 relative ">
        <div className="whitespace-nowrap animate-marquee text-gray-800 font-semibold tracking-widest text-sm md:text-base">
          <div className="absolute flex items-center h-full animate-scroll whitespace-nowrap text-gray-400 font-semibold tracking-widest text-sm md:text-base">
              
                          
              {/*   the gap section*/ }
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
