"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") ?? "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    const navbarHeight = 80;
    const section = document.getElementById(sectionId);
    if (section) {
      const sectionTop = section.offsetTop - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="bg-gradient-to-r from-pink-600 to-pink-500 text-white py-4 px-4 sm:px-6 lg:px-8 fixed w-full top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mb-2 sm:mb-0 bg-gradient-to-r from-white to-pink-100 bg-clip-text text-transparent">
            Portfólio
          </h1>
          <p className="text-pink-100 text-lg hidden sm:block ml-4 font-light">Desenvolvedora</p>
        </div>
        <button 
          className="block sm:hidden text-white focus:outline-none hover:bg-pink-700 p-2 rounded-lg transition-colors duration-300"
          onClick={toggleMenu}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.707 5.293a1 1 0 00-1.414 0L12 10.586 6.707 5.293a1 1 0 10-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 000-1.414z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2zm0 6h16a1 1 0 110 2H4a1 1 0 110-2z"
              />
            )}
          </svg>
        </button>
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } sm:flex sm:items-center w-full sm:w-auto transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-8 mt-4 sm:mt-0">
            <li>
              <button 
                onClick={() => handleNavClick('sobre')} 
                className={`block py-2 px-4 text-lg transition-all duration-300 rounded-lg ${
                  activeSection === "sobre" 
                    ? "font-bold text-pink-900 bg-white/20 shadow-md" 
                    : "text-white hover:text-pink-100 hover:bg-white/10"
                }`}
              >
                Sobre
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('projetos')} 
                className={`block py-2 px-4 text-lg transition-all duration-300 rounded-lg ${
                  activeSection === "projetos" 
                    ? "font-bold text-pink-900 bg-white/20 shadow-md" 
                    : "text-white hover:text-pink-100 hover:bg-white/10"
                }`}
              >
                Projetos
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('habilidades')} 
                className={`block py-2 px-4 text-lg transition-all duration-300 rounded-lg ${
                  activeSection === "habilidades" 
                    ? "font-bold text-pink-900 bg-white/20 shadow-md" 
                    : "text-white hover:text-pink-100 hover:bg-white/10"
                }`}
              >
                Habilidades
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contato')} 
                className={`block py-2 px-4 text-lg transition-all duration-300 rounded-lg ${
                  activeSection === "contato" 
                    ? "font-bold text-pink-900 bg-white/20 shadow-md" 
                    : "text-white hover:text-pink-100 hover:bg-white/10"
                }`}
              >
                Contato
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}