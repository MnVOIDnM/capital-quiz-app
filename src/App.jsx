import { useRecoilValue, useSetRecoilState } from "recoil";
import { imageUrlsState, isStartedState } from "../recoil_state";
import Title from "./Title";
import Quiz from "./Quiz";
import { useEffect } from "react";
import { urls } from "./utils/urls";

function App() {
  const isStarted = useRecoilValue(isStartedState);
  const setImageUrls = useSetRecoilState(imageUrlsState);

  useEffect(() => {
    Promise.all(
      urls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            resolve(url);
          };
          img.onerror = reject;
          img.src = url;
        });
      })
    )
      .then((urls) => {
        setImageUrls(urls);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <>{isStarted ? <Quiz /> : <Title />}</>;
}

export default App;
