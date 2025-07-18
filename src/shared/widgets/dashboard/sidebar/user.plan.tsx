import { manageSubscription } from "@/actions/manage.subscription";
import useGetMembership from "@/shared/hooks/useGetMembership";
import useSubscribersData from "@/shared/hooks/useSubscribersData";
import { ICONS } from "@/shared/utils/icons";
import { Slider } from "@nextui-org/slider";
import { useRouter } from "next/navigation";

const UserPlan = () => {
  const { data, loading } = useSubscribersData();
  const { data: membershipData, loading: membershipLoading } = useGetMembership();
  const history = useRouter();

  const handleManage = async () => {
    await manageSubscription({
      customerId: membershipData?.stripeCustomerId,
    }).then((res: any) => {
      history.push(res);
    });
  };

  return (
    <div className="w-full my-3 p-3 bg-[#2D2D2D] rounded hover:shadow-xl cursor-pointer text-white">
      <div className="w-full flex items-center">
        <h5 className="text-lg font-medium">
          {membershipLoading ? "..." : "GROW"} Plan
        </h5>
        <div
          className="w-[95px] shadow ml-2 cursor-pointer h-[32px] flex justify-center items-center space-x-1 rounded-lg bg-[#5E5E5E]"
          onClick={handleManage}
        >
          <span className="text-white text-xl">{ICONS.electric}</span>
          <span className="text-white text-sm">Upgrade</span>
        </div>
      </div>
      <h5 className="text-[#B8B8B8]">Total subscribers</h5>
      <Slider
        aria-label="Player progress"
        hideThumb={true}
        defaultValue={40}
        className="max-w-md"
      />
      <h6 className="text-[#B8B8B8]">
        {loading ? "..." : data?.length} of{" "}
        {membershipData?.plan === "LAUNCH"
          ? "2500"
          : membershipData?.plan === "SCALE"
          ? "10,000"
          : "1,00,000"}{" "}
        added
      </h6>
    </div>
  );
};

export default UserPlan;