"use client";

import { deleteEmail } from "@/actions/delete.email";
import { getEmails } from "@/actions/get.emails";
import { ICONS } from "@/shared/utils/icons";
import { useClerk } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Write = () => {
  const [emailTitle, setEmailTitle] = useState("");
  const [emails, setEmails] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { user } = useClerk();

  const handleCreate = () => {
    if (emailTitle.length === 0) {
      toast.error("Enter the email subject to continue!");
    } else {
      const formattedTitle = emailTitle.replace(/\s+/g, "-").replace(/&/g, "-");
      router.push(`/dashboard/new-email?subject=${formattedTitle}`);
    }
  };

  useEffect(() => {
    FindEmails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const FindEmails = async () => {
    await getEmails({ newsLetterOwnerId: user?.id! })
      .then((res) => {
        setEmails(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteHanlder = async (id: string) => {
    await deleteEmail({ emailId: id }).then((res) => {
      FindEmails();
    });
  };

  return (
    <div className="w-full flex p-5 flex-wrap gap-6 relative">
      <div
        className="w-[200px] h-[200px] bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setOpen(!open)}
      >
        <span className="text-2xl block text-center mb-3">{ICONS.plus}</span>
        <h5 className="text-2xl font-medium">Create New</h5>
      </div>

      {/* saved emails */}
      {emails &&
        emails.map((i: any) => {
          const formattedTitle = i?.title
            ?.replace(/\s+/g, "-")
            .replace(/&/g, "-");
          return (
            <div
              key={i?._id}
              className="w-[200px] h-[200px] z-[0] relative bg-slate-50 flex flex-col items-center justify-center rounded border cursor-pointer hover:shadow-md transition-shadow"
            >
              <span
                className="absolute block z-20 right-2 top-2 text-2xl cursor-pointer text-red-500 hover:text-red-700"
                onClick={() => deleteHanlder(i?._id)}
              >
                {ICONS.delete}
              </span>
              <Link
                href={`/dashboard/new-email?subject=${formattedTitle}`}
                className="text-xl font-medium text-blue-600 hover:underline"
              >
                {i.title}
              </Link>
            </div>
          );
        })}

      {open && (
        <div className="absolute flex items-center justify-center top-0 left-0 bg-[#00000080] h-screen w-full z-50">
          <div className="w-[500px] p-6 bg-white rounded-lg shadow-lg relative">
            <div className="absolute top-3 right-3">
              <span
                className="text-lg cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={() => setOpen(!open)}
              >
                {ICONS.cross}
              </span>
            </div>
            <h5 className="text-2xl font-semibold mb-4 text-gray-800">
              Enter Your Email Subject
            </h5>
            <p className="text-sm text-gray-600 mb-4">
              Provide a subject for your email. This will help you organize and identify your emails easily.
            </p>
            <input
              type="text"
              placeholder="Enter email subject"
              className="border w-full my-2 h-[40px] px-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={emailTitle}
              onChange={(e) => setEmailTitle(e.target.value)}
            />
            <Button
              color="primary"
              className="rounded-lg text-lg mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white"
              onClick={handleCreate}
            >
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Write;