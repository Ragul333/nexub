import React from 'react';
import { Search, Bell, User, Grid, Menu } from 'lucide-react';

const Header = ({ onMenuClick, setQuery, query }) => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      {/* Menu button for small screens */}
      <button onClick={onMenuClick} className="lg:hidden block text-gray-600">
        <Menu className="w-6 h-6" />
      </button>

      {/* Search Bar */}
      <div className="flex-1 flex items-center bg-gray-100 rounded-full p-2 mx-2">
        <Search className="w-5 h-5 text-gray-400"/>
        <input
          type="text"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          placeholder="search employees"
          className="bg-transparent ml-2 outline-none w-full"
        />
      </div>

      {/* Action Icons */}
      <div className="flex items-center gap-4">
        <User className="w-6 h-6 text-gray-600 hidden sm:block" />
        <Grid className="w-6 h-6 text-gray-600 hidden sm:block" />
        <Bell className="w-6 h-6 text-gray-600" />
        <img
          src="https://randomuser.me/api/portraits/women/75.jpg"
          alt="profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
