import React from 'react';
import { Link } from 'react-router-dom';
import emptyCart from '../../../assets/empty-cart.jpg';  // Make sure this is a good-quality, optimized image

export const EmptyCart = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50">
      <div className="text-center">
        <img
          src={emptyCart}
          alt="Empty Cart"
          className="w-4/5 md:w-2/5 mx-auto mb-8 rounded-lg shadow-xl"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-lg text-gray-500 mb-6">
          Don’t worry! You can always add products to your cart and continue shopping.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/shop"
            className="inline-block px-6 py-3 bg-primary-500 text-white text-lg rounded-md shadow-md hover:bg-primary-600 transition duration-300 transform hover:scale-105"
          >
            Browse Products
          </Link>

          <Link
            to="/"
            className="inline-block px-6 py-3 bg-transparent border-2 border-primary-500 text-primary-500 text-lg rounded-md shadow-md hover:bg-primary-100 transition duration-300 transform hover:scale-105"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
};
