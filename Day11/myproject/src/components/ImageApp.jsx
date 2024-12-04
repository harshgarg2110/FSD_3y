import React, { useState } from "react";
import "./ImageApp.css";
import pic from "../images/qwerty.jpg";

const ImageApp = () => {
  const [width, setWidth] = useState(300);
  const [height, setHeight] = useState(200);
  const [rotation, setRotation] = useState(0);

  return (
    <div class="card cd">
      <div class="card2">
        <div className="disp">
          <img
            src={pic}
            style={{
              width: width,
              height: height,
              transform: `rotate(${rotation}deg)`,
            }}
          />

          <button class="button btn" onClick={() => setWidth(width + 10)}>
            <div class="button_lg">
              <div class="button_sl"></div>
              <div class="button_text">Increase Width</div>
            </div>
          </button>

          <button class="button btn" onClick={() => setWidth(width - 10)}>
            <div class="button_lg">
              <div class="button_sl"></div>
              <div class="button_text">Decrease Width</div>
            </div>
          </button>

          <button class="button btn" onClick={() => setHeight(height + 10)}>
            <div class="button_lg">
              <div class="button_sl"></div>
              <div class="button_text">Increase Height</div>
            </div>
          </button>
          <button class="button btn" onClick={() => setHeight(height - 10)}>
            <div class="button_lg">
              <div class="button_sl"></div>
              <div class="button_text">Decrease Height</div>
            </div>
          </button>
          <button class="button btn" onClick={() => setRotation(rotation + 10)}>
            <div class="button_lg">
              <div class="button_sl"></div>
              <div class="button_text">Rotate Clockwise</div>
            </div>
          </button>
          <button class="button btn" onClick={() => setRotation(rotation - 10)}>
            <div class="button_lg">
              <div class="button_sl"></div>
              <div class="button_text">Rotate AntiClockwise</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageApp;
