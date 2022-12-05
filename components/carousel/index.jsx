import { useState, useEffect } from "react";

const ImageCarousel = ({ images, children }) => {
  // Use the state hook to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Use the effect hook to update the current index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  // Render the current image
  return (
    <div className="relative w-full h-[450px] lg:h-[700px] bg-[#013d72]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`w-full h-full absolute opacity-0 transition-all ease-in duration-1000 ${
            currentIndex === index ? "opacity-100" : ""
          }`}
        />
      ))}
      {children}
    </div>
  );
};

export default ImageCarousel;
