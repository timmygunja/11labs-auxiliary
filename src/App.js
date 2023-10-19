/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [btnClass, setBtnClass] = useState("button-disabled");
  const [imgClass1, setImgClass1] = useState("image-hide");
  const [imgClass2, setImgClass2] = useState("image-hide");
  const [imgClass3, setImgClass3] = useState("image-hide");
  const [imgClass4, setImgClass4] = useState("image-hide");
  const [imgClass5, setImgClass5] = useState("image-hide");
  const [imgClass6, setImgClass6] = useState("image-hide");
  const [imgClass7, setImgClass7] = useState("image-hide");

  const hideAll = async () => {
    return await Promise.resolve().then(() => {
      setImgClass1("image-hide");
      setImgClass2("image-hide");
      setImgClass3("image-hide");
      setImgClass4("image-hide");
      setImgClass5("image-hide");
      setImgClass6("image-hide");
      setImgClass7("image-hide");
    });
  };

  const sleep = async (time) => {
    return await new Promise(async (r) => await setTimeout(r, time));
  };

  const handler = async () => {
    await Promise.resolve().then(() => {
      setBtnClass("button-disabled");
    });

    loop();
  };

  const loop = async () => {
    while (true) {
      await sleep(2000);
      hideAll();
      await Promise.resolve().then(() => {
        setImgClass1("image-show");
      });
      await sleep(4000);
      hideAll();
      Promise.resolve().then(() => {
        setImgClass2("image-show");
      });
      await sleep(4000);
      hideAll();
      Promise.resolve().then(() => {
        setImgClass7("image-show");
      });
      await sleep(1000);
      hideAll();
      await Promise.resolve().then(() => {
        setImgClass1("image-show");
      });
      await sleep(1750);
      hideAll();
      await Promise.resolve().then(() => {
        setImgClass3("image-show");
      });
      await sleep(4000);
      hideAll();
      await Promise.resolve().then(() => {
        setImgClass4("image-show");
      });
      await sleep(4000);
      hideAll();
      await Promise.resolve().then(() => {
        setImgClass5("image-show");
      });
      await sleep(4000);
      hideAll();
      await Promise.resolve().then(() => {
        setImgClass6("image-show");
      });
      await sleep(4000);
      hideAll();
      await Promise.resolve().then(() => {
        setImgClass1("image-show");
      });
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const start = async () => {
      await sleep(1500);
      await Promise.resolve().then(() => {
        setBtnClass("muted");
      });
      await Promise.resolve().then(() => {
        setBtnClass("");
      });
    };

    start();
  }, []);

  return (
    <div className="App">
      <button type="button" className={btnClass} onClick={handler}>
        НАЖМИТЕ ДЛЯ ПОЛНОГО ПОГРУЖЕНИЯ
      </button>
      <img src="em.jpg" className={imgClass1} />
      <img src="ad.jpg" className={imgClass2} />
      <img src="ba2.jpg" className={imgClass3} />
      <img src="ha.jpg" className={imgClass4} />
      <img src="ka.jpg" className={imgClass5} />
      <img src="na.png" className={imgClass6} />
      <img src="nap.jpg" className={imgClass7} />
    </div>
  );
}

export default App;
