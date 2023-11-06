import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{ height: "60px" }}
      className="navbar bg-red-100 flex items-center"
    >
      <div className="w-full flex justify-between px-8">
        <div className="font-extrabold pl-2">
          <Link to="/">
            <span className="text-purple-600">Image</span>
            {""}
            <span className="text-yellow-500">~Gallery</span>
          </Link>
        </div>
        <div>
          <h1 className="text-sky-600">Hi, welcome to Image Gallery</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
