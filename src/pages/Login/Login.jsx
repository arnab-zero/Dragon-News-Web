import { Link } from "react-router-dom";
import Navbar from "../shared/NavBar/Navbar";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login clicked.");
    // nice!
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
  };

  return (
    <div className="mt-5">
      <Navbar></Navbar>
      <h2 className="text-3xl font-semibold my-5 text-center">Login</h2>
      <div className="flex justify-center mt-10">
        <form className="w-1/2" onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <input type="submit" value="Login" className="btn btn-primary" />
          </div>
        </form>
      </div>
      <div>
        <p className="text-sm py-5 text-center">
          Do not have an account?{" "}
          <span className="text-blue-500 font-semibold underline">
            <Link to="/register">Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
