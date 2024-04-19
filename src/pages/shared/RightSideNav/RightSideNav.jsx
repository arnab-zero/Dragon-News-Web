import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div>
      <div className="border-2 p-2 rounded-t-lg">
        <h1 className="text-xl font-semibold py-2">Login with</h1>
        <div className="flex justify-center">
          <button className="flex gap-1 btn-outline items-center text-sm text-blue-500 border-2 border-blue-600 rounded-lg px-4 py-1 mb-2">
            <FaGoogle />
            Login with Google
          </button>
        </div>
        <div className="flex justify-center">
          <button className="flex gap-1 btn-outline items-center text-sm text-gray-500 border-2 border-gray-600 rounded-lg px-4 py-1 mb-2">
            <FaGithub />
            Login with GitHub
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default RightSideNav;
