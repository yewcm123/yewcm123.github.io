import { useEffect, useState } from "react";

const Header = () => {
    const height = window.innerHeight;
        const [scrollY, setScrollY] = useState(0);
        const [page, setPage] = useState(0)
        const [headerCss, setHeaderCss] = useState("");

        function handleScroll() {
            setScrollY(window.scrollY);
            console.log(scrollY)
            if (scrollY > 1.88 * height) {
                setPage(3);
            } else if (scrollY > 0.88 * height) {
                setPage(2);  
            } else {
                setPage(1);
            }


            if (page === 1) {
                setHeaderCss("page-1")
            } else if (page === 2) {
                setHeaderCss("page-2")
            } else if (page === 3) {
                setHeaderCss("page-3")
            }
    
        }

        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        })

    return (
        <header className={headerCss}>
            <nav className="nav-bar">
                <div className="">
                    <a className="logo-title" href="/">
                        Derrick Yew
                    </a>
                </div>

                <div className="">
                    <ul className="nav-item-list ">
                        <li className="">
                            <a
                                className="nav-item"
                                aria-current="page"
                                href="/"
                            >
                                about
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-item" href="/">
                                projects
                            </a>
                        </li>
                        <li className="">
                            <a className="nav-item" href="/">
                                contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
