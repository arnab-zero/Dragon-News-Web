import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex gap-4">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true}>
        <p>Breaking News From All Across the World</p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
