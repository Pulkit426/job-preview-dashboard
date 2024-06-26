import { FiBriefcase } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Header = () => {
  return (
    <div className=" pb-5 border-b-2 border-neutralGray">
      <div className="flex justify-between mt-10 h-[60px]">
        <div
          className="p-4 text-primaryOrange font-bold"
          style={{ backgroundColor: "#E7E7E7" }}
        >
          Logo
        </div>

        <div className="flex justify-between w-[500px] border-2 rounded-3xl">
          <div className="flex m-2 p-2 items-center justify-center border-2 rounded-3xl bg-primaryOrange text-white">
            <FiBriefcase />
            <div className="ml-1">Jobs</div>
          </div>

          <div className="flex m-2 p-2 items-center justify-center  text-neutralGray">
            <FiMessageSquare />
            <div className="ml-1">Messages</div>
          </div>

          <div className="flex m-2 p-2 items-center justify-center  text-neutralGray">
            <GiReceiveMoney />
            <div className="ml-1">Payments</div>
          </div>
        </div>

        <div className="flex w-16 justify-center items-center mr-10">
          <div className="text-3xl m-1">
            <IoIosNotificationsOutline />
          </div>

          <div className="text-3xl m-1">
            <FaRegUserCircle />
          </div>

          <div className="text-3xl ml-1">
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
