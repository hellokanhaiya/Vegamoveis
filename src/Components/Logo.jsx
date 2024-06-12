import React, { useState, useEffect } from "react";
import { IoMdMenu, IoMdSearch } from "react-icons/io";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import SearchBox from "./Searchbox";

const Logo = () => {
  const [toggleContent, setToggleContent] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768) {
        setToggleContent(false); // Hide content if window width is greater than 768px
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function toggleSidebar() {
    setToggleContent(!toggleContent);
  }

  function toggleSearchBox() {
    setSearchVisible(!searchVisible);
  }

  return (
    <>
      <div
        className={`navbar-toggle text-white ${
          windowWidth > 768 ? "hidden" : ""
        }`}
      >
        {/* Show sidebar only when toggleContent is true */}
        {toggleContent && <Sidebar onClose={toggleSidebar} />}
      </div>
      <div className="flex items-center px-3 logo-items">
        <div>
          <IoMdMenu
            className={`navbar-toggle cursor-pointer text-white ${
              windowWidth > 768 ? "hidden" : ""
            }`}
            onClick={toggleSidebar}
          />
        </div>
        <div>
          <Link to="/">
            <img
              src="../public/logo.1dae2c62f05b788d0405.png"
              alt="Vegamovies Logo"
              className="h-12 mt-5 vega-clone"
              style={{
                display: "block",
                flex: "0 0 auto",
                maxWidth: "270px",
                padding: "0 21px",
                width: "100%",
              }}
            />
          </Link>
        </div>
        {!toggleContent && (
          <div className={`navbar-toggle text-white`}>
            <IoMdSearch
              onClick={toggleSearchBox}
              className="text-[24px] cursor-pointer text-white"
            />
          </div>
        )}
      </div>
      {/* Conditionally render search box */}
      {searchVisible && <SearchBox />}
    </>
  );
};

export default Logo;
