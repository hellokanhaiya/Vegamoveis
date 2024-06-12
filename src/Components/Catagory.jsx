// import PersonalSoical from "./PersonalSoical";
// import { Link, redirect } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import Action from "./AllCatagoryclickable/Action";
// const Catagory = () => {
//   const genres = [
//     {
//       name: "Action",
//       redirectlink: <Action />,
//     },
//     {
//       name: "Action",
//       redirectlink: <Action />,
//     },
//     {
//       name: "Action",
//       redirectlink: <Action />,
//     },
//     {
//       name: "Action",
//       redirectlink: <Action />,
//     },
//     {
//       name: "Action",
//       redirectlink: <Action />,
//     },
//     {
//       name: "Action",
//       redirectlink: <Action />,
//     },
//   ];

//   return (
//     <>
//       <div className="bg-[#191919] p-5">
//         <ul className="flex flex-wrap justify-center">
//           {genres.map((genre) => (
//             <li className="m-1 " key={genre.id}>
//               <Link to={"/moives-action"} className="flex catorgy-button">
//                 {genre.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <PersonalSoical />
//       </div>
//     </>
//   );
// };

// export default Catagory;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PersonalSoical from "./PersonalSoical";

const Catagory = () => {
  const genres = [
    { name: "Action", link: "/movies/action" },
    { name: "Adventure", link: "/movies/adventure" },
    { name: "Animation", link: "/movies/animation" },
    { name: "Comedy", link: "/movies/comedy" },
    { name: "Crime", link: "/movies/crime" },
    { name: "Documentary", link: "/movies/documentary" },
    { name: "Drama", link: "/movies/drama" },
    { name: "Family", link: "/movies/family" },
    { name: "Fantasy", link: "/movies/fantasy" },
    { name: "History", link: "/movies/history" },
    { name: "Horror", link: "/movies/horror" },
    { name: "Music", link: "/movies/music" },
    { name: "Mystery", link: "/movies/mystery" },
    { name: "Romance", link: "/movies/romance" },
    { name: "Science Fiction", link: "/movies/science-fiction" },
    { name: "TV Movie", link: "/movies/tv-movie" },
    { name: "Thriller", link: "/movies/thriller" },
    { name: "War", link: "/movies/war" },
    { name: "Western", link: "/movies/western" },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (index) => {
    setSelectedCategory(index);
  };

  return (
    <>
      <div className="bg-[#191919] p-5">
        <ul className="flex flex-wrap justify-center">
          {genres.map((genre, index) => (
            <li className="m-1 " key={index}>
              <Link
                to={genre.link}
                className={`flex catorgy-button ${
                  selectedCategory === index ? "white" : ""
                }`}
                onClick={() => handleCategoryClick(index)}
              >
                {genre.name}
              </Link>
            </li>
          ))}
        </ul>
        <PersonalSoical />
      </div>
    </>
  );
};

export default Catagory;
