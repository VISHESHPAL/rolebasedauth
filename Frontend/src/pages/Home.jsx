import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Role-Based App</h1>

        {!user ? (
          <p className="text-gray-600">Please login or signup to continue.</p>
        ) : (
          <div className="space-y-6">
            {user.role === "Admin" && (
              <div className="bg-red-100 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-red-600 mb-2">Admin Dashboard</h2>
                <p className="text-gray-700">
                  Welcome, Admin! You can manage users, managers, and system settings.
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                    Manage Users
                  </button>
                  <button className="bg-red-400 text-white px-4 py-2 rounded hover:bg-red-500">
                    System Settings
                  </button>
                </div>
              </div>
            )}

            {user.role === "Manager" && (
              <div className="bg-blue-100 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">Manager Dashboard</h2>
                <p className="text-gray-700">
                  Welcome, Manager! You can assign tasks, view reports, and manage your team.
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Assign Tasks
                  </button>
                  <button className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-500">
                    View Reports
                  </button>
                </div>
              </div>
            )}

            {user.role === "User" && (
              <div className="bg-green-100 p-6 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-green-600 mb-2">User Dashboard</h2>
                <p className="text-gray-700">
                  Welcome! You can view your tasks, track progress, and manage your profile.
                </p>
                <div className="flex justify-center mt-4 space-x-4">
                  <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    My Tasks
                  </button>
                  <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500">
                    Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
