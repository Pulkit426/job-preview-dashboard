const JobDescription = () => {
  return (
    <div className="mt-5 ml-10 ">
      <h4 className="text-gray-400 font-semibold"> About the Job </h4>
      <div>
        <ol className="list-decimal list-inside mb-6">
          <li>Handle the UI/UX research design</li>
          <li>
            Work on researching the latest web application design and trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic-related works
          </li>
        </ol>

        <div className="mb-6">
          <p>Benefits:</p>
          <ul className="list-disc list-inside">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
        </div>

        <div className="mb-6">
          <p>Schedule:</p>
          <ul className="list-disc list-inside">
            <li>Day Shift</li>
          </ul>
        </div>

        <div className="mb-6">
          <p>Supplemental pay types:</p>
          <ul className="list-disc list-inside">
            <li>Performance bonus</li>
            <li>Yearly bonus</li>
          </ul>
        </div>

        <p>Work Location: In person</p>
      </div>
    </div>
  );
};

export default JobDescription;
