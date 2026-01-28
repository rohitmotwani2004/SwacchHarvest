import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../../assets/hero.mp4";
// import MobileHero from "../../../assets/heroMobile.jpg";

export const HeroSection = () => {
    return (
        <figure className="relative w-full h-screen overflow-hidden">
            {/* Video for larger screens */}
            <video
                className="hidden sm:block w-full h-full object-cover"
                autoPlay
                muted
                loop
                src={HeroImage}
                alt="Hero video showing nature and sustainability"
            />
            {/* Mobile image for smaller screens */}
            {/* <img className="sm:hidden w-full h-full object-cover" src={MobileHero} alt="Hero image on mobile" /> */}

            <figcaption className="absolute inset-0 flex flex-col justify-center items-center px-4 sm:px-6 text-center text-white bg-gradient-to-t from-black via-transparent to-transparent">
                <div className="max-w-lg">
                    <h2 className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide leading-tight">
                        "Bringing Freshness from Farm to Fork"
                    </h2>
                    <div className="flex flex-col sm:flex-row sm:space-x-6 sm:justify-center">
                        <Link
                            to="/about"
                            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white border-2 border-white rounded-lg transition-transform transform hover:scale-105 hover:bg-opacity-70 hover:bg-primary-500"
                        >
                            Learn more
                        </Link>
                        <Link
                            to="/shop"
                            className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white border-2 border-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-transform transform hover:scale-105"
                        >
                            Discover Organic Goodness
                            <svg
                                className="w-4 h-4 ml-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </figcaption>
        </figure>
    );
};
