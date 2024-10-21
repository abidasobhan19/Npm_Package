// src/Circle.js
import React from "react";
import PropTypes from "prop-types";
import "./circle.css";
const Circle = ({
  images = [],
  title = "Browse Food by",
  subtitle = "Categories",
}) => {
  return (
    <section className="Circle shadow-lg">
      <div className="container-fluid wrap_Upper shadow-lg">
        <div className="title-area text-center">
          <h2 className="sec-title">
            <span className="sf_init_title">{title}</span>{" "}
            <span className="sf_text-theme">{subtitle}</span>
          </h2>
        </div>
        <div className="mt-3">
          <div className="row">
            {images.map((imgSrc, index) => (
              <div
                key={index}
                className="col-4 d-flex align-items-center justify-content-center"
              >
                <div className="main">
                  <div className="name">Biryani</div>
                  <img
                    className="img-fluid"
                    src={imgSrc}
                    alt={`Food ${index}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Typechecking for props
Circle.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Circle;
