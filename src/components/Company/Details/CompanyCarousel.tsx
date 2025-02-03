import { Carousel } from "antd";
import React from "react";
import "antd/dist/reset.css";

function CompanyCarousel() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const contentStyle: React.CSSProperties = {
    margin: 0,
    minHeight: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "url('../../../src/assets/test-slider.jpg')",
    borderRadius: "10px",
  };

  return (
    <Carousel
      afterChange={onChange}
      style={{ height: "100%" }}
      draggable
      autoplay
    >
      <div>
        <h3 style={contentStyle}></h3>
      </div>
      <div>
        <h3 style={contentStyle}></h3>
      </div>
      <div>
        <h3 style={contentStyle}></h3>
      </div>
      <div>
        <h3 style={contentStyle}></h3>
      </div>
    </Carousel>
  );
}

export default CompanyCarousel;
