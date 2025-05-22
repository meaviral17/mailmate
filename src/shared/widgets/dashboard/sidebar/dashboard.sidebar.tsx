"use client";

import { ICONS } from "@/shared/utils/icons";
import { useUser } from "@clerk/nextjs";
import DashboardItems from "./dashboard.items";
import UserPlan from "./user.plan";

const DashboardSideBar = () => {
  const { user } = useUser();

  return (
    <div className="p-3 bg-[#000] text-white"> {/* Background to black and text to white */}
      <div className="p-2 flex items-center bg-[#1A1A2E] rounded"> {/* Dark blue background */}
        <span className="text-2xl text-[#0f8b8d]">{ICONS.home}</span> {/* Icon color adjusted to a blue shade */}
        <h5 className="pl-2 pt-1 capitalize">{user?.username} Newsletter</h5>
      </div>
      <div>
        <DashboardItems />
        <UserPlan />
        <DashboardItems bottomContent={true} />
      </div>
    </div>
  );
};

export default DashboardSideBar;