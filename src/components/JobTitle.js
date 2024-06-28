import { IoLocationOutline } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";

const JobTitle = () => {
  return (
    <div className="flex flex-col gap-5 ml-0 pl-10 mr-0 mt-10 pb-10 border-b-2">
      <div className="flex items-center gap-5">
        <h1 className="text-3xl font-bold"> Senior Product Designer </h1>
        <div className="text-gray-500 text-sm"> posted 2 days ago </div>
        <div className="flex justify-center items-center gap-1 text-green-700 font-semibold bg-green-100 p-1 border-2 border-green-200 rounded-2xl text-xs h-6">
          <div className=" top-0 right-0 w-2 h-2 bg-green-700 border rounded-full"></div>
          Open{" "}
        </div>
      </div>

      <div className="mt-5 flex gap-8 text-gray-600 text-xl font-semibold">
        <div className="flex justify-center items-center gap-2">
          <IoLocationOutline />
          <div> Delaware, USA </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <GrMoney />
          <div> $300k-$400k </div>
        </div>
      </div>
    </div>
  );
};

export default JobTitle;
