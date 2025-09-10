import Navbar from "../components/Navbar";

const UserDashboard = () => {
  return (
     <>
     <Navbar/>
     <div className="flex flex-col items-center mt-2 min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-green-500 mb-4">
          User Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome! Here you can manage your profile, view tasks, and track your progress.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            View Profile
          </button>
          <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            My Tasks
          </button>
          <button className="bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition">
            Track Progress
          </button>
        </div>
      </div>
    </div>
     </>
  );
};

export default UserDashboard;
