import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ImageComponent = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    const fetchImages = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}/images?api_key=089ff97e142c4b012df105099009a50b&page=${currentPage}`
        );
        const data = await response.json();
        const posters = data.posters || [];
        const urls = posters.map(
          (poster) => `https://image.tmdb.org/t/p/original${poster.file_path}`
        );
        setImageUrls((prevImageUrls) => {
          // Use Set to ensure unique image URLs
          const uniqueUrls = new Set([...prevImageUrls, ...urls]);
          return Array.from(uniqueUrls);
        });
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [currentPage]);

  const loadMoreImages = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const renderImages = () => {
    return imageUrls.slice(0, currentPage * 5).map((url, index) => (
      <img
        key={index}
        src={url}
        alt={`Image ${index}`}
        // style={{ width: "200px", height: "auto", margin: "5px" }}
        className="w-full h- m-1"
      />
    ));
  };

  return (
    <div>
      <div className="text-center">{renderImages()}</div>
      {imageUrls.length >= currentPage * 5 && !isLoading && (
        <button className="mx-[auto] flex text-[blue]" onClick={loadMoreImages}>
          See More
        </button>
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default ImageComponent;
