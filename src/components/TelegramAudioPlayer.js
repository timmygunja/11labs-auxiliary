import React, { useState } from "react";

import "./TelegramAudioPlayer.css";

const TelegramAudioPlayer = ({ audioUrl }) => {
  return (
    <div className="telegram-audio-player">
      <audio controls className="audio-player">
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default TelegramAudioPlayer;
