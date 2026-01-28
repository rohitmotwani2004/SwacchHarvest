import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <main className='dark:bg-gray-800 bg-gray-100 mt-[6%] py-10'>
        <div className='container my-7 mx-auto p-6 rounded-lg shadow-lg bg-white'>
            <h1 className='text-4xl text-center text-primary-500 font-bold mb-4'>About KisanSetu </h1>

            <p className='text-lg text-gray-700 mb-6'>
                Welcome to KisanSetu  - your all-in-one platform for organic farming! We are committed to empowering farmers with the best tools, resources, and knowledge to thrive in sustainable agriculture.
            </p>

            <h2 className="text-2xl text-primary-400 font-semibold mb-2">Our Mission</h2>
            <p className='text-lg text-gray-700 mb-6'>
                At KisanSetu , our mission is to promote organic farming practices that enrich the soil, produce healthy crops, and support eco-friendly initiatives. We strive to deliver exceptional resources and foster a community of sustainable farmers.
            </p>

            <h2 className="text-2xl text-primary-400 font-semibold mb-2">What Sets Us Apart</h2>
            <p className='text-lg text-gray-700 mb-4'>
                <strong>Comprehensive E-commerce:</strong> Discover a wide range of organic farming tools and high-quality produce available for online purchase. We ensure that our products are sourced from trusted suppliers who prioritize sustainability.
            </p>
            <p className='text-lg text-gray-700 mb-4'>
                <strong>Government Schemes Information:</strong> Stay informed about various government schemes and subsidies available for organic farming, helping you make the most of available resources.
            </p>
            <p className='text-lg text-gray-700 mb-4'>
                <strong>Educational Resources:</strong> Access a library of educational videos designed for new farmers. Our tutorials cover everything from soil health to pest management, empowering you with the knowledge you need to succeed.
            </p>

            <h2 className="text-2xl text-primary-400 font-semibold mb-2">Our Team</h2>
            <p className='text-lg text-gray-700 mb-6'>
                The KisanSetu  team comprises passionate individuals dedicated to promoting organic farming. We are constantly exploring innovative practices and sharing our insights to help you grow sustainably.
            </p>

            <h2 className="text-2xl text-primary-400 font-semibold mb-2">Connect with Us</h2>
            <p className='text-lg text-gray-700 mb-4'>
                Join our community on social media to stay updated on the latest organic farming trends, product launches, and helpful tips. Follow us on 
                <Link className='text-primary-500 hover:underline' to='https://instagram.com'> Instagram</Link>, 
                <Link className='text-primary-500 hover:underline' to='https://facebook.com'> Facebook</Link>, and 
                <Link className='text-primary-500 hover:underline' to='https://twitter.com'> Twitter</Link> for more insights.
            </p>

            <h2 className="text-2xl text-primary-400 font-semibold mb-2">Contact Us</h2>
            <p className='text-lg text-gray-700 mb-6'>
                We’d love to hear from you! For questions or feedback, reach out to us at 
                <Link className='text-primary-500 hover:underline' to='mailto:info@sisansetu .com'> info@sisansetu .com</Link>. Our team is ready to assist you on your organic farming journey.
            </p>

            <p className='text-lg text-gray-700'>
                Thank you for choosing KisanSetu  as your trusted partner in organic farming. Together, let's cultivate a greener future!
                <br />
                Happy Farming,
                <br />
                The KisanSetu  Team
            </p>
        </div>
    </main>
  );
};
