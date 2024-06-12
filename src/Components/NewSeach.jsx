import React from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import Navbar from "./navbar";
import SocialMediaicon from "./SocialMediaicon";
import Catagory from "./Catagory";
import Footer from "./Footer";
const SearchResults = () => {
  const location = useLocation();
  const searchResults = location.state?.searchResults || [];

  return (
    <div className="bg-black container-vegamovies">
      <Logo></Logo>
      <Navbar />
      <SocialMediaicon />
      <Catagory />
      <div className="text-white search-results">
        {searchResults.length > 0 ? (
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
                  <strong className="flex items-center justify-center pt-2 text-center">
                    {movie.title}
                  </strong>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchResults;
