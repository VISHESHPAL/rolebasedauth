import Navbar from "../components/Navbar";
import { useState } from "react";
import { Users, Settings, UserCog } from "lucide-react";

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("users");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
          <h2 className="text-xl font-bold border-b border-gray-700 pb-3">
            Admin Panel
          </h2>
          <nav className="space-y-3">
            <button
              onClick={() => setActiveSection("users")}
              className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition ${
                activeSection === "users"
                  ? "bg-red-500"
                  : "hover:bg-gray-800"
              }`}
            >
              <Users size={20} /> Manage Users
            </button>

            <button
              onClick={() => setActiveSection("managers")}
              className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition ${
                activeSection === "managers"
                  ? "bg-blue-500"
                  : "hover:bg-gray-800"
              }`}
            >
              <UserCog size={20} /> Manage Managers
            </button>

            <button
              onClick={() => setActiveSection("settings")}
              className={`flex items-center gap-3 w-full px-4 py-2 rounded-lg transition ${
                activeSection === "settings"
                  ? "bg-green-500"
                  : "hover:bg-gray-800"
              }`}
            >
              <Settings size={20} /> System Settings
            </button>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          {activeSection === "users" && (
            <section>
              <h1 className="text-3xl font-bold text-red-500 mb-4">
                Manage Users
              </h1>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700">
                  Here you can add, edit, or remove users from the system.
                </p>
              </div>
            </section>
          )}

          {activeSection === "managers" && (
            <section>
              <h1 className="text-3xl font-bold text-blue-500 mb-4">
                Manage Managers
              </h1>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700">
                  Here you can add, edit, or remove managers from the system.
                </p>
              </div>
            </section>
          )}

          {activeSection === "settings" && (
            <section>
              <h1 className="text-3xl font-bold text-green-500 mb-4">
                System Settings
              </h1>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-gray-700">
                  Configure and update the system settings here.
                </p>
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
