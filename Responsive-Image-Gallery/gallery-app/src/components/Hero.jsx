import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import "../styles/Hero.css";

import artworks, { humanModel } from "../assets/assets";
import { css3, react, github, stackoverflow, linkedIn } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <footer>
        <div
          className="page-title"
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "40px",
            padding: "20px 0",
          }}
        >
          <span style={{ fontFamily: "Biheastra", fontSize: "105px" }}>
            Art Galleria.
          </span>
          <span style={{fontStyle: "italic"}}>
            Explore the World of Renowned Artists and their Iconic Creations
          </span>
        </div>
        <div style={{ display: "flex" }}>
          <div className="footer-content" style={{ flex: "2" }}>
            <div style={{ width: "90%" }}>
              <p>
                Art is a reflection of our society's beauty, creativity, and
                diversity. It has the power to evoke emotions, spark
                imagination, and bring people together. In this project, we
                celebrate the beauty of art and its impact on our lives,
                showcasing a diverse collection of artworks that inspire and
                uplift. Through the lens of art, we can explore the complexities
                of human experience, challenge our perspectives, and foster a
                deeper understanding of ourselves and the world around us. By
                embracing the richness of artistic expression, we can cultivate
                empathy, creativity, and a sense of community, ultimately
                enriching our lives and the world we live in.
              </p>
            </div>
            <div>
              <h2 style={{ marginBottom: "20px" }}>Follow Me</h2>
              <a
                href="https://www.linkedin.com/in/ebenezer-kobby-tio"
                target="_blank"
              >
                <img
                  src={linkedIn}
                  alt="linkedIn-icon"
                  className="footer-icons"
                />
              </a>
              <a href="https://github.com/drksknnedpapi" target="_blank">
                <img src={github} alt="github-icon" className="footer-icons" />
              </a>
              <a
                href="https://stackoverflow.com/users/25691514/kobbythedev"
                target="_blank"
              >
                <img
                  src={stackoverflow}
                  alt="stackoverflow-icon"
                  className="footer-icons"
                />
              </a>
            </div>
          </div>
          <div style={{ flex: "1" }}>
            <img
              src={humanModel}
              alt="humanModel"
              style={{ width: "50%", height: "auto" }}
            />
          </div>
        </div>
      </footer>
    </>
  );
};

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(selectedImage === index ? null : index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="container">
        <div id="page-title">
          <h1>Art Galleria.</h1>
          <span>
            Explore the World of Renowned Artists and their Iconic Creations
          </span>
          <span style={{ display: "block" }}>
            Designed by:{" "}
            <a
              href="https://kobbythedev.vercel.app"
              target="_blank"
              style={{ textDecoration: "none", color: "rgb(207, 255, 4)" }}
            >
              KobbyTheDev →
            </a>
          </span>
          <span style={{ display: "flex" }}>
            Made with:{" "}
            <div style={{ margin: "0 5px" }}>
              ReactJs
              <img src={react} alt="ReactJs-Svg" className="icons" />
            </div>{" "}
            &{" "}
            <div style={{ margin: "0 5px" }}>
              CSS
              <img src={css3} alt="CSS3-Svg" className="icons" />
            </div>
          </span>
        </div>
        <div style={{ padding: "20px" }}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
          >
            <Masonry gutter="30px">
              {artworks.map((item, index) => (
                <div
                  style={{ display: "flex" }}
                  onClick={() => handleImageClick(index)}
                >
                  <div key={index}>
                    {" "}
                    <img
                      src={item.image}
                      alt={`Artwork-${index}`}
                      style={{
                        width: "100%",
                        display: "block",
                        borderRadius: "8px",
                        cursor: "pointer",
                      }}
                      className="gallery-image"
                    />
                  </div>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
          {selectedImage !== null && (
            <div className="modal" onClick={closeModal}>
              <div
                className="modal-content"
                style={{ display: "flex", gap: "20px" }}
              >
                <img
                  src={artworks[selectedImage].image}
                  alt={`Artwork-${selectedImage}`}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                  }}
                >
                  <h1>{artworks[selectedImage].name}</h1>
                  <h2>{artworks[selectedImage].artist}</h2>
                  <h3>{artworks[selectedImage].date}</h3>
                  <p>{artworks[selectedImage].description}</p>
                  <a
                    href={artworks[selectedImage].url}
                    style={{
                      textDecoration: "none",
                      color: "whitesmoke",
                      fontStyle: "italic",
                    }}
                    target="_blank"
                  >
                    More about the artwork →
                  </a>
                </div>
                <span
                  className="close"
                  onClick={closeModal}
                  style={{ marginLeft: "auto" }}
                >
                  &times;
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Hero;
