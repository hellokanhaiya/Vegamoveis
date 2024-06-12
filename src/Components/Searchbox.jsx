// SearchInput.js
import React, { useState, useEffect } from "react";
import { MdOutlineSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SearchInput = ({ placeholder }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

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
    <div className="search-container">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          className="bg-[#484c4b] pl-4 search-boxshodow text-white search-input-box"
          placeholder="Search..."
        />
      </form>

      {searchQuery && (
        <div className="search-results">
          <ul className="flex flex-wrap justify-center">
            {searchResults.map((movie) => (
              <li
                key={movie.id}
                className="w-[200px] text-white movie-content hover:bg-white hover:text-black"
              >
                <a href={`/movies/${movie.id}`} className="block">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <strong className="pt-2 text-center">{movie.title}</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
