import React, { useEffect, useState } from 'react';

const Header = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const showNavbar = () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active-nav');
    nav.classList.toggle('inactive-nav');
    document.querySelector('header').classList.toggle('active-header'); 
 };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setInnerWidth(width);
      
      const nav = document.querySelector('nav');
      if (width < 768) {
        nav.classList.remove('active-nav');
        nav.classList.add('inactive-nav');
      } else {
        nav.classList.remove('inactive-nav');
        nav.classList.add('active-nav');
      }
    };

    window.addEventListener('resize', handleResize);
    // Run handler on mount
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('nav ul li a');

      let currentSection = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('activeSection');
        if (link.getAttribute('href').substring(1) === currentSection) {
          link.classList.add('activeSection');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header>
      <div id="logo">
       <span> V M Raghu Rami Reddy</span>
        {innerWidth < 768 && (
          <div id="hamburger" onClick={showNavbar}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      <nav className="inactive-nav">
        <ul>
          <li>
            <a href="#home" className="activeSection">
              Home
            </a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contactme">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;