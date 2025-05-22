"use client";
import { useUser } from "@clerk/nextjs";

import DashboardOverViewCard from "@/shared/components/cards/overview.card";
import SubscribersChart from "@/shared/components/charts/subscribers.chart";
import { Button } from "@nextui-org/react";
import { ICONS } from "@/shared/utils/icons";
import { useState } from "react";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Main = () => {
  const { user } = useUser();
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const handleCopyClick = () => {
    const smallText = document.querySelector(".copy-text") as HTMLElement;
    if (smallText) {
      const textToCopy = smallText.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        setCopied(true);
        toast.success("Copied");
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      });
    }
  };

  return (
    <div className="p-5 w-full h-screen bg-[#f9fafb]">
      <h1 className="text-2xl text-surface-900 font-medium">
        Hi {user?.fullName} 👋
      </h1>
      <p className="opacity-[.7] text-sm pt-2">
        Here&apos;s how your publication is doing
      </p>
      <div className="w-full flex">
        <div className="w-[65%] min-h-[88vh] pr-5">
          <br />
          <DashboardOverViewCard />
          <br />
          <SubscribersChart />
        </div>
        <div className="w-[35%] p-5">
          {/* Create newsletter button */}
          <div className="w-full flex justify-end">
            <Button
              className="bg-purple-700 text-white text-lg rounded !px-6"
              onClick={() => router.push("/dashboard/write")}
            >
              <span className="mr-1 ml-[-5px]">{ICONS.write}</span>
              Start Writing
            </Button>
          </div>
          <br />
          {/* Resources */}
          <div>
            <h5 className="text-xl font-medium">Resources</h5>
            <div className="w-full bg-white border rounded p-5 my-3">
              {/* Home page URL */}
              <div>
                <h4 className="font-medium">Home page</h4>

                <div
                  className="w-full px-2 my-1 h-[38px] bg-transparent border rounded-lg relative flex items-center cursor-pointer hover:shadow-md transition-shadow"
                  onClick={handleCopyClick}
                >
                  <small
                    className={`w-[70%] text-sm overflow-hidden overflow-ellipsis whitespace-nowrap copy-text ${
                      copied ? "bg-blue-200" : "bg-transparent"
                    }`}
                  >
                    {process.env.NEXT_PUBLIC_WEBSITE_URL}/subscribe?username=
                    {user?.username}
                  </small>
                  <div className="absolute h-[38px] w-[90px] rounded-r-lg bg-[#DFE7FF] right-0 flex items-center justify-center">
                    <span className="text-lg">{ICONS.copy}</span>
                    <span className="pl-1">copy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tutorials */}
          <div className="w-full bg-white border rounded p-5 my-3">
            <h5 className="font-medium">Tutorials</h5>
            <p className="text-sm opacity-[.7]">
              Learn how to get started on mailmate and utilize all our features,
              directly from the mailmate team.
            </p>
            <br />
            <Button
              className="bg-purple-800 text-[#ffffff] rounded-lg h-[35px] flex items-center"
              onClick={() => router.push("/tutorials")}
            >
              Tutorials <span>{ICONS.link}</span>
            </Button>
          </div>

          {/* Need help? */}
          <div className="w-full bg-white border rounded p-5 my-3">
            <h5 className="font-medium">Need help?</h5>
            <Link href={"/knowledge-base"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center hover:shadow-md transition-shadow">
                <span className="text-sm">Knowledge base</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/api-docs"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center hover:shadow-md transition-shadow">
                <span className="text-sm">API Documentation</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/blog"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center hover:shadow-md transition-shadow">
                <span className="text-sm">Blog</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
            <Link href={"/faq"}>
              <div className="w-max px-3 my-2 h-[33px] bg-transparent border rounded-lg flex items-center hover:shadow-md transition-shadow">
                <span className="text-sm">FAQ</span>
                <span className="ml-1">{ICONS.link}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;