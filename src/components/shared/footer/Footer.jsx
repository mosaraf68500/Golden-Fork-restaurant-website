import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-white">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row w-full">
                
                {/* Contact Us Section */}
                <div className="bg-[#1F2937] w-full md:w-1/2 p-12 md:p-20 text-center">
                    <h3 className="text-2xl md:text-3xl font-medium mb-6 uppercase">Contact Us</h3>
                    <div className="space-y-2 text-sm md:text-base opacity-90">
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>

                {/* Follow Us Section */}
                <div className="bg-[#111827] w-full md:w-1/2 p-12 md:p-20 text-center">
                    <h3 className="text-2xl md:text-3xl font-medium mb-6 uppercase">Follow Us</h3>
                    <p className="mb-6 opacity-90">Join us on social media</p>
                    <div className="flex justify-center items-center gap-6">
                        <a href="#" className="hover:text-gray-400 transition-all text-2xl">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-all text-2xl">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-gray-400 transition-all text-2xl">
                            <FaTwitter />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Section */}
            <div className="bg-[#151515] py-4 text-center text-sm md:text-base">
                <p>Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;