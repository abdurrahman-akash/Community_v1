'use client'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-12 z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-50"></div>

      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-3xl font-extrabold text-white">Tech Community BD</h3>
            <p className="mt-4 text-gray-400 leading-relaxed">
              Empowering developers, designers, and tech enthusiasts all over Bangladesh. 
              Connect, learn, and grow with us.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Events</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              {[
                { icon: <FaFacebookF />, color: "hover:bg-blue-600" },
                { icon: <FaTwitter />, color: "hover:bg-blue-400" },
                { icon: <FaInstagram />, color: "hover:bg-pink-500" },
                { icon: <FaLinkedin />, color: "hover:bg-blue-700" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`p-3 rounded-full bg-white/10 transition ${item.color}`}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center border-t border-gray-700 pt-6 text-gray-500 text-sm">
          © {new Date().getFullYear()} Tech Community BD. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
