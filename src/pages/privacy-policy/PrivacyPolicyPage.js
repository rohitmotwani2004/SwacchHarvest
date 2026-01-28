import React from "react";
import { Link } from "react-router-dom";

export const PrivacyPolicyPage = () => {
    return (
        <main className="dark:bg-gray-800 bg-gray-100 mt-[7%] py-10">
            <div className="container mx-auto p-6 rounded-lg shadow-lg bg-white">
                <h1 className="text-4xl text-center text-primary-500 font-bold mb-4">
                    Privacy Policy
                </h1>
                <p className="text-center text-lg text-gray-600 mb-6">
                    Your privacy is important to us at KisanSetu .
                </p>

                <div className="mb-6">
                    <h2 className="font-semibold my-2 lg:text-2xl text-xl pt-2 text-primary-400">
                        Information We Collect
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We collect various types of information when you interact with our website or make purchases, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Personal Information: such as your name, email address, phone number, and shipping address.</li>
                        <li>Payment Information: such as credit card details or other payment methods.</li>
                        <li>Device Information: such as your IP address, browser type, and operating system.</li>
                        <li>Usage Information: such as pages visited, products viewed, and interactions with our website.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="font-semibold my-2 lg:text-2xl text-xl pt-2 text-primary-400">
                        How We Use Your Information
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li>Processing and fulfilling orders.</li>
                        <li>Communicating with you about products, promotions, and updates.</li>
                        <li>Personalizing your experience and improving our website.</li>
                        <li>Detecting and preventing fraud and unauthorized activities.</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h2 className="font-semibold my-2 lg:text-2xl text-xl pt-2 text-primary-400">
                        Data Security
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="font-semibold my-2 lg:text-2xl text-xl pt-2 text-primary-400">
                        Third-Party Services
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We may use third-party services and tools on our website, such as payment processors and analytics providers. These third parties may have their own privacy policies governing how they collect and use your information.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="font-semibold my-2 lg:text-2xl text-xl pt-2 text-primary-400">
                        Updates to Privacy Policy
                    </h2>
                    <p className="text-gray-700 mb-4">
                        We reserve the right to update or modify this Privacy Policy at any time. Changes will be effective immediately upon posting on our website. We encourage you to review this Privacy Policy periodically for any updates.
                    </p>
                </div>

                <div className="mb-6">
                    <h2 className="font-semibold my-2 lg:text-2xl text-xl pt-2 text-primary-400">
                        Contact Us
                    </h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions or concerns about our Privacy Policy or how we handle your personal information, please contact us at{" "}
                        <Link className="text-primary-500 hover:underline" to="mailto:privacy@sisansetu .com">
                            privacy@sisansetu .com
                        </Link>.
                    </p>
                </div>

                <p className="text-center text-gray-700 mb-4">
                    Thank you for trusting KisanSetu  with your privacy. Your satisfaction and trust are paramount to us.
                </p>
                <p className="text-center text-gray-700 mb-4">
                    Sincerely,<br />
                    The KisanSetu  Team
                </p>
            </div>
        </main>
    );
};
