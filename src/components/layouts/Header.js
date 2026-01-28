import { Leaf, PhoneList, Plant, PottedPlant, ShoppingCart, User } from "@phosphor-icons/react";
import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { DropdownLoggedOut } from "./header/DropdownLoggedOut";
import { DropdownLoggedIn } from "./header/DropdownLoggedIn";
import useClickOutside from "../../hooks/useClickOutside";

export const Header = () => {
    const location = useLocation();
    const dropdownRef = useRef();

    const loginStatus = false;

    useClickOutside(dropdownRef, () => {
        setDropdownVisible(false);
    });


    const inactiveNavLink =
        "block py-2 px-3 text-slate-800 hover:text-primary-400 md:p-0";
    const activeNavLink =
        "block py-2 px-3 text-primary-400 md:p-0 border-primary-800 border-b-2";

    const [navbarBg, setNavbarBg] = useState(false);

    const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 200) {
            setNavbarBg(true);
        } else {
            setNavbarBg(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);

        setDropdownVisible(false);
    },[location]);

    const isHomePage = location.pathname === "/";

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 border-gray-200 transition-all duration-500 ${
                isHomePage
                    ? navbarBg
                        ? "bg-white bg-opacity-100"
                        : "bg-transparent bg-opacity-0"
                    : "bg-white bg-opacity-100"
            }`}
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link
                    to="/"
                    className="flex items-center space-x-4 rtl:space-x-reverse transition-transform duration-300 hover:scale-105"
                >
                    <PottedPlant
                        className="text-primary-600 hover:text-primary-500 transition-all"
                        size="2rem" // Adjusting the size to maintain balance with text
                    />
                    <span className="font-semibold text-primary-600 text-lg md:text-2xl tracking-tight">
                        KisanSetu
                    </span>
                </Link>
                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:relative">
                    <Link to="/contact-us">
                        <PhoneList
                            size={"1.7rem"}
                            className="ms-[1rem] hover:text-primary-400"
                        />
                    </Link>
                    <Link to="/cart">
                        <ShoppingCart
                            size={"1.7rem"}
                            className="mx-[1rem] hover:text-primary-400"
                        />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setDropdownVisible(!dropdownVisible)}
                        className="flex text-sm"
                        id="user-menu-button"
                        aria-expanded="false"
                        data-dropdown-toggle="user-dropdown"
                        data-dropdown-placement="bottom"
                    >
                        <span className="sr-only">Open user menu</span>
                        <User size={"1.7rem"} />
                    </button>
                    
                    {/* <!-- Dropdown menu --> */}
                    <div ref={dropdownRef}>
                    {dropdownVisible &&
                        (loginStatus && dropdownVisible ? (
                            <DropdownLoggedIn />
                        ) : (
                            <DropdownLoggedOut />
                        ))}
                        </div>
                    <button
                        data-collapse-toggle="navbar-user"
                        onClick={() =>
                            setHamburgerMenuVisible(!hamburgerMenuVisible)
                        }
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                        aria-controls="navbar-user"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`${
                        hamburgerMenuVisible ? "" : "hidden"
                    } items-center justify-between w-full md:flex md:w-auto md:order-1`}
                    id="navbar-user"
                >
                    <ul className="flex text-lg flex-col font-semibold p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <NavLink
                                onClick={() => {
                                    setHamburgerMenuVisible(
                                        !hamburgerMenuVisible
                                    );
                                }}
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeNavLink : inactiveNavLink
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={() => {
                                    setHamburgerMenuVisible(
                                        !hamburgerMenuVisible
                                    );
                                }}
                                to="/shop"
                                className={({ isActive }) =>
                                    isActive ? activeNavLink : inactiveNavLink
                                }
                            >
                                Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={() => {
                                    setHamburgerMenuVisible(
                                        !hamburgerMenuVisible
                                    );
                                }}
                                to="/subsidies"
                                className={({ isActive }) =>
                                    isActive ? activeNavLink : inactiveNavLink
                                }
                            >
                                Subsidies
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                onClick={() => {
                                    setHamburgerMenuVisible(
                                        !hamburgerMenuVisible
                                    );
                                }}
                                to="/courses"
                                className={({ isActive }) =>
                                    isActive ? activeNavLink : inactiveNavLink
                                }
                            >
                                Courses
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
