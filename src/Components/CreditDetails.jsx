import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useParams } from "react-router-dom";
import "swiper/css";

const CreditsComponent = () => {
  const [credits, setCredits] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=089ff97e142c4b012df105099009a50b`
        );
        const data = await response.json();
        setCredits(data.cast || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching credits:", error);
        setIsLoading(false);
      }
    };

    fetchCredits();
  }, []);

  return (
    <div className=" text-[#c4c4c4] my-6 text-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Swiper slidesPerView={5} autoplay={{ delay: 2000 }} loop={true}>
          {credits.length > 0 ? (
            credits.map((person, index) => (
              <SwiperSlide key={index}>
                <div className="mx-2 py-2 bg-[#252222] rounded-xl">
                  <img
                    className="mx-auto text-center"
                    src={`https://image.tmdb.org/t/p/w92${person.profile_path}`}
                    alt={`Image of ${person.name}`}
                  />
                  <p> {person.name}</p>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <p>No credits available.</p>
          )}
        </Swiper>
      )}
    </div>
  );
};

export default CreditsComponent;
