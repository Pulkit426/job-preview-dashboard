import CompanyInfo from "./CompanyInfo";
import JobDescription from "./JobDescription";
import JobSkills from "./JobSkills";

const JobInfoContainer = () => {
  return (
    <div>
      <JobSkills />
      <JobDescription />
      <CompanyInfo />
    </div>
  );
};

export default JobInfoContainer;
