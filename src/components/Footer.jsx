import React from "react";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaTwitterSquare,
    FaLinkedin,
    FaInstagramSquare,
    FaGithubSquare,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-gray-900">
            <div>
                <h1 className="w-full text-4xl font-bold text-blue-500">Banned.</h1>
                <p className="py-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="flex justify-between md:w-3/4 my-6">
                    <FaFacebookSquare size={30} className="hover:text-blue-600 transition duration-300" />
                    <FaTwitterSquare size={30} className="hover:text-blue-400 transition duration-300" />
                    <FaLinkedin size={30} className="hover:text-blue-700 transition duration-300" />
                    <FaInstagramSquare size={30} className="hover:text-pink-500 transition duration-300" />
                    <FaGithubSquare size={30} className="hover:text-gray-500 transition duration-300" />
                    <FaDribbbleSquare size={30} className="hover:text-pink-400 transition duration-300" />
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-between mt-6">
                <div>
                    <h6 className="font-medium text-gray-400">Solutions</h6>
                    <ul>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Analytics</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Marketing</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Commerce</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Support</h6>
                    <ul>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Pricing</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Documentation</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Guides</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">API status</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-gray-400">Company</h6>
                    <ul>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">About</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Blog</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Jobs</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Press</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Careers</li>
                    </ul>
                </div>
                <div className="mr-4">
                    <h6 className="font-medium text-gray-400">Legal</h6>
                    <ul>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Claim</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Policy</li>
                        <li className="py-2 text-sm hover:text-blue-500 transition duration-300">Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
