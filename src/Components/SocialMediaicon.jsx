const SocialMediaicon = () => {
  const img = [
    "../public/SocialMedia/download (4).png",
    "../public/SocialMedia/Prime_Video.774b061c5cb973380828.jpg",
    "../public/SocialMedia/download (5).png",
    "../public/SocialMedia/download (6).png",
    "../public/SocialMedia/download.jfif",
    "../public/SocialMedia/Sonyliv.e6d2437e998a5c7c5715.png",
    "../public/SocialMedia/download (4).jfif",
    "../public/SocialMedia/download (2).jfif",
    "../public/SocialMedia/download (3).jfif",

    // Add more image URLs as needed
  ];

  return (
    <>
      <div className="flex flex-wrap Social-media-icon">
        {img.map((imageUrl, index) => (
          <img
            className="mx-1 rounded-xl w-[43px] mb-2"
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
          />
        ))}
      </div>
    </>
  );
};
export default SocialMediaicon;
