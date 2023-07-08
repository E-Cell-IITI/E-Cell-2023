import { useEffect, useState, useRef } from "react";
import "../css/Navbar.css";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

export default function Header(props) {
  const location = useLocation();
  const currentPath = location.pathname;

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const[ colorChange,setColorchange]=useState(false)
  const navbarRef = useRef(null);
  const sections = ["home", "about", "initiatives", "events", "team", "gallery", "blogs", "contact"];

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 200 || currentPath === "/team" || currentPath === "/gallery") {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  useEffect(() => {
    const handleSectionChange = () => {
      const scrollPosition = window.scrollY + navbarRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const sectionTop = top + window.scrollY;
          const sectionBottom = bottom + window.scrollY;

          if (sectionTop <= scrollPosition && scrollPosition < sectionBottom) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleSectionChange);
    return () => {
      window.removeEventListener("scroll", handleSectionChange);
    };
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div
      ref={navbarRef}
      className={classNames(
        "nav flex fixed items-center justify-between py-1 bg-transparent top-0 z-50 w-full px-8 lg:px-16 right-0 left-0",
        colorChange ? "bg-white opacity-75" : "bg-transparent"
      )}
    >
      <img src="./ecell.png" alt="Logo" className="object-contain w-32 mx-6 md:mx-4" />

      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 z-50 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-900"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-7 right-8 px-8 py-8 cursor-pointer"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-900"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>

            <ul className="flex flex-col items-center justify-between min-h-[250px] text-[#0060A1] overflow-y-auto mobile-menu">
              {props.links.map((val, index) => (
                <li
                  className=
                    "border-b border-slate-100 my-8 uppercase font-semibold text-slate-100 text-lg mobile"
                    
                  
                  key={index}
                >
                  {val.title === "TEAM" || val.title === "GALLERY" ? (
                    <a href={val.link} onClick={() => setIsNavOpen((prev) => !prev)}>
                      {val.title}
                    </a>
                  ) : (
                    <Link
                      to={val.link}
                      spy={true}
                      smooth={true}
                      offset={-70} // Adjust this offset if necessary
                      duration={500} // Adjust the scrolling duration if necessary
                      onClick={() => setIsNavOpen((prev) => !prev)}
                    >
                      {val.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-12 lg:flex text-white">
          {props.links.map((val, index) => (
            <li
              className={classNames(
                "text-xl font-semibold text-stone-950 desktop",
                activeSection === val.title.toLowerCase() ? "active" : ""
              )}
              key={index}
            >
              {val.title === "TEAM" || val.title === "GALLERY" || val.title === "HOME" ? (
                <a href={val.link}>{val.title}</a>
              ) : (
                <Link
                  to={val.link}
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust this offset if necessary
                  duration={500} // Adjust the scrolling duration if necessary
                >
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
          background: rgb(17 24 39);
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
        .active{
          transform: scale(1.2); /* Apply scaling effect */
        }
       
        
        }
      `}</style>
    </div>
  );
}


