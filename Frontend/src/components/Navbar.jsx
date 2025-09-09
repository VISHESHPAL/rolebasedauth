import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center shadow-lg">
      {/* Left - Logo */}
      <h2 className="text-2xl font-bold">
        <Link to="/" className="hover:text-red-400 transition duration-300">
          RoleAuth App
        </Link>
      </h2>

      {/* Right - Links */}
      <div className="flex items-center space-x-4">
        {!user ? (
          <>
            <Link
              to="/login"
              className="hover:text-red-400 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Signup
            </Link>
          </>
        ) : (
          <>
            {user.role === "User" && (
              <Link
                to="/user"
                className="hover:text-red-400 transition duration-300"
              >
                User Dashboard
              </Link>
            )}
            {user.role === "Manager" && (
              <Link
                to="/manager"
                className="hover:text-red-400 transition duration-300"
              >
                Manager Dashboard
              </Link>
            )}
            {user.role === "Admin" && (
              <Link
                to="/admin"
                className="hover:text-red-400 transition duration-300"
              >
                Admin Dashboard
              </Link>
            )}
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
