import JobInfoContainer from "./JobInfoContainer";
import JobInfoSidebar from "./JobInfoSidebar";

const MainContainer = () => {
  return (
    <div className="grid grid-cols-[3fr,1fr]">
      <JobInfoContainer />
      <JobInfoSidebar />
    </div>
  );
};

export default MainContainer;
