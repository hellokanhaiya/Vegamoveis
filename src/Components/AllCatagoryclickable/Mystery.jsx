import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Navbar from "../navbar";
import SocialMediaicon from "../SocialMediaicon";
import Catagory from "../Catagory";
import Footer from "../Footer";
const Mystery = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // `https://api.themoviedb.org/3/discover/movie/week?api_key=089ff97e142c4b012df105099009a50b&page=${currentPage}&with_genres=28&include_adult=false&query=`
          `https://api.themoviedb.org/3/discover/movie?api_key=089ff97e142c4b012df105099009a50b&page=${currentPage}&with_genres=9648&include_adult=false&query=
`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="bg-black container-vegamovies">
        <Logo></Logo>
        <Navbar />
        <SocialMediaicon />
        <Catagory />
        <div className="bg-[#191919] p-5">
          <ul className="flex flex-wrap justify-center">
            {movies.map((movie) => (
              <a
                href={`/movies/${movie.id}`}
                key={movie.id}
                className="w-[200px] text-white movie-content hover:bg-white hover:text-black"
              >
                <span className="first-sapn">
                  <span className="move-right-top">
                    {movie.vote_average.toFixed(1)}
                  </span>
                </span>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <strong className="pt-2 text-center">{movie.title}</strong>
                <div>
                  <span className="pt-3 felx imp">
                    Movie{" "}
                    <span className="float-right">{movie.release_date}</span>
                  </span>
                </div>
              </a>
            ))}
          </ul>

          {/* Pagination */}
          <div className="flex justify-center mt-4">
            {currentPage > 3 && (
              <button
                onClick={() => handlePageChange(currentPage - 3)}
                className="px-4 py-2 mx-2 text-white bg-gray-800 rounded"
              >
                {currentPage - 3}
              </button>
            )}
            {currentPage > 2 && (
              <button
                onClick={() => handlePageChange(currentPage - 2)}
                className="px-4 py-2 mx-2 text-white bg-gray-800 rounded"
              >
                {currentPage - 2}
              </button>
            )}
            {currentPage > 1 && (
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-4 py-2 mx-2 text-white bg-gray-800 rounded"
              >
                {currentPage - 1}
              </button>
            )}
            <button
              onClick={() => handlePageChange(currentPage)}
              className="px-4 py-2 mx-2 text-white bg-blue-500 rounded"
            >
              {currentPage}
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 mx-2 text-white bg-gray-800 rounded"
            >
              {currentPage + 1}
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 2)}
              className="px-4 py-2 mx-2 text-white bg-gray-800 rounded"
            >
              {currentPage + 2}
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 3)}
              className="px-4 py-2 mx-2 text-white bg-gray-800 rounded"
            >
              {currentPage + 3}
            </button>
          </div>
        </div>
        <Footer />
      </div>{" "}
    </>
  );
};

export default Mystery;
