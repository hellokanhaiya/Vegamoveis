import React, { useState, useEffect } from "react";
import { MdDateRange } from "react-icons/md";
import Logo from "../Components/Logo";
import Navbar from "../Components/navbar";
import SocialMediaicon from "../Components/SocialMediaicon";
import Footer from "../Components/Footer";
import { FaRegPlayCircle } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import ImageComponent from "../Components/imgaes";
import ReviewComponent from "../Components/Comments";
import CreditDetails from "./CreditDetails";
// const GoanotherPage = () => {
//   const [firstMovieImage, setFirstMovieImage] = useState("");
//   const [movieDetails, setMovieDetails] = useState({});

//   useEffect(() => {
//     const fetchMovieImages = async () => {
//       try {
//         const response = await fetch(
//           "https://api.themoviedb.org/3/movie/1011985/images?api_key=089ff97e142c4b012df105099009a50b"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch movie images");
//         }
//         const data = await response.json();
//         const firstImage = data.backdrops[0];
//         const allImages = data.backdrops;
//         if (allImages) {
//           setFirstMovieImage(
//             `https://image.tmdb.org/t/p/original${allImages.file_path}`
//           );
//         }
//         if (firstImage) {
//           setFirstMovieImage(
//             `https://image.tmdb.org/t/p/original${firstImage.file_path}`
//           );
//         }
//         const detailsResponse = await fetch(
//           "https://api.themoviedb.org/3/movie/1011985?api_key=089ff97e142c4b012df105099009a50b"
//         );
//         if (!detailsResponse.ok) {
//           throw new Error("Failed to fetch movie details");
//         }
//         const detailsData = await detailsResponse.json();
//         setMovieDetails(detailsData);
//       } catch (error) {
//         console.error("Error fetching movie images:", error);
//       }
//     };

//     fetchMovieImages();
//   }, []);

//   const currentYear = new Date().getFullYear();

//   return (
//     <div className="bg-black container-vegamovies ">
//       <Logo />
//       <Navbar />
//       <SocialMediaicon />
//       <div className="max-w-3xl mx-auto px-6 bg-[#191919] py-12">
//         {firstMovieImage && (
//           <>
//             <img
//               src={firstMovieImage}
//               alt="First Movie Image"
//               className="pb-6"
//             />
//             <strong className="text-white text-[30px] pt-5">
//               {movieDetails.title}
//             </strong>

//             <span className="flex text-[#aeaeae] pt-2">
//               {" "}
//               <MdDateRange />
//               {movieDetails.release_date}
//             </span>
//             <div className="mt-4 ">
//               {movieDetails.genres &&
//                 movieDetails.genres.map((genre) => (
//                   <a
//                     className="text-white p-1 my-4 mr-4 bg-[#323232] rounded-xl text-xs"
//                     key={genre.id}
//                     href="#"
//                   >
//                     {genre.name}
//                   </a>
//                 ))}
//             </div>

//             <CreditDetails />
//             <div>
//               <a
//                 className="font-semibold bg-[#e6b400] w-full block rounded-full py-1 flex "
//                 target="_blank"
//                 href={movieDetails.homepage}
//               >
//                 <FaRegPlayCircle className="text-black text-[20px] ml-6" />

//                 <span
//                   className="flex mx-auto // "
//                 >
//                   Watch Now
//                   <FaExternalLinkAlt className="ml-2" />
//                 </span>
//               </a>
//             </div>
//           </>
//         )}
//         <hr className="text-white mt-8 bg-[#ffffff]" />
//         <div>
//           <p className="text-white">{movieDetails.overview}</p>
//           <p className="mt-4 text-white">
//             <span>
//               <a className="text-[#339966] pr-1" href="https://vegamovies.cab/">
//                 Vegamovies.nl
//               </a>
//               is the best online platform for downloading
//               <a className="text-[#339966] px-1" href="https://vegamovies.cab/">
//                 Holywood
//               </a>
//               and
//               <a className="text-[#339966]" href="https://vegamovies.cab/">
//                 {" "}
//                 Tollywood
//               </a>
//               .{" "}
//               <span>
//                 We provide direct G-Drive download link for fast and secure
//                 downloading. Click on the download button below and follow the
//                 steps to start download.
//               </span>
//             </span>
//           </p>
//           <p className="text-[aqua] text-[24px] font-semibold text-center mt-2">
//             <span>All Details About</span>
//             <span className="pl-1 ">({currentYear})</span>
//             <span className="pr-2"> "{movieDetails.title}"</span>Vegamovies
//           </p>
//           <h1 className="text-white font-semibold text-[20px]">Movie Info:</h1>
//         </div>
//         <div className="flex-col text-white">
//           <p>
//             <strong>Movie Name: </strong> {movieDetails.title}
//           </p>
//           <p>
//             <strong>Language: </strong> {movieDetails.original_language}
//           </p>
//           <p>
//             <strong>Released Date: </strong> {movieDetails.release_date}
//           </p>

