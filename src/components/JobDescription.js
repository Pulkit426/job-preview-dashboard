const JobDescription = () => {
  return (
    <div className="mt-5 pl-10 pb-10 border-b-2 font-general-sans">
      <h4 className="text-gray-400 font-semibold mb-2"> About the Job </h4>
      <div className="font-medium text-gray-600">
        <ol className="list-decimal list-inside">
          <li>Handle the UI/UX research design</li>
          <li>
            Work on researching the latest web application design and trends
          </li>
          <li>Work on conceptualizing and visualizing</li>
          <li>
            Work on creating graphics content and other graphic-related works
          </li>
        </ol>

        <div>
          <p>Benefits:</p>
          <ul className="list-disc list-inside">
            <li>Health insurance</li>
            <li>Provident Fund</li>
          </ul>
        </div>

        <div>
          <p>Schedule:</p>
          <ul className="list-disc list-inside">
            <li>Day Shift</li>
          </ul>
        </div>

        <div>
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
