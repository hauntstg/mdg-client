import { useState } from "react";
import "./FeedbackImages.css";

const REST_API = import.meta.env.VITE_REST_API;
export default function FeedbackImages({ images = [] }) {
  const [index, setIndex] = useState(0);
  if (!images || images.length === 0) return;
  const current = images[index];
  const url = `${REST_API}${current}`;

  const isVideo = (file) => {
    const ext = file.toLowerCase();
    const videoExtensions = [
      ".mp4",
      ".webm",
      ".ogg",
      ".ogv",
      ".mov",
      ".m4v",
      ".avi",
      ".wmv",
      ".mkv",
      ".flv",
    ];

    return videoExtensions.some((vext) => ext.endsWith(vext));
  };

  return (
    <div className="fb-slider-container">
      {isVideo(current) ? (
        <video
          className="fb-slider-video"
          src={url}
          controls
          preload="metadata"
        />
      ) : (
        <img className="fb-slider-img" src={url} alt="" />
      )}

      <div className="fb-slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`fb-dot ${index === i ? "fb-active" : ""}`}
            onClick={() => setIndex(i)}
          >
            {i + 1}
          </span>
        ))}
      </div>
    </div>
  );
}
