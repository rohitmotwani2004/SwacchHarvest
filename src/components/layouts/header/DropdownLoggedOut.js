import { SignIn, UserPlus } from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

export const DropdownLoggedOut = () => {
    return (
        <div
            className="z-50 my-4 absolute md:top-5 md:right-5 top-12 right-10 text-base list-none bg-white rounded-lg shadow"
            id="user-dropdown"
        >
            <ul className="py-2 min-w-[7.5rem]" aria-labelledby="user-menu-button">
                <li>
                    <Link
                        to="/login"
                        className="group px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                        <SignIn
                            className="mx-1 group-hover:text-primary-400"
                            size={"1rem"}
                        />
                        Login
                    </Link>
                </li>
                <li>
                    <Link
                        to="/register"
                        className="group px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                        <UserPlus
                            className="mx-1 group-hover:text-primary-400"
                            size={"1rem"}
                        />
                        Sign-in
                    </Link>
                </li>
            </ul>
        </div>
    );
};
