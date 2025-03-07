import { Button } from "../../ui/button";
import Header from "../header/Header";

function Hero() {
  const gradientVarient = {
    default: "bg-gradient-to-r from-emerald-400 to-lime-700",
    light: "bg-gradient-to-r from-sky-400 to-lime-700",
    orange: "bg-gradient-to-r from-orange-400 to-rose-700",
    purple: "bg-gradient-to-r from-violet-400 to-fuchsia-700",
    darkLight: "bg-gradient-to-l from-gray-400 to-gray-700",
    dark: "bg-gradient-to-r from-gray-800 via-gray-900 to-black",
    teal: "bg-gradient-to-r from-teal-400 to-yellow-200",
    primary: "bg-gradient-to-r from-emerald-400 to-lime-700",
    secondary:
      "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-[#3f3f46] via-[#71717a] to-[#d4d4d8]",
  };

  return (
    <section
      className={`relative flex items-center justify-center h-screen ${gradientVarient.dark} text-white`}
    >
        <Header />
     
      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
          Tech Community BD
        </h1>
        <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto text-gray-200">
          Empowering developers, designers, and tech enthusiasts all over
          Bangladesh. Connect, learn, and grow with us.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button variant="default" size="lg" className="shadow-lg">
            Join the Community
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="shadow-lg  text-gray-800"
          >
           About Us
          </Button>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}

export default Hero;
