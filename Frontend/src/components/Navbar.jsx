import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-red-400 transition duration-300">
            Authify
          </Link>
        </h2>

        <div className="hidden md:flex items-center space-x-6">
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
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Create Account
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

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-lg font-bold">
                  {getInitials(user.name)}
                </div>
                <button
                  onClick={logout}
                  className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-3 bg-gray-800 p-4 rounded-lg shadow-lg">
          {!user ? (
            <>
              <Link
                to="/login"
                className="block hover:text-red-400 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                Create Account
              </Link>
            </>
          ) : (
            <>
              {user.role === "User" && (
                <Link
                  to="/user"
                  className="block hover:text-red-400 transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  User Dashboard
                </Link>
              )}
              {user.role === "Manager" && (
                <Link
                  to="/manager"
                  className="block hover:text-red-400 transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Manager Dashboard
                </Link>
              )}
              {user.role === "Admin" && (
                <Link
                  to="/admin"
                  className="block hover:text-red-400 transition duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Admin Dashboard
                </Link>
              )}
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="w-full bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
