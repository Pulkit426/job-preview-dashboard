const HeaderOptions = () => {
  const options = ["Job Preview", "Match", "Applicants", "Messages"];
  return (
    <div className="flex mt-5 pl-10 font-sans gap-10 border-b-2">
      {options.map((item, index) => (
        <div
          className={`p-2 cursor-pointer ${
            index === 0
              ? "border-b-2 border-primaryOrange text-primaryOrange font-bold "
              : "text-neutralGray hover:text-primaryOrange"
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default HeaderOptions;
