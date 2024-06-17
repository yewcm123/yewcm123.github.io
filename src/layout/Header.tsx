import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
};

const Header = () => {
  const height = window.innerHeight;
  const [scrollY, setScrollY] = useState(0);
  const [page, setPage] = useState(0);
  const [headerCss, setHeaderCss] = useState('');
  const [navDropdown, setNavDropdown] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  const toggleMenu = () => {
    setNavDropdown(!navDropdown);
  };

  function handleScroll() {
    setScrollY(window.scrollY);
    console.log(scrollY);
    if (scrollY > 1.88 * height) {
      setPage(3);
    } else if (scrollY > 0.88 * height) {
      setPage(2);
    } else {
      setPage(1);
    }

    if (page === 1) {
      setHeaderCss('page-1');
    } else if (page === 2) {
      setHeaderCss('page-2');
    } else if (page === 3) {
      setHeaderCss('page-3');
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      {windowDimensions.width < 900 ? (
        <>
          <header className={headerCss}>
            <nav className="nav-bar">
              <div>
                <a className="logo-title" href="/">
                  derrick yew
                </a>
              </div>
              <ul className="nav-item-list ">
                <li>
                  <div className="nav-item">
                    <button>
                      {navDropdown ? (
                        <FontAwesomeIcon
                          icon={faX}
                          size="xl"
                          className="nav-item"
                          onClick={() => toggleMenu()}
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faBars}
                          size="xl"
                          className="nav-item"
                          onClick={() => toggleMenu()}
                        />
                      )}
                    </button>
                  </div>
                </li>
              </ul>
            </nav>
          </header>
        </>
      ) : (
        <header className={headerCss}>
          <nav className="nav-bar">
            <a className="logo-title" href="#hero">
              derrick yew
            </a>
            <ul className="nav-item-list ">
              <li className="">
                <a className="nav-item" aria-current="page" href="#hero">
                  about
                </a>
              </li>
              <li className="">
                <a className="nav-item" href="#experience">
                  projects
                </a>
              </li>
              <li className="">
                <a className="nav-item" href="#contact-me">
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
