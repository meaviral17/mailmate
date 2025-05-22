"use client";
import { ICONS } from "@/shared/utils/icons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const Grow = () => {
  const router = useRouter();
  const [resourceTitle, setResourceTitle] = useState("");
  const [open, setOpen] = useState(false);

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  const handleCreateResource = () => {
    if (resourceTitle.length === 0) {
      toast.error("Enter a resource title to continue!");
    } else {
      const formattedTitle = resourceTitle.replace(/\s+/g, "-").replace(/&/g, "-");
      router.push(`/dashboard/resources?title=${formattedTitle}`);
    }
  };

  return (
    <div className="p-5 w-full h-screen bg-[#f9fafb]">
      <h1 className="text-2xl text-surface-900 font-medium">Grow Your Audience</h1>
      <p className="opacity-[.7] text-sm pt-2">
        Discover tips and strategies to expand your reach and grow your audience effectively.
      </p>
      <div className="w-full flex flex-col mt-5 space-y-5">
        {/* Section 1: Guidelines */}
        <div className="w-full bg-white border rounded p-5">
          <h5 className="font-medium text-lg">Guidelines</h5>
          <ul className="list-disc pl-5 mt-3 text-sm opacity-[.8]">
            <li>Post consistently to keep your audience engaged.</li>
            <li>Focus on creating high-quality, valuable content.</li>
            <li>Use analytics to understand what resonates with your audience.</li>
            <li>Leverage social media to promote your newsletter.</li>
            <li>Encourage your subscribers to share your content.</li>
          </ul>
        </div>

        {/* Section 2: Tips */}
        <div className="w-full bg-white border rounded p-5">
          <h5 className="font-medium text-lg">Tips for Growth</h5>
          <ul className="list-disc pl-5 mt-3 text-sm opacity-[.8]">
            <li>Offer exclusive content to your subscribers.</li>
            <li>Collaborate with other creators to expand your reach.</li>
            <li>Optimize your signup forms for better conversions.</li>
            <li>Run targeted ad campaigns to attract new subscribers.</li>
            <li>Engage with your audience through comments and feedback.</li>
          </ul>
        </div>

        {/* Section 3: Resources */}
        <div className="w-full bg-white border rounded p-5">
          <h5 className="font-medium text-lg">Resources</h5>
          <p className="text-sm opacity-[.7]">
            Explore these resources to learn more about growing your audience:
          </p>
          <div className="mt-3 space-y-2">
            <button
              onClick={() => handleNavigate("/dashboard/blog")}
              className="w-full px-3 py-2 bg-transparent border rounded-lg flex items-center justify-between text-sm"
            >
              <span>Blog</span>
              <span>{ICONS.link}</span>
            </button>
            <button
              onClick={() => handleNavigate("/dashboard/case-studies")}
              className="w-full px-3 py-2 bg-transparent border rounded-lg flex items-center justify-between text-sm"
            >
              <span>Case Studies</span>
              <span>{ICONS.link}</span>
            </button>
            <button
              onClick={() => handleNavigate("/dashboard/webinars")}
              className="w-full px-3 py-2 bg-transparent border rounded-lg flex items-center justify-between text-sm"
            >
              <span>Webinars</span>
              <span>{ICONS.link}</span>
            </button>
          </div>
        </div>
    </div>
    </div>
  );
};

export default Grow;