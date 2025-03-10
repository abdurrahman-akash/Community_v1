import { motion } from "framer-motion";
import { Button } from "../../ui/button";
import Header from "../header/Header";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import styles from "./Hero.module.css";
// import ParticlesBackground from "./ParticlesBackground";

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
      {/* <ParticlesBackground /> */}
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

      {/* <div className="absolute top-bottom left-0 right-0 z-10">
        <svg className="w-full h-auto">
          <path
            className={`wave ${styles.wave1}`}
            fill="#ffffff"
            fillOpacity="0.4"
            d="M0,224L60,218.7C120,213,240,203,360,213.3C480,224,600,256,720,256C840,256,960,224,1080,186.7C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
          <path
            className={`wave ${styles.wave2}`}
            fill="#ffffff"
            fillOpacity="0.2"
            d="M0,256L60,240C120,224,240,192,360,176C480,160,600,160,720,176C840,192,960,224,1080,234.7C1200,245,1320,235,1380,229.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </section>
  );
}

export default Hero;
