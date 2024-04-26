import React, { useState } from "react";
import "./ActorCard.css";
import TelegramAudioPlayer from "./TelegramAudioPlayer";

const ActorCard = ({ actor }) => {
  const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <div className="actor-card">
      <h2 className="actor-head">
        <div className="glass-circle">
          <div className="face"></div>
          {actor.labels.gender === "male" ? "🧔🏻" : "👩🏻"}
        </div>
        <div className="actor-name">{actor.name}</div>
      </h2>

      <div className="actor-labels">
        <p className="actor-accent">{actor.labels.accent}</p>
        <p className="actor-desc">{actor.labels.description}</p>
        <p className="actor-age">{actor.labels.age}</p>
      </div>

      <p className="actor-usecase">Use Case: {actor.labels["use case"]}</p>

      <div className="audio">
        <TelegramAudioPlayer audioUrl={actor.preview_url} />
      </div>
    </div>
  );
};

export default ActorCard;
