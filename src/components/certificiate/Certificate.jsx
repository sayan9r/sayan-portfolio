import React from 'react';
import webdevImg from "../../assets/web_dev.png"
import javaINg from "../../assets/java.png"
import posterImg from "../../assets/poster.png"
import comingsoonImg from "../../assets/comingsoon.png"


function Certificate() {
  const projects = [
    { 
      title: "Web Development",
      desc: "The Complete Full-stack Web Devlopment Bootcamp  . Instructor - Dr. Angela Yu.  ",
      img: webdevImg, 
      link: "https://drive.google.com/file/d/1Qgc519ZvaEg_YNFfCPMbK2X1NgisLJwP/view" 
    },
     { 
      title: "Poster Compition",
      desc: "1st position in the poster compition organized by Dept. of CSE , NIT Association with IE(I).",
      img: posterImg, 
      link: "https://drive.google.com/file/d/132ZHMyDqt5cyrIcpqaTAyEvQ6wSb4J4B/view" 
    },
    { 
      title: "Programming In Java",
      desc: "Issued by IIT Kharagpur (NPTL ONLINE CERTIFICATION) . Elite + Gold [90%]",
      img: javaINg, 
      link: "https://drive.google.com/file/d/1iVjQE9nfxeCIwj5939gKgyN4iupednFc/view" 
    },
    { 
      title: "JIS-IDEAJAM",
      desc: "IoT-based system designed to enhance tourist safety using sensors.",
      img: comingsoonImg, 
      link: "#" 
    },
    { 
      title: "SIH INTERNAL",
      desc: "Simple step forward scheduling for patient managment based on Data & Time.",
      img: comingsoonImg, 
      link: "#" 
    },
    { 
      title: "E-Commerce Beta",
      desc: "Full-stack e-commerce platform with cart, payments, and admin panel.",
      img: comingsoonImg, 
      link: "#" 
    },
  ];

  return (
    <>
   
    <div className="min-h-screen w-full bg-gradient-to-t from-gray-950 via-[#FF4500] to-gray-950 p-8 md:p-16">
      
      <h2 className="text-4xl font-black text-white mb-16 text-center tracking-widest uppercase italic">
        Featured <span className="text-[#FF4500]">Certifications</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
           <a
    key={index}
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex flex-col group bg-gray-900 border border-white/5 rounded-3xl overflow-hidden 
    transition-all duration-500 hover:border-[#FF4500]/50 hover:shadow-[0_20px_50px_rgba(255,69,0,0.15)]
    cursor-pointer
    ${index === 6 ? "md:col-start-2" : ""}`}
  >
            {/* 1. IMAGE SECTION */}
            <div className="relative h-52 w-full overflow-hidden bg-black">
              <img 
                src={project.img} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40" />
            </div>

            {/* 2. CONTENT SECTION */}
            <div className="p-5 flex flex-col  bg-gradient-to-b from-gray-900 to-black">
              {/* Heading */}
              <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#FF4500] transition-colors">
                {project.title}
              </h3>

              {/* Decorative Divider */}
              <div className="w-10 h-[2px] bg-[#FF4500] my-3 group-hover:w-full transition-all duration-500" />

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                {project.desc}
              </p>

              {/* 3. LINK SECTION (Footer) */}
              {/* <div className="mt-auto">
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-2 px-4 rounded-full border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:bg-[#FF4500] hover:border-[#FF4500] transition-all duration-300"
                >
                  View Live
                  <svg 
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform" 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div> */}
            </div>
          </a>
        ))}
      </div>
    </div>
    </>
  );
}



export default Certificate;