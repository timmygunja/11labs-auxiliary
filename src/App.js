/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // const start = async () => {
    //   await sleep(1500);
    //   await Promise.resolve().then(() => {
    //     setBtnClass("muted");
    //   });
    //   await Promise.resolve().then(() => {
    //     setBtnClass("");
    //   });
    // };

    // start();
  }, []);

  return (
    <div className="App">
      <button type="button">
        НАЖМИТЕ ДЛЯ ПОЛНОГО ПОГРУЖЕНИЯ
      </button>
      <div id="usercard"></div>
      <p>Just text</p>
      <a class="link" href="https://mihailgok.ru">
        Link
      </a>
      <p class="hint">Some little hint</p>
      <button id="btn" class="button">
        Show/Hide Main Button
      </button>
      <button id="btnED" class="button">
        Enable/Disable Main Button
      </button>
    </div>
  );
}

export default App;
