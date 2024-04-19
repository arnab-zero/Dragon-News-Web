import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold">All Categories: </h3>
      {categories.map((category) => (
        <Link
          to={`/category/${category.id}`}
          className="block ml-3 py-1 hover:text-gray-500 hover:underline"
          key={category.id}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
