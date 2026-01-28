import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import bcrypt from "bcryptjs";

// Helper functions for cookie handling
const setCookie = (name, value, days) => {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));  // Set expiration date
  let expires = "expires=" + d.toUTCString();
  document.cookie = `${name}=${value};${expires};path=/`;
};

// Get a cookie value
const getCookie = (name) => {
  const nameEq = name + "=";
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEq) === 0) return c.substring(nameEq.length, c.length);
  }
  return "";
};

// Delete a cookie
const deleteCookie = (name) => {
  setCookie(name, "", -1); // Expire cookie immediately
};

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const userEmail = email.current.value;
    const userPassword = password.current.value;

    // Fetch users from the server
    const response = await fetch("http://localhost:5000/users?email=" + userEmail);
    const users = await response.json();

    if (users.length === 0) {
      alert("Invalid credentials.");
      return;
    }

    const user = users[0]; // Assume one user is returned

    // Compare the input password with the hashed password from the server
    const isPasswordValid = await bcrypt.compare(userPassword, user.password);

    if (isPasswordValid) {
      // Store login state in a cookie (set user id cookie)
      setCookie("user_id", user.id, 7);  // Store user id for 7 days

      // Update the user's isLogin state to true
      const updatedUser = { ...user, isLogin: true };

      // Update the user object on the server
      const updateResponse = await fetch(`http://localhost:5000/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      });

      if (updateResponse.ok) {
        alert("Login successful!");
        navigate("/"); // Navigate to the home page or dashboard
      } else {
        alert("Some error occurred while logging in, please contact admin.");
      }
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-800 p-8 space-y-6">
        <Link
          to="/"
          className="flex justify-center items-center text-3xl font-semibold text-primary-600 dark:text-white mb-6"
        >
          KisanSetu 
        </Link>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-4">
          Sign in to your account
        </h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Your email
            </label>
            <input
              ref={email}
              type="email"
              id="email"
              name="email"
              placeholder="name@company.com"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>
            <div className="relative mt-2">
              <input
                ref={password}
                type={showPass ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••"
                minLength="8"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-gray-300"
              >
                {showPass ? (
                  <EyeSlash weight="bold" size={24} />
                ) : (
                  <Eye weight="bold" size={24} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 transition duration-200"
          >
            Sign In
          </button>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            Don’t have an account yet?{" "}
            <Link
              to="/register"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
