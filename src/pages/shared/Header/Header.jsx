import moment from "moment";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center p-5 mt-5">
        <img src="/assets/logo.png" alt="" />
      </div>
      <p className="text-center text-[24px] text-[#403f3f]">
        Journalism Without Fear or Favor
      </p>
      <p className="text-center text-[20px] font-medium text-[#706f6f] mb-10">
        {moment().format("dddd, MMMM Do YYYY, h:mm a")}
      </p>
    </div>
  );
};

export default Header;
