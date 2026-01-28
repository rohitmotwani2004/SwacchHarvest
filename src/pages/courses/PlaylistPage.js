import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Lock, PlayCircle } from "@phosphor-icons/react";

// Helper function to extract the video ID from YouTube URL and generate the thumbnail URL
const getYouTubeThumbnail = (url) => {
    const videoId = url.split("v=")[1].split("&")[0];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; // Max resolution thumbnail
};

export const PlaylistPage = () => {
    const { id } = useParams(); // Get the course ID from the URL
    console.log("id " + id);
    const [course, setCourse] = useState(null); // State to store the course data
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [showEnrollModal, setShowEnrollModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for error

    // Modal Handlers
    const handleEnrollment = () => setShowEnrollModal(true);
    const handleCloseModal = () => {
        setShowEnrollModal(false);
        setShowErrorModal(false);
    };

    const [paymentMethod, setPaymentMethod] = useState("upi");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        upi: "",
        cardNumber: "",
        cardExpiry: "",
        cardCvv: "",
        paypalEmail: "",
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    // Handle payment method change
    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Successfully enrolled in ${course.title}!`);
        setIsEnrolled(true);
        setShowEnrollModal(false);
    };

    const handleVideoSelection = (video) => {
        if (!isEnrolled && video.isLocked) {
            setShowErrorModal(true);
            return;
        }
        setSelectedVideo(video);
    };

    // Fetch course data from the JSON server
    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const response = await fetch(`http://localhost:5000/courses/${id}`);
                if (!response.ok) {
                    throw new Error("Course not found");
                }
                const courseData = await response.json();
                setCourse(courseData);
                setLoading(false);
            } catch (err) {
                console.log(err.message);
                setLoading(false);
            }
        };

        fetchCourse();
    }, [id]); // Fetch course when ID changes

    if (loading) {
        return (
            <div className="text-center text-lg text-gray-500">Loading...</div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 font-semibold">
                {error}
            </div>
        );
    }

    // If course is not found, show an error
    if (!course) {
        return (
            <p className="text-center text-red-500 font-semibold">
                Course not found!
            </p>
        );
    }

    const videos = course.playlist || [];

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-6 mt-16">
            <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-8">
                {/* Course Title and Description */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">
                        {course.title}
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        {course.description}
                    </p>
                </div>

                {/* Video Player Section */}
                {selectedVideo && (
                    <div className="mb-12">
                        <h3 className="text-3xl font-semibold text-gray-800">
                            {selectedVideo.title}
                        </h3>
                        <div className="mt-4">
                            <ReactPlayer
                                url={selectedVideo.videoUrl}
                                controls
                                width="100%"
                                height="500px"
                                playing
                            />
                        </div>
                    </div>
                )}

                {/* Playlist Videos (Vertical Layout) */}
                <div className="space-y-8">
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                            onClick={() => handleVideoSelection(video)}
                        >
                            <img
                                src={getYouTubeThumbnail(video.videoUrl)}
                                alt={video.title}
                                className="w-48 h-36 p-1 rounded-lg" // Larger thumbnail
                            />
                            <div className="flex-1 p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {video.title}
                                    </h3>
                                    <div>
                                        {video.isLocked && !isEnrolled ? (
                                            <Lock
                                                size={40}
                                                className="text-red-600"
                                            />
                                        ) : (
                                            <PlayCircle
                                                size={40}
                                                className="text-green-600"
                                            />
                                        )}
                                    </div>
                                </div>
                                {video.isLocked && !isEnrolled && (
                                    <p className="text-sm text-gray-500 mt-2">
                                        Unlock by enrolling in the course.
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Enroll Button */}
                {!isEnrolled && (
                    <div className="text-center mt-8">
                        <button
                            onClick={handleEnrollment}
                            className="bg-green-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300"
                        >
                            Enroll to Unlock All Videos
                        </button>
                    </div>
                )}
            </div>

            {/* Enroll Modal */}
            {showEnrollModal && (
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${showEnrollModal ? "block" : "hidden"}`}
                >
                    <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md relative">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                            Enroll in {course.title}
                        </h2>

                        <form onSubmit={handleSubmit}>
                            {/* Full Name Input */}
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    required
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Email Input */}
                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    required
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>

                            {/* Payment Option Selector */}
                            <div className="mb-6">
                                <label
                                    htmlFor="paymentMethod"
                                    className="block text-sm font-semibold text-gray-700"
                                >
                                    Select Payment Method
                                </label>
                                <select
                                    id="paymentMethod"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    value={paymentMethod}
                                    onChange={handlePaymentMethodChange}
                                    required
                                >
                                    <option value="upi">UPI</option>
                                    <option value="creditCard">
                                        Credit/Debit Card
                                    </option>
                                    <option value="paypal">PayPal</option>
                                </select>
                            </div>

                            {/* Conditionally Render Fields Based on Payment Method */}
                            {paymentMethod === "upi" && (
                                <div className="mb-6">
                                    <label
                                        htmlFor="upi"
                                        className="block text-sm font-semibold text-gray-700"
                                    >
                                        Enter UPI ID
                                    </label>
                                    <input
                                        type="text"
                                        id="upi"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        placeholder="example@upi"
                                        value={formData.upi}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}

                            {paymentMethod === "creditCard" && (
                                <>
                                    <div className="mb-5">
                                        <label
                                            htmlFor="cardNumber"
                                            className="block text-sm font-semibold text-gray-700"
                                        >
                                            Card Number
                                        </label>
                                        <input
                                            type="text"
                                            id="cardNumber"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                            placeholder="Enter card number"
                                            value={formData.cardNumber}
                                            onChange={handleInputChange}
                                            maxLength="16"
                                            required
                                        />
                                    </div>
                                    <div className="flex space-x-4 mb-5">
                                        <div className="w-1/2">
                                            <label
                                                htmlFor="cardExpiry"
                                                className="block text-sm font-semibold text-gray-700"
                                            >
                                                Expiry Date
                                            </label>
                                            <input
                                                type="text"
                                                id="cardExpiry"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                placeholder="MM/YY"
                                                value={formData.cardExpiry}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="w-1/2">
                                            <label
                                                htmlFor="cardCvv"
                                                className="block text-sm font-semibold text-gray-700"
                                            >
                                                CVV
                                            </label>
                                            <input
                                                type="text"
                                                id="cardCvv"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                                placeholder="CVV"
                                                value={formData.cardCvv}
                                                onChange={handleInputChange}
                                                maxLength="3"
                                                required
                                            />
                                        </div>
                                    </div>
                                </>
                            )}

                            {paymentMethod === "paypal" && (
                                <div className="mb-6">
                                    <label
                                        htmlFor="paypalEmail"
                                        className="block text-sm font-semibold text-gray-700"
                                    >
                                        PayPal Email
                                    </label>
                                    <input
                                        type="email"
                                        id="paypalEmail"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        placeholder="Enter your PayPal email"
                                        value={formData.paypalEmail}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            )}

                            {/* Price and Submit Button */}
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-xl font-semibold text-gray-800">
                                    ₹{course.price}
                                </span>
                                <button
                                    type="submit"
                                    className="bg-primary-600 text-white py-2 px-6 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-300"
                                >
                                    Confirm Enrollment
                                </button>
                            </div>
                        </form>

                        {/* Close Button */}
                        <button
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-lg font-semibold"
                            onClick={handleCloseModal}
                        >
                            <span className="sr-only">Close</span> &times;
                        </button>
                    </div>
                </div>
            )}

            {/* Error Modal for Locked Video */}
            {showErrorModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md relative">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Error
                        </h2>
                        <p className="text-lg text-gray-600 mb-4">
                            Please enroll in the course to unlock this video.
                        </p>
                        <div className="flex justify-end">
                            <button
                                className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300"
                                onClick={handleCloseModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
