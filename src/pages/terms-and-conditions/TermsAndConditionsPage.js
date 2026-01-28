import React from "react";
import { Link } from "react-router-dom";

export const TermsAndConditionsPage = () => {
    return (
        <main className="dark:bg-gray-800 bg-gray-100 mt-[6%] py-10">
            <div className="container my-7 mx-auto p-6 rounded-lg shadow-lg bg-white">
                <h1 className="text-4xl text-center text-primary-500 font-bold mb-4">
                    Terms and Conditions
                </h1>

                <p className="text-lg text-gray-700 mb-6">
                    Welcome to KisanSetu ! By accessing and using our website or services, you agree to comply with the following terms and conditions. Please read these terms carefully before proceeding.
                </p>

                <h2 className="text-2xl text-primary-400 font-semibold mb-2">Use of Website</h2>
                <p className="text-lg text-gray-700 mb-4">
                    You must be at least 18 years old or have parental consent to use our website or make purchases. You agree to provide accurate and updated information when using our services.
                </p>

                <h2 className="text-2xl text-primary-400 font-semibold mb-2">Product Information</h2>
                <p className="text-lg text-gray-700 mb-4">
                    We strive to provide accurate product information, but we do not guarantee the accuracy, completeness, or reliability of such information. Prices, specifications, and availability of products are subject to change without notice.
                </p>

                <h2 className="text-2xl text-primary-400 font-semibold mb-2">Intellectual Property</h2>
                <p className="text-lg text-gray-700 mb-4">
                    All content on our website, including images, text, logos, and trademarks, is the intellectual property of KisanSetu  or its licensors. You may not use, reproduce, or distribute any content without prior written permission.
                </p>

                <h2 className="text-2xl text-primary-400 font-semibold mb-2">User Conduct</h2>
                <p className="text-lg text-gray-700 mb-4">
                    You agree to use our website and services responsibly and lawfully. Prohibited activities include but are not limited to spamming, hacking, or engaging in any illegal or unethical behavior.
                </p>

                <h2 className="text-2xl text-primary-400 font-semibold mb-2">Limitation of Liability</h2>
                <p className="text-lg text-gray-700 mb-4">
                    KisanSetu  shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our website or services, including but not limited to loss of data, revenue, or profits.
                </p>

                <h2 className="text-2xl text-primary-400 font-semibold mb-2">Governing Law</h2>
                <p className="text-lg text-gray-700 mb-4">
                    These terms and conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be resolved through arbitration or in the courts of [Your Jurisdiction].
                </p>

                <h2 className="text-2xl text-primary-400 font-semibold mb-2">Changes to Terms</h2>
                <p className="text-lg text-gray-700 mb-4">
                    KisanSetu  reserves the right to modify or update these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of the revised terms.
                </p>

                <h2 className="text-2xl text-primary-400 font-semibold mb-2">Contact Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                    If you have any questions or concerns about our terms and conditions, please contact us at{" "}
                    <Link className="text-primary-500 hover:underline" to="mailto:legal@sisansetu .com">
                        legal@sisansetu .com
                    </Link>.
                </p>

                <p className="text-lg text-gray-700">
                    Thank you for choosing KisanSetu . We look forward to serving you with excellence and integrity.
                    <br />
                    Sincerely,
                    <br />
                    The KisanSetu  Team
                </p>
            </div>
        </main>
    );
};
