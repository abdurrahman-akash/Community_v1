'use client'

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "../header/Header";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [text] = useTypewriter({
    words: ["Developers", "Designers", "Tech Enthusiasts"],
    loop: true,
    deleteSpeed: 50,
    typeSpeed: 100,
    delaySpeed: 3000,
  });

  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white overflow-hidden">

      <Header />

      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
          Tech Community BD
        </h1>
        <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto text-gray-200">
          Empowering <span className="font-bold text-lime-500">{text}</span>
          <Cursor cursorBlinking cursorColor="red" cursorStyle={"_"} />
          <br />
          all over Bangladesh. Connect, learn, and grow with us.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="default" size="lg" className="shadow-lg">
            Join the Community
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="shadow-lg text-gray-800"
          >
            About Us
          </Button>

        </div>
      </motion.div>

      {/* <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full -mb-1"
        >
          <path
            fill="#000000"
            fillOpacity="1"
            d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,144C672,139,768,181,864,192C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}

    </section>
  );
}

export default Hero;
