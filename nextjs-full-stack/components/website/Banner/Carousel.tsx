import React from "react";

import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "230px",
  color: "#fff",
  lineHeight: "230px",
  textAlign: "center",
  background: "#364d79",
};

export default function AntCarousel() {
  return (
    <div className="border rounded-xl">
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>

  );
}
