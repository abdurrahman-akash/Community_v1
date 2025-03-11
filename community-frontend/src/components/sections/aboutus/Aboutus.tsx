import Card from "@/components/components/Card";
import React from "react";



async function AboutusSection() {
  return (
    <section className="relative flex items-center justify-center h-auto bg-gradient-to-r py-8 from-gray-800 via-gray-900 to-black text-white overflow-hidden">
      <div className="absolute top-40 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight bg-gradient-to-r from-blue-400 via-pink-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md">
          What&apos;s in it for you?
        </h1>
        <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto text-gray-200">
          Join our community to learn new skills, connect with like-minded
          individuals, and grow your career.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Card name="Learn" description="We provide resources, tutorials, and workshops to help you learn new skills and technologies." image="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg" />
            <Card name="Connect" description="Connect with like-minded individuals, share your knowledge, and collaborate on projects." image="https://cdn.pixabay.com/photo/2016/03/31/23/23/communications-1297590_960_720.png" />
            <Card name="Grow" description="Grow your career, build your portfolio, and get hired by top companies in the industry." image="https://cdn.pixabay.com/photo/2013/07/18/10/56/graph-163509_960_720.jpg" />
        </div>
    </div>


      <div className="absolute inset-0 bg-black/50 backdrop-blur-md"></div>

    
    </section>
  );
}

export default AboutusSection;
