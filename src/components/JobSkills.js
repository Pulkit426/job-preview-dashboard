import SkillTags from "./SkillTags";

const JobSkills = () => {
  const DataInfo = [
    { Heading: "Preferred Language", Info: "English" },
    { Heading: "Type", Info: "Full time" },
    { Heading: "Years of Experience", Info: "3+ Years" },
  ];
  return (
    <div className="m-2 ml-10 mt-10 grid grid-cols-[2fr,2fr,1fr,3fr] gap-10">
      <div>
        <div className="text-neutralGray font-semibold mb-2">
          Skills Required
        </div>
        <SkillTags />
      </div>

      {DataInfo.map((item) => (
        <div className="font-semibold">
          <div className="text-neutralGray mb-2">{item.Heading}</div>
          <div className="text-gray-700">{item.Info}</div>
        </div>
      ))}
    </div>
  );
};

export default JobSkills;
