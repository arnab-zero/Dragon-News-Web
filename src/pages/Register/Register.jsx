import { Link } from "react-router-dom";
import Navbar from "../shared/NavBar/Navbar";

const Register = () => {
  const handleRegister = () => {};

  return (
    <div className="mt-5">
      <Navbar />
      <h2 className="text-3xl font-semibold my-5 text-center">Register</h2>
      <div className="flex justify-center">
        <form className="w-1/2" onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="URL"
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
              placeholder="Password"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-5">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </form>
      </div>
      <div>
        <p className="text-sm py-5 text-center">
          Already have an account?{" "}
          <span className="text-blue-500 font-semibold underline">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
