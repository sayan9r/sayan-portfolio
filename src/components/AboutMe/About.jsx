import React from "react";
import { Button } from "@heroui/react";

function AboutDetails() {

  const school_details = [
    {
      label: "School",
      value: "Debipur Milan Vidyapith",
    },
    {
      label: "Course",
      value: "class 5 - Higher secondary education",
    },
    {
      label: "Year",
      value: "2015 – 2023",
    },
  ];
  const college_details = [
    {
      label: "College",
      value: "Narula Institute of Technology",
    },
    {
      label: "Course",
      value: "B.Tech in Computer Science and Engineering",
    },
    {
      label: "Year",
      value: "2023 – 2027",
    },
  ];

//   const links = [
//     {
//       name: "LinkedIn",
//       url: "https://linkedin.com/in/your-linkedin",
//     },
//     {
//       name: "GitHub",
//       url: "https://github.com/your-github",
//     },
//     {
//       name: "X (Twitter)",
//       url: "https://x.com/your-x",
//     },
//     {
//       name: "Profile",
//       url: "/profile",
//     },
//   ];

  return (
    <div className="w-full bg-gray-950 px-6 md:px-16 py-16">

      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-black text-white">
          About <span className="text-[#FF4500]">My Education</span>
        </h2>
      </div>

<div className="w-[95%] mx-auto bg-gray-900 border border-[#FF4500]/20 rounded-2xl p-8 hover:border-[#FF4500]/60 transition-all duration-300">

  {/* College Details */}
  <div className="grid md:grid-cols-3 gap-6 mb-8">

    {school_details.map((item) => (
      <div
        key={item.label}
        className="bg-gray-950 border border-gray-800 hover:border-[#FF4500]/60 rounded-xl p-4 transition-all"
      >
        <p className="text-gray-400 text-sm">
          {item.label}
        </p>

        <p className="text-white font-semibold mt-1">
          {item.value}
        </p>
      </div>
    ))}

    {college_details.map((item) => (
      <div
        key={item.label}
        className="bg-gray-950 border border-gray-800 hover:border-[#FF4500]/60 rounded-xl p-4 transition-all"
      >
        <p className="text-gray-400 text-sm">
          {item.label}
        </p>

        <p className="text-white font-semibold mt-1">
          {item.value}
        </p>
      </div>
    ))}
  </div>

  {/* Social Links */}
  {/* <div>
    <h3 className="text-white font-bold mb-4">
      Connect With Me
    </h3>

    <div className="flex flex-wrap gap-4">

      {links.map((link) => (
        <Button
          key={link.name}
          asChild
          className="border border-[#FF4500] text-white hover:bg-[#FF4500] rounded-lg font-semibold transition-all hover:scale-105"
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        </Button>
      ))}

    </div>

  </div> */}

</div>

    </div>
  );
}

export default AboutDetails;