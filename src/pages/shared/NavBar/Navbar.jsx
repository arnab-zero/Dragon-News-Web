import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="btn-outline">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="btn-outline">
        <NavLink>About</NavLink>
      </li>
      <li className="btn-outline">
        <NavLink>Career</NavLink>
      </li>
    </>
  );

  const userImage = "/assets/user.png";

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="mr-5">
          <img src={userImage} className="w-10" alt="" />
        </button>
        <button className="btn-ghost font-bold px-3 py-2 rounded-lg">
          <NavLink to="/login">LOGIN</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
