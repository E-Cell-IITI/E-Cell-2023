import { useEffect, useState, useRef } from "react";
import "../css/Navbar.css";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Header(props) {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [colorChange, setColorChange] = useState(false);
  const navbarRef = useRef(null);

  const changeNavbarColor = () => {
    if (window.scrollY >= 200 || currentPath === "/team" || currentPath === "/gallery") {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isNavOpen]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const navLinks = [
    { title: "HOME", path: "/" },
    { title: "ABOUT", path: "/#about" },
    { title: "INITIATIVES", path: "/#initiatives" },
    { title: "EVENTS", path: "/#events" },
    { title: "TEAM", path: "/team" },
    { title: "GALLERY", path: "/gallery" },
    { title: "BLOGS", path: "/#blogs" },
    { title: "CONTACT", path: "/#contact" },
  ];

  const adjustedNavLinks = currentPath === "/"
    ? navLinks.map(link => ({
        ...link,
        path: link.title === "HOME" ? "/#home" : link.path
      }))
    : navLinks;

  const filteredLinks = currentPath === "/" 
    ? adjustedNavLinks 
    : adjustedNavLinks.filter(link => link.path === "/" || (currentPath === "/gallery" && link.path === "/team") || (currentPath === "/team" && link.path === "/gallery"));

  return (
    <div
      ref={navbarRef}
      className="nav flex fixed items-center justify-between py-1 top-0 z-50 w-full px-2 pr-8 lg:px-16 right-0 left-0"
      style={{ backgroundColor: colorChange ? "rgba(255, 255, 255, 0.5)" : "transparent" }}
    >
      <img src="./ecell.png" alt="Logo" className="object-contain w-32 mx-6 md:mx-4" />

      <nav>
        <section className="MOBILE-MENU flex lg:hidden z-50">
          <div
            className={`HAMBURGER-ICON space-y-2 z-50 cursor-pointer ${isNavOpen ? 'hidden' : ''}`}
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="close-icon-container"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="flex flex-col items-center justify-between min-h-[250px] overflow-y-auto mobile-menu">
              {filteredLinks.map((val, index) => (
                <li
                  className="border-b my-8 uppercase font-semibold text-lg desktop"
                  key={index}
                >
                  {currentPath === "/" && val.path.startsWith("/#") ? (
                    <HashLink to={val.path} onClick={() => setIsNavOpen(false)}>
                      {val.title}
                    </HashLink>
                  ) : (
                    <Link to={val.path} onClick={() => setIsNavOpen(false)}>
                      {val.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-12 lg:flex ">
          {filteredLinks.map((val, index) => (
            <li
              className={classNames("text-xl font-semibold text-stone-950 hover:text-blue-600 desktop")}
              key={index}
            >
              {currentPath === "/" && val.path.startsWith("/#") ? (
                <HashLink to={val.path}>
                  {val.title}
                </HashLink>
              ) : (
                <Link to={val.path}>
                  {val.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background-color: rgba(255, 255, 255, 0.9);
          opacity: 100;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          color:black;
        }
       
        .close-icon-container {
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
