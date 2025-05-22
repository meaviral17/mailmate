"use client";

import { subscribe } from "@/actions/add.subscribe";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const username: string = searchParams.get("username")!;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await subscribe({ email: value, username })
      .then((res) => {
        setLoading(false);
        if (res.error) {
          toast.error(res.error);
        } else {
          toast.success("You are successfully subscribed!");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    setValue("");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-700 capitalize">
          {username} Newsletter
        </h1>
        <p className="text-gray-600 mt-4 text-lg md:text-xl">
          Stay updated with the latest news and updates from {username}.
        </p>
      </div>
      <form
        className="flex flex-col md:flex-row w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type="email"
          name="email"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your email"
          className="px-4 py-3 w-full text-gray-700 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-3 bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:outline-none transition-all ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      <p className="text-gray-500 mt-4 text-sm">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default Page;