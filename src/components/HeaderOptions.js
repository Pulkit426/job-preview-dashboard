const HeaderOptions = () => {
  return (
    <div className="flex mt-5 pl-10 font-sans gap-10 border-b-2">
      <div className="p-2 cursor-pointer font-bold text-primaryOrange border-b-2 border-primaryOrange">
        Job Preview
      </div>
      <div className="p-2 cursor-pointer text-neutralGray"> Match </div>
      <div className="p-2 cursor-pointer text-neutralGray"> Applicants </div>
      <div className="p-2 cursor-pointer text-neutralGray"> Messages </div>
    </div>
  );
};

export default HeaderOptions;
