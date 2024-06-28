import CompanyInfo from "./CompanyInfo";
import JobDescription from "./JobDescription";
import JobSkills from "./JobSkills";
import JobTitle from "./JobTitle";

const JobInfoContainer = () => {
  return (
    <div>
      <JobTitle />
      <JobSkills />
      <JobDescription />
      <CompanyInfo />
    </div>
  );
};

export default JobInfoContainer;
