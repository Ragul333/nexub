import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProjectMembers from "./components/ProjectMembers";
import ProfileDetails from "./components/ProfileDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { membersList } from "./utils/constants";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [members, setMembers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      let data = membersList.filter((el) => el.name.toLowerCase().includes(query));
      setMembers(data);
    } else {
      setMembers(membersList)
    }
  }, [query])

  return (
    <Router>
      <div className="flex">
        {/* Sidebar for large screens */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Sidebar for small screens */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 lg:hidden" onClick={() => setSidebarOpen(false)}>
            <Sidebar />
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 bg-gray-100 min-h-screen">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} setQuery={setQuery} query={query} />
          <main className="p-4 lg:p-6">
            <Routes>
              <Route path="/" element={<ProjectMembers members={members} />} />
              <Route path="/profile/:id" element={<ProfileDetails />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
