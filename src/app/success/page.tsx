"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/"); // Navigate to the homepage
  };

  return (
    <div className="w-full h-screen grid place-items-center bg-gradient-to-r from-green-50 to-green-100">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h5 className="text-2xl font-bold text-green-600 mb-4">
          Congratulations! 🎉
        </h5>
        <p className="text-gray-700 text-lg">
          You have successfully subscribed to our newsletter.
        </p>
        <button
          onClick={handleGoHome}
          className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default Page;