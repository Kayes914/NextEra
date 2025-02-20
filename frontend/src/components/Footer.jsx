import React from 'react'
import { FaGithub, FaLinkedin, FaFacebookF, FaWhatsapp } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#181824] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">NextEra</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses with innovative digital solutions. We transform ideas into exceptional digital experiences.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1E1E2E] flex items-center justify-center hover:bg-[#00D1FF] transition-colors duration-300">
                <FaGithub className="text-lg" />
              </a>
              <a href="https://www.linkedin.com/company/nextera-inc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1E1E2E] flex items-center justify-center hover:bg-[#00D1FF] transition-colors duration-300">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="https://www.facebook.com/nexterax/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1E1E2E] flex items-center justify-center hover:bg-[#00D1FF] transition-colors duration-300">
                <FaFacebookF className="text-lg" />
              </a>
              <a href="https://wa.me/+8801309011154" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#1E1E2E] flex items-center justify-center hover:bg-[#00D1FF] transition-colors duration-300">
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-[#00D1FF] transition-colors duration-300 cursor-pointer">Web Development</li>
              <li className="text-gray-400 hover:text-[#00D1FF] transition-colors duration-300 cursor-pointer">Mobile App Development</li>
              <li className="text-gray-400 hover:text-[#00D1FF] transition-colors duration-300 cursor-pointer">UI/UX Design</li>
              <li className="text-gray-400 hover:text-[#00D1FF] transition-colors duration-300 cursor-pointer">Digital Marketing</li>
              <li className="text-gray-400 hover:text-[#00D1FF] transition-colors duration-300 cursor-pointer">Graphic Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <HiLocationMarker className="text-[#00D1FF] text-xl" />
                <span className="text-gray-400">Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <HiPhone className="text-[#00D1FF] text-xl" />
                <span className="text-gray-400">+8801309011154</span>
              </li>
              <li className="flex items-center space-x-3">
                <HiMail className="text-[#00D1FF] text-xl" />
                <span className="text-gray-400">contact@nextera.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 sm:mt-12">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} NextEra. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-[#00D1FF] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-[#00D1FF] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 