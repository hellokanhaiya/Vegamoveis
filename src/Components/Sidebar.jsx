import React from "react";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
const Sidebar = ({ onClose }) => {
  return (
    <div className="w-screen width-full text-white sidebar">
      <div className="flex justify-center text-[36px] mt-4" onClick={onClose}>
        <RxCrossCircled />
      </div>
      <div className="flex h-screen items-center mb-5 text-white flex-shrink-0">
        <div className="pl-4">
          <ul className="text-[24px] text-left flex flex-col justify-center items-center mx-auto">
            {/* Links with onClick handler to close the sidebar */}
            <Link to="/" className="py-2" onClick={onClose}>
              Home
            </Link>
            <Link to="/movies/trending" className="py-2" onClick={onClose}>
              Trending
            </Link>
            <Link to="/movies/popular" className="py-2" onClick={onClose}>
              Popular
            </Link>
            <Link to="/movies/upcoming" className="py-2" onClick={onClose}>
              Upcoming
            </Link>
            {/* Add more sidebar items as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
