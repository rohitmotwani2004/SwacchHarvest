import { Rating } from "../../../components/Elements/Rating";
import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
    const cartSVG = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#FFF"
            viewBox="0 0 256 256"
        >
            <path d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"></path>
        </svg>
    );

    return (
        <div className="product-card bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105 dark:bg-gray-800 dark:border-gray-600 w-full max-w-xs mx-auto">
            <Link to={`/products/${product.id}`}>
                <img
                    className="product-image w-full h-60 object-cover rounded-t-lg"
                    src={product.image_url}
                    alt={product.name}
                />
            </Link>
            <div className="product-details px-6 py-4 text-center">
                <Link to={`/products/${product.id}`}>
                    <h5 className="product-title text-2xl font-semibold text-gray-900 dark:text-white hover:text-primary-500 mb-2">
                        {product.name}
                    </h5>
                </Link>

                <div className="product-rating mb-2 mx-[25%]">
                    <Rating rating={product.rating} />
                </div>

                <div className="price-info mb-4">
                    {product.discounted_price ? (
                        <div className="discounted-price">
                            <span className="original-price text-sm font-medium text-gray-500 line-through">
                                ₹{product.price}
                            </span>
                            <span className="current-price text-2xl font-bold text-primary-500">
                                ₹{product.discounted_price}
                            </span>
                        </div>
                    ) : (
                        <span className="current-price text-2xl font-bold text-gray-900 dark:text-white">
                            ₹{product.price}
                        </span>
                    )}
                </div>

                <button
                    onClick={() => {}}
                    className="add-to-cart-btn w-full py-2.5 px-5 flex items-center justify-center bg-primary-400 text-white font-semibold rounded-lg hover:bg-primary-500 dark:bg-primary-600 dark:hover:bg-primary-400"
                >
                    Add To Cart
                    <span className="cart-icon ml-2">{cartSVG}</span>
                </button>
            </div>
        </div>
    );
};
