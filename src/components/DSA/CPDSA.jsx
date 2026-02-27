import React from "react";
import { Button } from "@heroui/react";

function CPDSA() {

  const profiles = [
    {
      name: "LeetCode",
      username: "your_leetcode_id",
      link: "https://leetcode.com/your_leetcode_id",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg",
    },
    {
      name: "GeeksforGeeks",
      username: "your_gfg_id",
      link: "https://www.geeksforgeeks.org/user/your_gfg_id",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/geeksforgeeks.svg",
    },
    {
      name: "HackerRank",
      username: "your_hackerrank_id",
      link: "https://www.hackerrank.com/your_hackerrank_id",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/hackerrank.svg",
    },
    {
      name: "Codeforces",
      username: "your_codeforces_id",
      link: "https://codeforces.com/profile/your_codeforces_id",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codeforces.svg",
    },
    {
      name: "CodeChef",
      username: "your_codechef_id",
      link: "#",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codechef.svg",
    },
    {
      name: "AtCoder",
      username: "your_atcoder_id",
      link: "#",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/atcoder.svg",
    },
    {
      name: "InterviewBit",
      username: "your_interviewbit_id",
      link: "#",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/interviewbit.svg",
    },
    {
      name: "Spoj",
      username: "your_spoj_id",
      link: "#",
      logo: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/spoj.svg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white py-16">

      {/* Heading */}
      <h1 className="text-center text-4xl md:text-5xl font-black mb-16">
        My <span className="text-[#FF4500]">CP & DSA Profiles</span>
      </h1>

      {/* Container */}
      <div className="w-[85%] mx-auto ">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

  {profiles.map((profile) => (

    /* Outer Wrapper Div */
    <div
      key={profile.name}
      className="w-full h-full flex"
    >

      {/* Inner Card Div */}
      <div className="w-full bg-gray-900 border border-[#FF4500]/20 hover:border-[#FF4500] rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF4500]/10 text-center">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="bg-gray-950 p-3 rounded-full border border-gray-800">
            <img
              src={profile.logo}
              alt={profile.name}
              className="w-8 h-8 invert"
            />
          </div>
        </div>

        {/* Platform Name */}
        <h2 className="text-xl font-bold text-[#FF4500] mb-1">
          {profile.name}
        </h2>

        {/* Username */}
        <p className="text-gray-400 mb-4 break-all text-sm">
          {profile.username}
        </p>

        {/* Button */}
        <Button
          asChild
          className="w-full border border-[#FF4500] text-white hover:bg-[#FF4500] transition-all font-semibold"
        >
          <a
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </Button>

      </div>

    </div>

  ))}

</div>

      </div>

    </div>
  );
}

export default CPDSA;