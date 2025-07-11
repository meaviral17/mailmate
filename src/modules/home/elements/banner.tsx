"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter

const Banner = () => {
  const router = useRouter(); // Initialize useRouter

  const handleGuestMode = () => {
    router.push("/dashboard"); // Navigate to /dashboard
  };

  const handleLogin = () => {
    router.push("/sign-in"); // Navigate to /sign-in
  };

  return (
    <div className="bg-[#F4E7E1] h-[95vh]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="214"
        height="214"
        fill="none"
        className="absolute block -top-3 -left-24 md:-left-0"
      >
        <path
          fill="#F092DD"
          stroke="#0B0D2A"
          strokeWidth="2"
          d="M177.711 31.85c2.435-2.017 5.683 1.232 3.667 3.666L136.329 89.9c-2.359 2.848-.567 7.175 3.115 7.52l70.309 6.601c3.148.296 3.148 4.89 0 5.185l-70.309 6.601c-3.682.346-5.474 4.673-3.115 7.521l45.049 54.383c2.016 2.435-1.232 5.683-3.667 3.667l-54.383-45.049c-2.848-2.359-7.175-.567-7.521 3.115l-6.601 70.309c-.295 3.148-4.889 3.148-5.185 0l-6.6-70.309c-.346-3.682-4.673-5.474-7.521-3.115l-54.384 45.049c-2.434 2.016-5.683-1.232-3.666-3.667l45.048-54.383c2.36-2.848.568-7.175-3.115-7.521l-70.309-6.601c-3.147-.295-3.147-4.889 0-5.185l70.31-6.6c3.681-.346 5.474-4.673 3.114-7.521L31.85 35.516c-2.017-2.434 1.232-5.683 3.666-3.666L89.9 76.898c2.848 2.36 7.175.568 7.52-3.115l6.601-70.309c.296-3.147 4.89-3.147 5.185 0l6.601 70.31c.346 3.681 4.673 5.474 7.521 3.114l54.383-45.048Z"
        ></path>
      </svg>

      <div className="w-full h-full flex justify-center items-center relative overflow-hidden">
        <Image
          src="https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1920,quality=75/www/homepage/MobileHero.png"
          alt=""
          width={800}
          height={500}
          className="w-[80%] object-cover spin-slow"
        />

        <div className="absolute text-center px-4">
          <h1 className="font-clashDisplay uppercase font-bold text-cyber-ink text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] max-w-6xl mx-auto z-10">
            THE ULTIMATE AI NEWSLETTER PLATFORM BUILT FOR <span className="font-style">GROWTH</span>
          </h1>

          <h3 className="text-3xl mt-6">Built for creators. Backed by experts.</h3>

          <div className="flex w-full justify-center mt-6 gap-x-2">
            <Button
              color="secondary"
              className="text-xl !p-6"
              onClick={handleGuestMode} // Navigate to /dashboard
            >
              Get Started as Guest
            </Button>
            <Button
              color="secondary"
              className="text-xl !p-6"
              onClick={handleLogin} // Navigate to /sign-in
            >
              Login to Continue
            </Button>
          </div>

          <h5 className="mt-4 text-lg">Start a 30-day free trial</h5>
        </div>
      </div>
    </div>
  );
};

export default Banner;