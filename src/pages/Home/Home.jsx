import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/NavBar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="my-5">
        <BreakingNews></BreakingNews>
      </div>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 my-5">
        <div>
          <LeftSideNav />
        </div>
        <div className="md:col-span-2 lg:col-span-2">
          <h2 className="text-2xl">News Headlines and Details</h2>
        </div>
        <div>
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
