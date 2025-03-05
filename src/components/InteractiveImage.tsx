"use client";

import Image from "next/image";
import { useState } from "react";

export default function InteractiveImage({ src, alt, width, height }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "15px",
        boxShadow: hover ? "0 0 15px 5px rgba(255, 255, 255, 0.7)" : "none",
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ transition: "transform 0.3s ease", transform: hover ? "scale(1.1)" : "scale(1)", objectFit: "cover", borderRadius: "15px" }}
      />
    </div>
  );
}
