import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";
import homeImage from "../assets/homeimage.jpg";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Secure Role-Based Access <br /> Made Simple 🚀
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            A powerful authentication system with role-based access control,
            ensuring a smooth and secure experience for everyone.
          </p>

          {!user ? (
            <div className="space-x-4">
              <Link
                to="/signup"
                className="bg-red-500 px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-600 transition duration-300"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="border border-gray-400 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-700 transition duration-300"
              >
                Login
              </Link>
            </div>
          ) : (
            <Link
              to={`/${user.role.toLowerCase()}`}
              className="bg-red-500 px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-600 transition duration-300"
            >
              Go to Dashboard
            </Link>
          )}
        </div>

        <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={homeImage}
            alt="Security Illustration"
            className="w-80 md:w-[28rem] rounded-2xl shadow-2xl shadow-blue-900/40 
               backdrop-blur-sm transition-transform duration-500 hover:scale-102 hover:shadow-blue-500/50"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
