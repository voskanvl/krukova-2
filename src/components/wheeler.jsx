import React, { useState } from 'react'
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

const Wheeler = props => {
    const [color, setColor] = useState({
      currentIndex: 0,
      colors: ["red", "black", "grey", "blue", "green"]
    });
    const nextIndex = () => {
      console.log("nextIndex");
      const { colors, currentIndex } = color;
      if (currentIndex === colors.length - 1) {
        return setColor({ ...color, currentIndex: 0 });
      }
  
      return setColor({ ...color, currentIndex: currentIndex + 1 });
    };
  
    const prevIndex = () => {
      console.log("prevIndex");
      const { colors, currentIndex } = color;
      if (currentIndex === 0) {
        return setColor({ ...color, currentIndex: colors.length - 1 });
      }
  
      return setColor({ ...color, currentIndex: currentIndex - 1 });
    };
    return (
      <div>
        <ReactScrollWheelHandler
          upHandler={prevIndex}
          downHandler={nextIndex}
          customStyle={{
            width: "100%",
            height: "50vh",
            backgroundColor: color.colors[color.currentIndex],
            transition: "background-color .4s ease-out"
          }}
        >
          <h1>{props.children}</h1>
        </ReactScrollWheelHandler>
      </div>
    );
  };