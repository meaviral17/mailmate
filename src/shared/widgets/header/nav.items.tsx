"use client";

import { navItems } from "@/app/configs/constants";

const NavItems = () => {
  const handleClick = (index: number) => {
    if (index === 1) {
      // Scroll to the Pricing section
      const pricingSection = document.getElementById("pricing-section");
      if (pricingSection) {
        const offset = -70; // Adjust this value for 1–2 pixels above
        const elementPosition = pricingSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition + offset,
          behavior: "smooth",
        });
      }
    } else {
      // Navigate to /dashboard
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="w-full hidden md:flex items-center">
      {navItems.map((i: NavItems, index: number) => (
        <button
          key={index}
          onClick={() => handleClick(index)}
          className="px-5 text-lg"
        >
          {i.title}
        </button>
      ))}
    </div>
  );
};

export default NavItems;