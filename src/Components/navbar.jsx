import React, { useState, useEffect } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangeColor = () => {
    setIsClicked(!isClicked);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
        return;
      }

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=089ff97e142c4b012df105099009a50b&page=1&include_adult=false&query=${searchQuery}`
        );
        setSearchResults(response.data.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/movies/search?query=${searchQuery}`, {
      state: { searchResults },
    });
  };

  return (
    <nav
      className={`bg-color leading-[3.5] navbar ${isClicked ? "red-bg" : ""}`}
      onClick={handleChangeColor}
    >
      <div className="container flex justify-between mx-auto">
        <ul className="flex space-x-4 navbar">
          <li
            className={`relative px-3 ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link to="/" className="block text-white">
              Home
            </Link>
          </li>
          <li
            className={`relative px-3 ${
              location.pathname === "/movies/trending" ? "active" : ""
            }`}
          >
            <Link
              to="/movies/trending"
              className="block w-full h-full text-white"
            >
              Trending
            </Link>
          </li>
          <li
            className={`relative px-3 ${
              location.pathname === "/movies/popular" ? "active" : ""
            }`}
          >
            <Link
              to="/movies/popular"
              className="block w-full h-full text-white"
            >
              Popular
            </Link>
          </li>
          <li
            className={`relative px-3 ${
              location.pathname === "/movies/upcoming" ? "active" : ""
            }`}
          >
            <Link to="/movies/upcoming" className="block text-white w/full">
              Upcoming
            </Link>
          </li>
        </ul>

        <form onSubmit={handleSearchSubmit} className="flex">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="bg-[#484c4b] pl-4 search-boxshodow text-white"
            placeholder="Search"
          />
          <button type="submit" className="px-4 text-white search-boxshodow">
            <MdOutlineSearch className="font-bold" />
          </button>
        </form>
      </div>

      {/* {searchQuery && (
        <div className="search-results">
          <ul className="flex flex-wrap justify-center">
            {searchResults.map((movie) => (
              <li
                key={movie.id}
                className="w-[200px] text-white movie-content hover:bg-white hover:text-black"
              >
                <Link to={`/movies/${movie.id}`} className="block">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <strong className="pt-2 text-center">{movie.title}</strong>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
