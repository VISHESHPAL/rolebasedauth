import Navbar from "../components/Navbar";

const UserDashboard = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 md:p-12 w-full max-w-7xl mx-auto my-8 border border-gray-100">
          <div className="mb-8 text-center border-b border-gray-200 pb-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight">
              User Dashboard ✨
            </h1>
            <p className="text-gray-500 mt-3 text-base sm:text-lg max-w-2xl mx-auto">
              Welcome! Manage your profile, check your tasks, and track your progress here.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition-all text-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2">👤 View Profile</h2>
              <p className="text-sm opacity-90">
                Update your personal details and preferences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-all text-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2">📝 My Tasks</h2>
              <p className="text-sm opacity-90">
                Check and manage your assigned tasks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 hover:from-indigo-500 hover:to-indigo-700 transition-all text-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transform hover:scale-105">
              <h2 className="text-xl font-bold mb-2">📈 Track Progress</h2>
              <p className="text-sm opacity-90">
                Monitor your performance and achievements.
              </p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Recent Activities </h3>
              <ul className="text-gray-500 text-sm list-disc pl-5 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Updated profile picture - 1 day ago</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Completed task "UI Design" - 2 days ago</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  <span>Joined new project "Marketing Campaign" - Last week</span>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-gray-700">Upcoming Deadlines</h3>
              <ul className="text-gray-500 text-sm list-disc pl-5 space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span>Submit report - In 3 days</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Team meeting - Tomorrow</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span>Task "Bug Fixing" - Next week</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;