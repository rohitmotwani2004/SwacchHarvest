import React from "react";
import { Rating } from "../../../components/Elements/Rating";

// Fake customer reviews data
const reviews = [
    {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        image: "https://avatar.iran.liara.run/public/job/farmer/male",
        comment:
            "This soil conditioner is amazing! My plants have grown so much healthier and the soil structure has improved drastically. Highly recommended!",
    },
    {
        id: 2,
        name: "Sarah Lee",
        rating: 4.0,
        image: "https://avatar.iran.liara.run/public/job/farmer/male",
        comment:
            "Good product, but I wish it was a bit cheaper. It definitely worked wonders on my garden soil. Plants are doing much better!",
    },
    {
        id: 3,
        name: "Michael Smith",
        rating: 5.0,
        image: "https://avatar.iran.liara.run/public/job/farmer/male",
        comment:
            "Absolutely love this product! I saw immediate results in my vegetable garden. Worth every penny!",
    },
];

export const ProductDetailsPage = () => {
    const cartSVG = (
        <div className="ps-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#FFF"
                viewBox="0 0 256 256"
            >
                <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
            </svg>
        </div>
    );

    const product = {
        id: 1,
        name: "Organic Soil Conditioner",
        image_url: "/product-images/product_1.jpg",
        price: 350,
        rating: 4.3,
        weight: "5 kg",
        description:
            "This premium organic soil conditioner is crafted from a blend of rich organic matter and natural minerals. It's designed to enhance soil structure, improve aeration, and increase nutrient retention. With this product, you can achieve healthier plants and higher yields in your garden or farm.",
        category: "Soil Enhancers",
        discounted_price: 300,
        benefits: [
            "Enhances soil fertility and structure",
            "Improves drainage and aeration",
            "Increases moisture retention",
            "Encourages the growth of beneficial microorganisms",
            "Safe and effective for all plant types",
            "Reduces the need for chemical fertilizers",
        ],
        usage_instructions:
            "For optimal results, mix 2-3 kg of the conditioner into 100 kg of soil. Apply it before planting or as a top dressing during the growing season. Ensure even distribution and mix thoroughly into the soil to maximize its benefits.",
        storage_instructions:
            "Store in a cool, dry place away from direct sunlight. Ensure the package is tightly sealed after use to maintain freshness. Keep out of reach of children and pets.",
        ideal_for: [
            "Home gardens",
            "Vegetable plots",
            "Flower beds",
            "Potted plants",
            "Organic farms",
        ],
        additional_information:
            "This soil conditioner is certified organic and complies with the highest agricultural standards. It is free from synthetic additives, making it a safe choice for environmentally conscious gardeners.",
    };

    // Scroll to reviews function
    const scrollToReviews = () => {
        document
            .getElementById("reviews-section")
            .scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="bg-gradient-to-b from-green-100 to-white mt-10 px-8 py-16">
            {product && (
                <div className="max-w-screen-xl mx-auto bg-white rounded-xl shadow-xl p-10 space-y-16">
                    {/* Hero Section */}
                    <div className="lg:flex lg:justify-between items-center gap-12">
                        <div className="relative overflow-hidden rounded-lg shadow-xl max-w-[500px] mx-auto lg:w-1/2">
                            <img
                                className="w-full h-[400px] object-cover rounded-xl transform transition-transform duration-500 ease-in-out hover:scale-105"
                                src={product.image_url}
                                alt={product.name}
                            />
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-5xl font-bold text-gray-800">
                                {product.name}
                            </h2>
                            <p className="text-lg text-gray-600">
                                {product.description}
                            </p>

                            <div className="flex items-center space-x-4">
                                <span className="bg-blue-200 text-blue-800 px-6 py-2 rounded-xl text-sm font-semibold">
                                    {product.category}
                                </span>
                                <div className="flex items-center text-gray-700">
                                    <p className="text-2xl font-semibold mr-2">
                                        <Rating rating={product.rating} />
                                    </p>
                                    <button
                                        className="text-sm text-blue-600 ml-2 hover:text-blue-800"
                                        onClick={scrollToReviews}
                                    >
                                        See Reviews
                                    </button>
                                </div>
                            </div>

                            {/* Price Section */}
                            <div className="flex items-center space-x-6">
                                {product.discounted_price ? (
                                    <div className="flex items-center space-x-6">
                                        <span className="text-4xl font-bold text-green-600">
                                            ₹{product.discounted_price}
                                        </span>
                                        <span className="text-xl line-through text-gray-500">
                                            ₹{product.price}
                                        </span>
                                        <span className="text-xl text-red-500 font-semibold">
                                            {Math.round(
                                                ((product.price -
                                                    product.discounted_price) /
                                                    product.price) *
                                                    100
                                            )}
                                            % OFF
                                        </span>
                                    </div>
                                ) : (
                                    <span className="text-4xl font-semibold text-gray-800">
                                        ₹{product.price}
                                    </span>
                                )}
                            </div>

                            {/* Add to Cart Button */}
                            <button className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg py-4 transition duration-300 shadow-md">
                                Add To Cart
                                {cartSVG}
                            </button>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Left Column: Product Details with Icons */}
                        <div className="space-y-6">
                            {/* Title */}
                            <h3 className="text-3xl font-semibold text-gray-900">
                                Product Details
                            </h3>

                            {/* Product Info Cards */}
                            <div className="grid grid-cols-1 gap-6">
                                {/* Weight Card */}
                                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4 border-l-4 border-green-500">
                                    <div className="w-12 h-12 bg-green-50 flex items-center justify-center rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="text-green-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm1-14H11V6h2v2zm0 4H11v6h2v-6z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-600 font-medium">
                                            Weight
                                        </p>
                                        <p className="text-xl text-gray-800">
                                            {product.weight}
                                        </p>
                                    </div>
                                </div>

                                {/* Benefits Card */}
                                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4 border-l-4 border-blue-500">
                                    <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="text-blue-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 13H11V7h2v8zm0 4H11v-2h2v2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-600 font-medium">
                                            Benefits
                                        </p>
                                        <ul className="list-disc pl-6 text-gray-800">
                                            {product.benefits.map(
                                                (benefit, index) => (
                                                    <li
                                                        key={index}
                                                        className="text-lg"
                                                    >
                                                        {benefit}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </div>

                                {/* Usage Instructions Card */}
                                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4 border-l-4 border-yellow-500">
                                    <div className="w-12 h-12 bg-yellow-50 flex items-center justify-center rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="text-yellow-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-6h2v-2h-2v2zm0-4h2V7h-2v3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-600 font-medium">
                                            Usage Instructions
                                        </p>
                                        <p className="text-xl text-gray-800">
                                            {product.usage_instructions}
                                        </p>
                                    </div>
                                </div>

                                {/* Storage Instructions Card */}
                                <div className="bg-white shadow-lg rounded-xl p-6 flex items-center space-x-4 border-l-4 border-purple-500">
                                    <div className="w-12 h-12 bg-purple-50 flex items-center justify-center rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="text-purple-500"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-6h2v-2h-2v2zm0-4h2V7h-2v3z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-lg text-gray-600 font-medium">
                                            Storage Instructions
                                        </p>
                                        <p className="text-xl text-gray-800">
                                            {product.storage_instructions}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Additional Information & Ideal For */}
                        <div className="space-y-6">
                            {/* Ideal For Section */}
                            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                                <h4 className="text-2xl font-semibold text-gray-800">
                                    Ideal For
                                </h4>
                                <ul className="list-disc pl-6 text-gray-800 space-y-2">
                                    {product.ideal_for.map((item, index) => (
                                        <li key={index} className="text-lg">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Additional Information Section */}
                            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
                                <h4 className="text-2xl font-semibold text-gray-800">
                                    Additional Information
                                </h4>
                                <p className="text-lg text-gray-800">
                                    {product.additional_information}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Customer Reviews Section */}
                    <div id="reviews-section" className="mt-20">
                        <h3 className="text-3xl font-bold text-gray-800 mb-12">
                            Customer Reviews
                        </h3>

                        {/* Review List */}
                        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    {/* User Info */}
                                    <div className="flex items-center space-x-6">
                                        <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                                            {review.image ? (
                                                <img
                                                    src={review.image}
                                                    alt={review.name}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-xl text-gray-500">
                                                    {review.name[0]}
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <p className="text-xl font-semibold text-gray-800">
                                                {review.name}
                                            </p>
                                            <div className="flex items-center space-x-2">
                                                <Rating
                                                    rating={review.rating}
                                                />
                                                <span className="text-lg font-medium text-gray-600">
                                                    ({review.rating.toFixed(1)})
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Review Comment */}
                                    <div className="mt-6 text-lg text-gray-700">
                                        <p>{review.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};
