import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Level color mapping
const levelColors = {
    Beginner: {
        background: "bg-green-100",
        text: "text-green-800",
    },
    Intermediate: {
        background: "bg-yellow-100",
        text: "text-yellow-800",
    },
    Advanced: {
        background: "bg-red-100",
        text: "text-red-800",
    },
};

// Level Badge Component
const LevelBadge = ({ level }) => {
    const levelStyle = levelColors[level] || levelColors.Beginner;
    return (
        <span className={`${levelStyle.background} ${levelStyle.text} px-4 py-2 rounded-full text-sm font-semibold`}>
            {level}
        </span>
    );
};

// Enroll Form Component
const EnrollForm = ({ course, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [upiId, setUpiId] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('upi');
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [paypalEmail, setPaypalEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (paymentMethod === 'upi' && !upiId) {
            alert("Please enter a valid UPI ID.");
            return;
        }
        if (paymentMethod === 'creditCard' && (!cardNumber || !cardExpiry || !cardCvv)) {
            alert("Please fill in all credit card details.");
            return;
        }
        if (paymentMethod === 'paypal' && !paypalEmail) {
            alert("Please enter your PayPal email.");
            return;
        }

        // Save enrollment to JSON Server
        const enrollmentData = {
            user: { name, email },
            courseId: course.id,
            courseTitle: course.title,
            paymentMethod,
            paymentDetails: paymentMethod === 'upi' ? upiId : paymentMethod === 'creditCard' ? cardNumber : paypalEmail,
        };

        // Send enrollment data to JSON server
        fetch('http://localhost:5000/enrollments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(enrollmentData),
        })
            .then((response) => response.json())
            .then(() => {
                alert(`Successfully enrolled in ${course.title} for ₹${course.price}!`);
                onClose();
            })
            .catch((error) => {
                console.error('Error enrolling user:', error);
                alert('Error enrolling in the course.');
            });
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg relative">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enroll in {course.title}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Payment Method Selector */}
                    <div className="mb-6">
                        <label htmlFor="paymentMethod" className="block text-sm font-semibold text-gray-700">
                            Select Payment Method
                        </label>
                        <select
                            id="paymentMethod"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            required
                        >
                            <option value="upi">UPI</option>
                            <option value="creditCard">Credit/Debit Card</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>

                    {/* Payment Fields */}
                    {paymentMethod === 'upi' && (
                        <div className="mb-4">
                            <label htmlFor="upi" className="block text-sm font-semibold text-gray-700">Enter UPI ID</label>
                            <input
                                type="text"
                                id="upi"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                                value={upiId}
                                onChange={(e) => setUpiId(e.target.value)}
                                placeholder="example@upi"
                                required
                            />
                        </div>
                    )}
                    {paymentMethod === 'creditCard' && (
                        <>
                            <div className="mb-4">
                                <label htmlFor="cardNumber" className="block text-sm font-semibold text-gray-700">Card Number</label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                                    value={cardNumber}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                    placeholder="1234 5678 9101 1121"
                                    maxLength="16"
                                    required
                                />
                            </div>
                            <div className="flex space-x-4 mb-4">
                                <div className="w-1/2">
                                    <label htmlFor="cardExpiry" className="block text-sm font-semibold text-gray-700">Expiry Date</label>
                                    <input
                                        type="text"
                                        id="cardExpiry"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                                        value={cardExpiry}
                                        onChange={(e) => setCardExpiry(e.target.value)}
                                        placeholder="MM/YY"
                                        required
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label htmlFor="cardCvv" className="block text-sm font-semibold text-gray-700">CVV</label>
                                    <input
                                        type="text"
                                        id="cardCvv"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                                        value={cardCvv}
                                        onChange={(e) => setCardCvv(e.target.value)}
                                        placeholder="CVV"
                                        maxLength="3"
                                        required
                                    />
                                </div>
                            </div>
                        </>
                    )}
                    {paymentMethod === 'paypal' && (
                        <div className="mb-4">
                            <label htmlFor="paypalEmail" className="block text-sm font-semibold text-gray-700">PayPal Email</label>
                            <input
                                type="email"
                                id="paypalEmail"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                                value={paypalEmail}
                                onChange={(e) => setPaypalEmail(e.target.value)}
                                placeholder="youremail@paypal.com"
                                required
                            />
                        </div>
                    )}

                    {/* Price and Submit Button */}
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-lg font-semibold text-gray-800">₹{course.price}</span>
                        <button
                            type="submit"
                            className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300"
                        >
                            Confirm Enrollment
                        </button>
                    </div>
                </form>

                {/* Close Button */}
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    X
                </button>
            </div>
        </div>
    );
};

const CourseCard = React.memo(({ course, onEnroll, enrolledCourses }) => {
    // Check if the course is already enrolled
    const isEnrolled = enrolledCourses.some(enrollment => enrollment.courseId === course.id);

    return (
        <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 flex flex-col">
            {/* Image Section */}
            <div className="relative w-full h-56 md:h-64 xl:h-72">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover rounded-t-lg"
                    loading="lazy"
                />
            </div>

            {/* Course Info Section */}
            <div className="flex-1 p-6">
                <div className="flex items-center mb-4">
                    <img
                        src={course.thumbnail}
                        alt={`Thumbnail for ${course.title}`}
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <h2 className="text-2xl font-semibold text-gray-800">{course.title}</h2>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>

                {/* Duration, Level, and Price Section */}
                <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>{course.duration}</span>
                    <LevelBadge level={course.level} />
                </div>

                {/* Price Display */}
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-semibold text-gray-800">₹{course.price}</p>
                    <Link
                        to={`/courses/${course.id}`}
                        className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300"
                    >
                        View Details
                    </Link>
                </div>
            </div>

            {/* Enroll Now Button Section */}
            <div className="p-6 pt-0">
                <button
                    onClick={() => onEnroll(course)}
                    className={`bg-green-600 text-white py-2 px-6 rounded-full w-full ${isEnrolled ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-green-700 transition duration-300'}`}
                    disabled={isEnrolled}
                >
                    {isEnrolled ? 'Already Enrolled' : `Enroll Now for ₹${course.price}`}
                </button>
            </div>
        </div>
    );
});

// Courses Container Component
export const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then((response) => response.json())
            .then((data) => setCourses(data))
            .catch((error) => console.error('Error fetching courses:', error));

        // Fetch enrolled courses from server
        fetch('http://localhost:5000/enrollments')
            .then((response) => response.json())
            .then((data) => setEnrolledCourses(data))
            .catch((error) => console.error('Error fetching enrollments:', error));
    }, []);

    const handleEnroll = (course) => {
        setSelectedCourse(course);
    };

    const handleCloseModal = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-8 mt-8">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 leading-tight">
                Explore Our <span className="text-green-600">Organic Farming</span> Courses
            </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        onEnroll={handleEnroll}
                        enrolledCourses={enrolledCourses}
                    />
                ))}
            </div>

            {selectedCourse && <EnrollForm course={selectedCourse} onClose={handleCloseModal} />}
        </div>
    );
};
