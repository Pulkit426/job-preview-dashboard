import Figma from "../images/Figma.png";
import AdobeIllustrator from "../images/Adobe Illustrator.png";
import AdobeXD from "../images/AdobeXD.png";

const SkillTags = () => {
  const skills = [
    { imageLink: Figma, skillName: "Figma" },
    { imageLink: AdobeIllustrator, skillName: "Adobe Illustrator" },
    { imageLink: AdobeXD, skillName: "Adobe XD" },
  ];
  return skills.map((item) => (
    <div className="flex justify-center items-center m-1 p-1 gap-2 border-2 rounded-lg w-max h-8 text-neutralGray text-sm">
      <img src={item.imageLink} />
      {item.skillName}
    </div>
  ));
};

export default SkillTags;
