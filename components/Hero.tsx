"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the title and paragraph
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 }, // Start state
      { opacity: 1, y: 0, duration: 1 } // End state
    );

    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 50 }, // Start state
      { opacity: 1, y: 0, duration: 1, delay: 0.5 } // End state with delay
    );
  }, []);

  return (
    <section
      id="#"
      className="sticky top-0 p-5 bg-gradient-to-br from-pink-300 to-pastel-pink h-screen relative overflow-hidden"
    >
      <div className="flex container mx-auto px-10 h-full items-center justify-center">
        <div className="text-center text-black">
          <h2 ref={titleRef} className="text-5xl font-bold mb-5">
            Selamat Datang di Dapur Indah
          </h2>
          <p
            ref={paragraphRef}
            className="mt-5 text-lg max-w-5xl mx-auto drop-shadow-md"
          >
            Nikmati masakan olahan yang menggugah selera, disiapkan dengan bahan
            segar dan cinta. Di Dapur Indah, kami percaya setiap hidangan
            membawa kebahagiaan. Temukan cita rasa unik kami dan rayakan momen
            spesial Anda bersama kami!
          </p>
        </div>
      </div>

      {/* Optional decorative elements */}
      <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
        <div className="w-full h-full bg-pink-200 opacity-20 rounded-full transform -translate-x-1/4 -translate-y-1/4"></div>
        <div className="w-full h-full bg-pink-300 opacity-30 rounded-full transform translate-x-1/4 translate-y-1/4"></div>
      </div>
    </section>
  );
};

export default Hero;
