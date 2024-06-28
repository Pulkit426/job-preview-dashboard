import { FiBriefcase } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { GiReceiveMoney } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import AtlassianLogo from "../images/AtlassianLogo.png";

const Header = () => {
  const optionTiles = [
    { logo: FiBriefcase, text: "Jobs" },
    { logo: FiMessageSquare, text: "Messages" },
    { logo: GiReceiveMoney, text: "Payments" },
  ];

  return (
    <div className=" pb-5 border-b-2 border-neutralGray">
      <div className="flex justify-between mt-5 h-[60px]">
        <div
          className="p-4 text-primaryOrange font-bold"
          style={{ backgroundColor: "#E7E7E7" }}
        >
          Logo
        </div>

        <div className="flex justify-between w-[500px] border-2 rounded-3xl">
          {optionTiles.map((item, index) => (
            <div
              className={`flex m-2 p-2 items-center justify-center cursor-pointer ${
                index === 0
                  ? `border-2 border-orange-100 rounded-3xl bg-primaryOrange text-white`
                  : `text-neutralGray hover:text-primaryOrange`
              }`}
            >
              <item.logo />
              <div className="ml-1">{item.text}</div>
            </div>
          ))}
        </div>

        <div className="flex w-16 justify-center items-center mr-10">
          <div className="text-3xl m-1">
            <IoIosNotificationsOutline />
          </div>

          <img
            src={AtlassianLogo}
            alt="Atlassian"
            className="w-8 h-8 ml-1 rounded-full"
          />

          <div className="text-3xl ml-1">
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
