import Navbar from "../components/Navbar";

const AdminDashboard = () => {
  return (<>
     <Navbar/>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">
          Admin Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome, Admin! You have full access to manage users, managers, and
          system settings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
            Manage Users
          </button>
          <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Manage Managers
          </button>
          <button className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
            System Settings
          </button>
        </div>
      </div>
    </div>
     </>
  );
};

export default AdminDashboard;
