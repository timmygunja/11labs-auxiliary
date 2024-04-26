/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import "./App.css";
import ActorCard from "./components/ActorCard";

function App() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("https://api.elevenlabs.io/v1/voices")
      .then((response) => response.json())
      .then((data) => setActors(data.voices));
  }, []);

  return (
    <div className="App">
      <div className="list">
        {actors.map((actor) => (
          <ActorCard key={actor.voice_id} actor={actor} />
        ))}
      </div>
    </div>
  );
}

export default App;
