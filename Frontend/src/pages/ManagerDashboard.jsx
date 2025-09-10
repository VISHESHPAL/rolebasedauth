import Navbar from "../components/Navbar";

const ManagerDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-7xl mx-auto my-8 border border-gray-100">
          <div className="mb-8 text-center border-b border-gray-200 pb-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
              Manager Dashboard 💼
            </h1>
            <p className="text-gray-500 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
              Welcome, Manager! Oversee team performance, assign tasks, and review reports efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-all text-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2">📊 View Reports</h2>
              <p className="text-sm opacity-90">
                Access performance reports and analytics.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition-all text-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2">📝 Assign Tasks</h2>
              <p className="text-sm opacity-90">
                Distribute tasks to team members and track progress.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-400 to-purple-600 hover:from-purple-500 hover:to-purple-700 transition-all text-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2">👥 Manage Team</h2>
              <p className="text-sm opacity-90">
                Add, edit, or remove team members with ease.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Recent Activity</h3>
              <ul className="text-gray-500 text-sm list-disc pl-5 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Updated sales report - 2 hours ago</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Assigned task to John - Yesterday</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Reviewed team performance - 3 days ago</span>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Upcoming Deadlines</h3>
              <ul className="text-gray-500 text-sm list-disc pl-5 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>Project Alpha - Due in 2 days</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Team meeting - Tomorrow</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Submit report - Next week</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerDashboard;