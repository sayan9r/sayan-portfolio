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




  return (
    <div className="relative w-full ">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />

          <div className="flex items-center gap-4">
            
              <>
              <NavbarButton variant="primary" onClick={() => navigate("/signup")}>My Blog</NavbarButton>
              </>
          
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
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              
                <>
                <NavbarButton
                onClick={() => {
                  navigate("/login"),
                  setIsMobileMenuOpen(false);
                }}
                variant="primary"
                className="w-full">
                Login
              </NavbarButton>
              <NavbarButton
                onClick={() => {
                  navigate("/signup"),
                  setIsMobileMenuOpen(false);
                }}
                variant="primary"
                className="w-full">
                Sign up
              </NavbarButton>
                </>
              
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      
    </div>
  );
}

