import React from "react";
import { ChartBar, SignOut } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export const DropdownLoggedIn = () => {
    return (
        <div
            className="z-50 my-4 absolute md:top-5 md:right-5 top-12 right-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow"
            id="user-dropdown"
        >
            <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">
                    Bonnie Green
                </span>
                <a
                    href="mailto:name@gmail.com"
                    className="block text-sm text-gray-500 truncate hover:text-primary-400 hover:underline"
                >
                    name@gmail.com
                </a>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                    <Link
                        to="/"
                        className="group px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                        <ChartBar
                            className="mx-1 group-hover:text-primary-400"
                            size={"1rem"}
                        />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="group px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                        <SignOut
                            className="mx-1 group-hover:text-red-400"
                            size={"1rem"}
                        />
                        Sign-out
                    </Link>
                </li>
            </ul>
        </div>
    );
};
