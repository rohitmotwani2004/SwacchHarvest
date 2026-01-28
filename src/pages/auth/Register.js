import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import bcrypt from "bcryptjs"; // Import bcryptjs for password hashing

export const Register = () => {
  const email = useRef();
  const name = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const role = useRef();
  const farmSize = useRef();
  const cropType = useRef();
  const location = useRef();
  const upiId = useRef();
  const businessName = useRef();
  const licenseNumber = useRef();
  const serviceArea = useRef();

  const [showPass, setShowPass] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password.current.value !== confirmPassword.current.value) {
      alert("Passwords do not match!");
      return;
    }

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password.current.value, 10);

    const userData = {
      name: name.current.value,
      email: email.current.value,
      password: hashedPassword, // Use hashed password
      role: role.current.value,
      farmSize: farmSize.current?.value,
      cropType: cropType.current?.value,
      location: location.current?.value,
      upiId: upiId.current?.value,
      businessName: businessName.current?.value,
      licenseNumber: licenseNumber.current?.value,
      serviceArea: serviceArea.current?.value,
    };

    // Send the form data to the backend
    const response = await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      alert("Account created successfully!");
      navigate('/login');
      
    } else {
      alert("Error creating account!");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center py-12 mt-10">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="text-center mb-6">
          <Link to="/" className="text-2xl font-semibold text-primary-600 dark:text-white">
            KisanSetu 
          </Link>
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
          Create an Account
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Your Name
            </label>
            <input
              ref={name}
              type="text"
              name="name"
              id="name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Your Email
            </label>
            <input
              ref={email}
              type="email"
              name="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Select Role
            </label>
            <select
              ref={role}
              name="role"
              id="role"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              onChange={handleRoleChange}
              required
            >
              <option value="" disabled selected>Select your role</option>
              <option value="farmer">Farmer</option>
              <option value="customer">Customer</option>
              <option value="distributor">Distributor</option>
            </select>
          </div>
          {selectedRole === "farmer" && (
            <>
              <div>
                <label htmlFor="farm-size" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Farm Size (acres)
                </label>
                <input
                  ref={farmSize}
                  type="number"
                  id="farm-size"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="crop-type" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Crop Type
                </label>
                <input
                  ref={cropType}
                  type="text"
                  id="crop-type"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Location
                </label>
                <input
                  ref={location}
                  type="text"
                  id="location"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
            </>
          )}
          {selectedRole === "customer" && (
            <div>
              <label htmlFor="upi-id" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                UPI ID
              </label>
              <input
                ref={upiId}
                type="text"
                id="upi-id"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="you@upi"
                required
              />
            </div>
          )}
          {selectedRole === "distributor" && (
            <>
              <div>
                <label htmlFor="business-name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Business Name
                </label>
                <input
                  ref={businessName}
                  type="text"
                  id="business-name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="license-number" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Business License Number
                </label>
                <input
                  ref={licenseNumber}
                  type="text"
                  id="license-number"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="service-area" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Service Area
                </label>
                <input
                  ref={serviceArea}
                  type="text"
                  id="service-area"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
            </>
          )}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Your Password
            </label>
            <div className="relative">
              <input
                ref={password}
                type={showPass ? "text" : "password"}
                name="password"
                id="password"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-3 text-gray-600 dark:text-gray-400 py-3"
              >
                {showPass ? <EyeSlash size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Confirm Password
            </label>
            <input
              ref={confirmPassword}
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg px-5 py-3 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create Account
            </button>
          </div>
          <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-primary-600 hover:underline dark:text-primary-500">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
