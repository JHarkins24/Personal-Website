import { useState } from "react";

const photos = [
        "./img/test1.jpg",
        "./img/test2.jpg",
        "./img/test3.png",
    ];

export default function AboutMe( images ) {
  

  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCarousel = (index) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

   const closeCarousel = () => {
    setIsCarouselOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  
    return (
        <section id="AboutMe" className="about--section">
            <div className="photo-grid">
        {photos.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Collage Photo ${index + 1}`}
            onClick={() => openCarousel(index)}
          />
        ))}
      </div>
            {isCarouselOpen && (
        <div className="carousel-overlay" onClick={closeCarousel}>
          <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
            <button className="carousel-btn prev" onClick={prevImage}>&#10094;</button>
            <img src={photos[currentImageIndex]} alt={`Carousel Photo ${currentImageIndex + 1}`} />
            <button className="carousel-btn next" onClick={nextImage}>&#10095;</button>
          </div>
          <span className="close-btn" onClick={closeCarousel}>&times;</span>
        </div>
            )}
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <h1 className="skills--section--heading">
                        About Me
                    </h1>
                    <p className="hero--section--description">
                        I was born in Philadelphia and moved to California when I was younger, yes I did grow up watching fresh prince of bel-air. I got my passion for technology in California while Philadelphia gave me my passion for motorsports & Football <span style={{ color: 'green' }}>(Go Birds)</span>.  
                    </p>
                    <p className="hero--section--description">
                        When I'm not developing projects, I enjoy spending my weekend's working on and tracking my car while also restoring classic games and competing in super smash bros. melee tournaments.
                    </p>
                </div>
            </div>
        </section>
    )
}
