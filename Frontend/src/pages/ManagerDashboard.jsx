import Navbar from "../components/Navbar";

const ManagerDashboard = () => {
  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">
          Manager Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome, Manager! You can oversee team performance, assign tasks, and review reports.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            View Reports
          </button>
          <button className="bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
            Assign Tasks
          </button>
          <button className="bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition">
            Manage Team
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ManagerDashboard;
