"use client";
import useSubscribersAnalytics from "@/shared/hooks/useSubscribersAnalytics";
import { ICONS } from "@/shared/utils/icons";
  
const DashboardOverViewCard = () => {
  const { subscribersData, loading } = useSubscribersAnalytics();
  const lastMonthSubscribers =
  !loading &&
  subscribersData?.last7Months?.length > 0 &&
  subscribersData?.last7Months[subscribersData?.last7Months?.length - 1];

const previousLastMonthSubscribers =
  !loading &&
  subscribersData?.last7Months?.length > 1 &&
  subscribersData?.last7Months[subscribersData?.last7Months?.length - 2];

  let comparePercentage = 0;
  console.log('subscribersData:', subscribersData);
if (previousLastMonthSubscribers && previousLastMonthSubscribers.count > 0) {
  comparePercentage =
    ((lastMonthSubscribers - previousLastMonthSubscribers.count) /
      previousLastMonthSubscribers.count) *
    100;
} else {
  console.error('previousLastMonthSubscribers is undefined or count is missing:', previousLastMonthSubscribers);
}

  return (
    <div className="w-full xl:py-4 flex bg-white border rounded">
      {/* subscribers */}
      <div className="w-[33.33%] border-r p-5 text-lg">
        <h5 className="text-lg">Subscribers</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">
            {loading ? "..." : 4300}
          </span>
          <div className="h-[30px] flex p-2 items-center bg-[#DCFCE6] rounded-full">
            <span className="text-[#21C55D]">{ICONS.topArrow}</span>
            <span className="text-sm pl-1">{13}%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 3800 (last 4 weeks)
        </small>
      </div>
      {/* Open Rate */}
      <div className="w-[33.33%] border-r p-5 text-lg">
        <h5 className="text-lg">Open Rate</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">85</span>
          <div className="h-[30px] flex p-3 items-center bg-[#DCFCE6] rounded-full">
          <span className="text-[#21C55D]">{ICONS.topArrow}</span>
            <span className="text-sm pl-1">37%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 62 (last 4 weeks)
        </small>
      </div>
      {/* Click Rate */}
      <div className="w-[33.33%] border-r p-5 text-lg">
        <h5 className="text-lg">Click Rate</h5>
        <div className="w-full flex items-center justify-between">
          <span className="font-medium pt-2">50</span>
          <div className="h-[30px] flex p-3 items-center bg-[#ebe7e7] rounded-full">
            <span className="text-xl">+</span>
            <span className="text-sm pl-1">0%</span>
          </div>
        </div>
        <small className="block text-sm opacity-[.7] pt-2">
          from 50 (last 4 weeks)
        </small>
      </div>
    </div>
  );
};

export default DashboardOverViewCard;
