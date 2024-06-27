import logo from "../images/AtlassianLogo.png";

const CompanyInfo = () => {
  const companyData = [
    {
      Heading: "Company Size",
      Info: "1k - 2k Employees",
    },
    {
      Heading: "Type",
      Info: "Private",
    },
    {
      Heading: "Sector",
      Info: "Information Technology, Infrastructure",
    },
    {
      Heading: "Funding",
      Info: "Bootstrapped",
    },
    {
      Heading: "Founded In",
      Info: "2019",
    },
    {
      Heading: "Founded By",
      Info: "Scott Farquhar, Mike Cannon-Brookes",
    },
  ];

  return (
    <div className="m-2 mt-20 ml-10">
      <div className="flex items-center gap-2 mb-5">
        <img src={logo} alt="Atlassian" className="w-8 h-8" />
        <h3 className="text-neutralGray font-semibold text-xl"> Atlassian </h3>
      </div>

      <div className="grid grid-cols-[1fr,2fr] grid-rows-3 gap-6 text-base">
        {companyData.map((item) => (
          <div>
            <div className="text-neutralGray font-semibold mb-2">
              {item.Heading}
            </div>
            <div className="text-gray-500 font-medium">{item.Info}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfo;
