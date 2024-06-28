import { MdOutlineDeleteOutline } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { MdOutlinePeople } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";

const JobInfoSidebar = () => {
  const information = [
    { Logo: MdOutlinePeople, Heading: "Applicants", Data: "400" },
    { Logo: BsPersonCheck, Heading: "Matches", Data: "100" },
    { Logo: FiMessageSquare, Heading: "Messages", Data: "147" },
    { Logo: IoEyeOutline, Heading: "Views", Data: "800" },
  ];
  return (
    <div className="w-96 border-l-2 bg-lightGray">
      <div className="flex m-5">
        <button className="m-2 p-2 w-40 flex gap-1 justify-center items-center border-2 rounded-xl text-primaryOrange border-primaryOrange bg-secondaryOrange cursor-pointer">
          <MdOutlineDeleteOutline />
          Delete Job
        </button>

        <button className="m-2 p-2 w-40 flex gap-1 justify-center items-center border-2 rounded-xl text-white border-orange-700 bg-primaryOrange cursor-pointer">
          <GoPencil />
          Edit Job
        </button>
      </div>

      {information.map((item) => (
        <div>
          <div className="flex justify-between items-center h-16 border-b-2 text-lg mx-5">
            <div className="flex justify-center items-center gap-2 text-gray-400">
              <item.Logo />
              {item.Heading}
            </div>
            <h1 className="font-semibold"> {item.Data} </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobInfoSidebar;
