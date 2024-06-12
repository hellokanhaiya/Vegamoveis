import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { useParams } from "react-router-dom";
const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=089ff97e142c4b012df105099009a50b`
        );
        const data = await response.json();
        setReviews(data.results || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="text-[#c4c4c4]">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review, index) => (
                <li key={index} className="my-6">
                  <p className="flex my-2 font-semibold">
                    <CgProfile className="text-[30px] mr-2" /> {review.author}
                  </p>

                  <p>Content: {review.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewComponent;
