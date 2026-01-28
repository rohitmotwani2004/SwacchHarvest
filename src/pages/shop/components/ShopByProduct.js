import React from "react";
import { ShoppingCart } from "@phosphor-icons/react";
import FarmProduceImg from "../../../assets/farm-produce.jpg";
import FarmingEssentialsImg from "../../../assets/farming-essentials.jpg";
import { Link, useNavigate } from "react-router-dom";

export const ShopByProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-primary-800 from-primary-400 mb-16">
        Shop by Product
      </h2>

      {/* Product Cards Container (Flexbox Layout) */}
      <div className="container mx-auto px-4 sm:px-8 flex justify-center gap-12">
        {/* Farming Essentials Card */}
        <div className="group relative flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out max-w-xs">
          <Link to="/shop/farming-essentials">
            <img
              src={FarmingEssentialsImg}
              alt="Farming Essentials"
              className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </Link>
          <div className="p-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Farming Essentials
            </h3>
            <p className="text-gray-500 text-center mb-6">
              Equip your farm with high-quality essentials — tools, machinery, and supplies for the modern farmer.
            </p>
            <button
              onClick={() => navigate("/shop/farming-essentials")}
              className="flex items-center justify-center bg-primary-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md transform transition-all duration-300 ease-in-out hover:bg-primary-700 hover:scale-105"
            >
              Shop Now
              <ShoppingCart className="ml-2" size="1.8rem" />
            </button>
          </div>
        </div>

        {/* Farm Produce Card */}
        <div className="group relative flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out max-w-xs">
          <Link to="/shop/farm-produce">
            <img
              src={FarmProduceImg}
              alt="Farm Produce"
              className="w-full h-72 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </Link>
          <div className="p-6 flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Farm-Fresh Produce
            </h3>
            <p className="text-gray-500 text-center mb-6">
              Experience the freshest farm produce, sourced directly from local farms. Taste the difference.
            </p>
            <button
              onClick={() => navigate("/shop/farm-produce")}
              className="flex items-center justify-center bg-primary-600 text-white py-3 px-6 rounded-lg text-lg font-semibold shadow-md transform transition-all duration-300 ease-in-out hover:bg-primary-700 hover:scale-105"
            >
              Shop Now
              <ShoppingCart className="ml-2" size="1.8rem" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
