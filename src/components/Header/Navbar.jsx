"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../ui/resizable-navbar";
//  "@/components/ui/resizable-navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export function NavbarDemo({user,setUser}) {
  const navItems = [
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },  
    {
      name: "Projects",
      link: "/projects",
    },
     {
      name: "Certificate",
      link: "/certificate",
    },
  ];

  const navigate = useNavigate();  // navigate to route the auth login and sign up
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);




  return (
    <div className="relative w-full ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />

       <div className="flex items-center gap-4 relative">

  {/* My Blog Button */}
  <NavbarButton
    variant="primary"
    onClick={() => navigate("/blog")}
  >
    My Blog
  </NavbarButton>
    {/* <NavbarButton
    variant="secondary"
    onClick={() => setIsMoreOpen(!isMoreOpen)}
  >
    |||
    <span className="w-5 h-[2px] bg-white group-hover:bg-[#FF4500] transition-all"></span>
    <span className="w-5 h-[2px] bg-white group-hover:bg-[#FF4500] transition-all"></span>
    <span className="w-5 h-[2px] bg-white group-hover:bg-[#FF4500] transition-all"></span>
  </NavbarButton>

  
  
  
  {isMoreOpen && (
    <div className="absolute right-0 top-12 bg-gray-900 border border-[#FF4500]/30 rounded-lg shadow-lg w-48 py-2 z-50">

      <button
        onClick={() => {
          navigate("/experience");
          setIsMoreOpen(false);
        }}
        className="w-full text-left px-4 py-2  text-white transition"
      >
        Work Experience
      </button>

      <button
        onClick={() => {
          navigate("/journey");
          setIsMoreOpen(false);
        }}
        className="w-full text-left px-4 py-2 text-white transition"
      >
        Journey
      </button>

      <button
        onClick={() => {
          navigate("/more");
          setIsMoreOpen(false);
        }}
        className="w-full text-left px-4 py-2 text-white transition"
      >
        ...
      </button>

    </div>
  )} */}

</div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                onClick={() =>{
                   setIsMobileMenuOpen(false),
                   navigate(item.link)
                }}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              
                <>
              <NavbarButton
                onClick={() => {
                  navigate("/blog"),
                  setIsMobileMenuOpen(false);
                }}
                variant="primary"
                className="w-full">
                My Blog
              </NavbarButton>
                </>
              
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
    </div>
  );
}

