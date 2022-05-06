import React, { FC, useEffect, useRef } from "react";
import Lottie from "lottie-web";


export const Vector: FC = () => {
    const container = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (container.current) {
        Lottie.loadAnimation({
          container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require("public/91956-work-from-home.json"),
        });
      }
    }, []);
  
    return <div ref={container} className="h-screen"></div>;
  };
  