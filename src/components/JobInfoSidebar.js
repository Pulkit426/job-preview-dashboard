import { MdOutlineDeleteOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { MdOutlinePeople } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

const JobInfoSidebar = () => {
  return (
    <div className="w-96">
      <div className="flex m-5">
        <button className="m-2 p-2 w-40 flex justify-center items-center border-2 rounded-xl text-primaryOrange border-primaryOrange bg-secondaryOrange cursor-pointer">
          <MdOutlineDeleteOutline />
          Delete Job
        </button>

        <button className="m-2 p-2 w-40 flex justify-center items-center border-2 rounded-xl text-white border-primaryOrange bg-primaryOrange cursor-pointer">
          <GoPencil />
          Edit Job
        </button>
      </div>

      <div>
        <div className="flex justify-between items-center h-16 border-b-2 text-lg mx-5">
          <div className="flex justify-center items-center gap-2 text-neutralGray">
            <MdOutlinePeople />
            Applicants
          </div>
          <h1 className="font-semibold"> 400 </h1>
        </div>

        <div className="flex justify-between items-center h-16 border-b-2 text-lg mx-5">
          <div className="flex justify-center items-center gap-2 text-neutralGray">
            <BsPersonCheck />
            Matches
          </div>
          <h1 className="font-semibold"> 100 </h1>
        </div>

        <div className="flex justify-between items-center h-16 border-b-2 text-lg mx-5">
          <div className="flex justify-center items-center gap-2 text-neutralGray">
            <FiMessageSquare />
            Messages
          </div>
          <h1 className="font-semibold"> 147 </h1>
        </div>

        <div className="flex justify-between items-center h-16 text-lg mx-5">
          <div className="flex justify-center items-center gap-2 text-neutralGray">
            <IoEyeOutline />
            Views
          </div>
          <h1 className="font-semibold"> 800 </h1>
        </div>
      </div>
    </div>
  );
};

export default JobInfoSidebar;
