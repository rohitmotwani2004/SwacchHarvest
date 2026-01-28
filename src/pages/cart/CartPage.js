import { Trash } from "@phosphor-icons/react";
import React, { useState } from "react";
import { EmptyCart } from "./components/EmptyCart";

// Example of products added to the cart
const initialCartItems = [
  {
    id: 1,
    name: "Organic Soil Conditioner",
    image_url: "/product-images/product_1.jpg",
    price: 350,
    quantity: 2, // Example quantity
    description:
      "This soil conditioner is made from organic matter and natural minerals, designed to improve soil structure and fertility. It helps retain moisture and provides essential nutrients to plants.",
    rating: 4.3,
  },
  {
    id: 5,
    name: "Drip Irrigation System for Organic Gardens",
    image_url: "/product-images/product_5.jpg",
    price: 750,
    discounted_price: 750,
    quantity: 1,
    description:
      "A customizable drip irrigation system designed for small to medium-sized organic gardens. It conserves water and delivers it directly to plant roots.",
    rating: 4,
  },
  {
    id: 8,
    name: "Organic Mulch (Coconut Coir)",
    image_url: "/product-images/product_8.jpg",
    price: 320,
    quantity: 3,
    description:
      "Organic mulch made from coconut coir, perfect for retaining moisture and suppressing weeds.",
    rating: 4,
  },
];

export const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(""); // For managing payment method selection

  // Calculate total price for each item
  const calculateItemTotal = (item) => {
    return item.discounted_price ? item.discounted_price : item.price * item.quantity;
  };

  // Calculate the subtotal of the cart
  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + calculateItemTotal(item), 0);
  };

  // Handle quantity change
  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  // Remove item from the cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Open the fake payment gateway modal
  const handleCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  // Close the fake payment gateway modal
  const closePaymentModal = () => {
    setIsCheckoutModalOpen(false);
    setPaymentMethod(""); // Reset payment method selection when closing the modal
  };

  // Handle payment method selection
  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <main className="pt-16 bg-gray-50 px-8 mt-10">
      <div className="max-w-screen-xl mx-auto bg-white rounded-lg shadow-xl p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Your Cart</h2>

        {/* Check if the cart is empty */}
        {cartItems.length === 0 ? (
          <EmptyCart/>
        ) : (
          <div className="space-y-8">
            {/* Cart Items */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                {/* Product Image and Info */}
                <div className="flex items-center space-x-8">
                  <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-sm text-yellow-500">{item.rating} ★</span>
                    </div>
                  </div>
                </div>

                {/* Quantity & Price */}
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-4">
                    <button
                      className="w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex justify-center items-center"
                      onClick={() => handleQuantityChange(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <button
                      className="w-8 h-8 bg-gray-200 text-gray-800 rounded-full flex justify-center items-center"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <div className="text-xl font-semibold text-gray-800">
                    ₹{calculateItemTotal(item).toLocaleString()}
                  </div>

                  {/* Remove Item */}
                  <button
                    className="text-red-500 hover:text-red-600 font-semibold"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <Trash size={32} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="flex justify-between items-center mt-12 bg-gray-100 p-8 rounded-lg shadow-md">
            <div className="text-lg font-semibold text-gray-800">
              <p className="mb-2">Subtotal: ₹{calculateSubtotal().toLocaleString()}</p>
              <p className="mb-2 text-sm text-gray-600">Shipping: Free (For orders above ₹500)</p>
              <p className="text-2xl font-bold text-gray-800">
                Total: ₹{calculateSubtotal().toLocaleString()}
              </p>
            </div>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>

      {/* Payment Gateway Modal */}
      {isCheckoutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Gateway</h3>
            <p className="text-gray-600 mb-4">
              You are about to pay ₹{calculateSubtotal().toLocaleString()} for your order.
            </p>

            {/* Payment Method Selection */}
            <div className="space-y-4 mb-6">
              <div>
                <input
                  type="radio"
                  id="credit-card"
                  name="payment-method"
                  value="Credit Card"
                  checked={paymentMethod === "Credit Card"}
                  onChange={() => handlePaymentMethodChange("Credit Card")}
                  className="mr-2"
                />
                <label htmlFor="credit-card" className="text-lg">Credit Card</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="debit-card"
                  name="payment-method"
                  value="Debit Card"
                  checked={paymentMethod === "Debit Card"}
                  onChange={() => handlePaymentMethodChange("Debit Card")}
                  className="mr-2"
                />
                <label htmlFor="debit-card" className="text-lg">Debit Card</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="upi"
                  name="payment-method"
                  value="UPI"
                  checked={paymentMethod === "UPI"}
                  onChange={() => handlePaymentMethodChange("UPI")}
                  className="mr-2"
                />
                <label htmlFor="upi" className="text-lg">UPI</label>
              </div>
            </div>

            {/* Show input fields based on payment method */}
            {paymentMethod === "Credit Card" && (
              <>
                <div>
                  <label className="text-sm font-semibold">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </>
            )}
            {paymentMethod === "Debit Card" && (
              <>
                <div>
                  <label className="text-sm font-semibold">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold">Expiry Date</label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </>
            )}
            {paymentMethod === "UPI" && (
              <div>
                <label className="text-sm font-semibold">UPI ID</label>
                <input
                  type="text"
                  placeholder="example@upi"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            )}

            {/* Payment Actions */}
            <div className="flex justify-between items-center mt-6">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={closePaymentModal}
              >
                Pay Now
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={closePaymentModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