//           <p>
//             <strong>Rating: </strong> {movieDetails.vote_average}
//           </p>
//           <p>
//             <strong>Rates:</strong> {movieDetails.vote_count}
//           </p>
//           <strong>Status: </strong>
//           {movieDetails.status}
//         </div>
//         <p className="text-[aqua] text-center font-semibold text-[28px]  ">
//           Screenshots:
//         </p>
//         <div>
//           <ImageComponent />
//           <ReviewComponent />
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default GoanotherPage;
// import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const GoanotherPage = () => {
  const [firstMovieImage, setFirstMovieImage] = useState("");
  const [movieDetails, setMovieDetails] = useState({});
  const { id } = useParams(); // This line extracts the 'id' parameter from the URL

  useEffect(() => {
    const fetchMovieImages = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/images?api_key=089ff97e142c4b012df105099009a50b`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch movie images");
        }
        const data = await response.json();
        const firstImage = data.backdrops[0];
        const allImages = data.backdrops;
        if (allImages) {
          setFirstMovieImage(
            `https://image.tmdb.org/t/p/original${allImages.file_path}`
          );
        }
        if (firstImage) {
          setFirstMovieImage(
            `https://image.tmdb.org/t/p/original${firstImage.file_path}`
          );
        }
        const detailsResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=089ff97e142c4b012df105099009a50b`
        );
        if (!detailsResponse.ok) {
          throw new Error("Failed to fetch movie details");
        }
        const detailsData = await detailsResponse.json();
        setMovieDetails(detailsData);
      } catch (error) {
        console.error("Error fetching movie images:", error);
      }
    };

    fetchMovieImages();
  }, [id]); // Dependency added to re-fetch data when the 'id' parameter changes

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black container-vegamovies ">
      <Logo />
      <Navbar />
      <SocialMediaicon />
      <div className="max-w-3xl mx-auto px-6 bg-[#191919] py-12">
        {firstMovieImage && (
          <>
            <img
              src={firstMovieImage}
              alt="First Movie Image"
              className="pb-6"
            />
            <strong className="text-white text-[30px] pt-5">
              {movieDetails.title}
            </strong>

            <span className="flex text-[#aeaeae] pt-2">
              {" "}
              <MdDateRange />
              {movieDetails.release_date}
            </span>
            <div className="mt-4 ">
              {movieDetails.genres &&
                movieDetails.genres.map((genre) => (
                  <a
                    className="text-white p-1 my-4 mr-4 bg-[#323232] rounded-xl text-xs"
                    key={genre.id}
                    href="#"
                  >
                    {genre.name}
                  </a>
                ))}
            </div>

            <CreditDetails />
            <div>
              <a
                className="font-semibold bg-[#e6b400] w-full block rounded-full py-1 flex "
                target="_blank"
                href={`https://www.imdb.com/title/${movieDetails.imdb_id}`}
              >
                <FaRegPlayCircle className="text-black text-[20px] ml-6" />

                <span className="flex mx-auto ">
                  Watch Now
                  <FaExternalLinkAlt className="ml-2" />
                </span>
              </a>
            </div>
          </>
        )}
        <hr className="text-white mt-8 bg-[#ffffff]" />
        <div>
          <p className="text-white">{movieDetails.overview}</p>
          <p className="mt-4 text-white">
            <span>
              <a className="text-[#339966] pr-1" href="https://vegamovies.cab/">
                Vegamovies.nl
              </a>
              is the best online platform for downloading
              <a className="text-[#339966] px-1" href="https://vegamovies.cab/">
                Holywood
              </a>
              and
              <a className="text-[#339966]" href="https://vegamovies.cab/">
                {" "}
                Tollywood
              </a>
              .{" "}
              <span>
                We provide direct G-Drive download link for fast and secure
                downloading. Click on the download button below and follow the
                steps to start download.
              </span>
            </span>
          </p>
          <p className="text-[aqua] text-[24px] font-semibold text-center mt-2">
            <span>All Details About</span>
            <span className="pl-1 ">({currentYear})</span>
            <span className="pr-2"> "{movieDetails.title}"</span>Vegamovies
          </p>
          <h1 className="text-white font-semibold text-[20px]">Movie Info:</h1>
        </div>
        <div className="flex-col text-white">
          <p>
            <strong>Movie Name: </strong> {movieDetails.title}
          </p>
          <p>
            <strong>Language: </strong> {movieDetails.original_language}
          </p>
          <p>
            <strong>Released Date: </strong> {movieDetails.release_date}
          </p>

          <p>
            <strong>Rating: </strong> {movieDetails.vote_average}
          </p>
          <p>
            <strong>Rates:</strong> {movieDetails.vote_count}
          </p>
          <strong>Status: </strong>
          {movieDetails.status}
        </div>
        <p className="text-[aqua] text-center font-semibold text-[28px]  ">
          Screenshots:
        </p>
        <div>
          <ImageComponent />
          <ReviewComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default GoanotherPage;
