const Header = () => {
    return (
        <header>
            <nav className="nav-bar">
                <div className ="">
                    <a className="logo-title" href="/">
                        Derrick Yew
                    </a>
                </div>

                <div className="" >
                    <ul className="nav-item-list ">
                        <li className="">
                            <a className="nav-item" aria-current="page" href="/">
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
