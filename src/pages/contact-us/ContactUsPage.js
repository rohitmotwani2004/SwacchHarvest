import {
    FacebookLogo,
    InstagramLogo,
    TwitterLogo,
} from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

export const ContactUsPage = () => {
    return (
        <main className="dark:bg-gray-800 bg-gray-100 mt-[7%] py-10">
            <div className="container mx-auto p-6 rounded-lg shadow-lg bg-white">
                <h1 className="text-4xl text-center text-primary-500 font-bold mb-4">
                    Contact Us
                </h1>
                <p className="text-center text-lg text-gray-600 mb-6">
                    We’d love to hear from you! Please reach out using the
                    information below.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-primary-200 rounded-lg p-4 shadow-md">
                        <h2 className="text-2xl text-primary-400 font-semibold mb-2">
                            General Inquiries
                        </h2>
                        <p className="text-gray-700 mb-2">
                            For general questions, contact us at:{" "}
                            <Link
                                className="text-primary-500 hover:underline"
                                to="mailto:info@sisansetu .com"
                            >
                                info@sisansetu .com
                            </Link>
                        </p>
                    </div>
                    <div className="border border-primary-200 rounded-lg p-4 shadow-md">
                        <h2 className="text-2xl text-primary-400 font-semibold mb-2">
                            Customer Support
                        </h2>
                        <p className="text-gray-700 mb-2">
                            For assistance with an order, reach our support team
                            at:{" "}
                            <Link
                                className="text-primary-500 hover:underline"
                                to="mailto:support@sisansetu .com"
                            >
                                support@sisansetu .com
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-4">
                    <div className="border border-primary-200 rounded-lg p-4 shadow-md">
                        <h2 className="text-2xl text-primary-400 font-semibold mb-2">
                            Collaborations & Partnerships
                        </h2>
                        <p className="text-gray-700 mb-2">
                            Interested in collaborating? Email us at:{" "}
                            <Link
                                className="text-primary-500 hover:underline"
                                to="mailto:partnerships@sisansetu .com"
                            >
                                partnerships@sisansetu .com
                            </Link>
                        </p>
                    </div>
                    <div className="border border-primary-200 rounded-lg p-4 shadow-md">
                        <h2 className="text-2xl text-primary-400 font-semibold mb-2">
                            Visit Us
                        </h2>
                        <p className="text-gray-700 mb-2">
                            Prefer to reach out in person? Visit our office:
                            <br />
                            <strong>KisanSetu  Office</strong>
                            <br />
                            123 Organic Lane
                            <br />
                            Greenfield, State, Zip Code
                        </p>
                    </div>
                </div>

                {/* Send Us a Message (Contact Form) */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-8 w-[75%]ch">
                    <h2 className="text-2xl text-primary-400 font-semibold mb-4">
                        Send Us a Message
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700"
                                htmlFor="name"
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700"
                                htmlFor="email"
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-sm font-medium text-gray-700"
                                htmlFor="message"
                            >
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-400"
                                rows="4"
                                placeholder="Type your message here"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-primary-500 text-white py-2 px-6 rounded-lg hover:bg-primary-600 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="mt-6">
                    <h2 className="text-2xl text-primary-400 font-semibold mb-2">
                        Social Media
                    </h2>
                    <p className="text-gray-700 mb-4">
                        Stay connected for updates, tips, and more:
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link
                            className="flex items-center text-lg font-bold text-primary-500 hover:underline"
                            to="https://instagram.com/sisansetu "
                        >
                            <InstagramLogo className="text-2xl mr-2" />{" "}
                            Instagram
                        </Link>
                        <Link
                            className="flex items-center text-lg font-bold text-primary-500 hover:underline"
                            to="https://facebook.com/sisansetu "
                        >
                            <FacebookLogo className="text-2xl mr-2" /> Facebook
                        </Link>
                        <Link
                            className="flex items-center text-lg font-bold text-primary-500 hover:underline"
                            to="https://twitter.com/sisansetu "
                        >
                            <TwitterLogo className="text-2xl mr-2" /> Twitter
                        </Link>
                    </div>
                </div>

                <p className="text-center text-gray-600 mt-6 text-lg">
                    Thank you for choosing KisanSetu . We look forward to
                    connecting with you!
                </p>
            </div>
        </main>
    );
};
