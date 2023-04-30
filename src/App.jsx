import { useRecoilValue, useSetRecoilState } from "recoil";
import { isStartedState, quizQueueState } from "../recoil_state";
import Title from "./pages/Title";
import Quiz from "./pages/Quiz";
import { useEffect } from "react";
import { createQuiz } from "./utils/helpers";

function App() {
  const isStarted = useRecoilValue(isStartedState);
  const setQuizQueue = useSetRecoilState(quizQueueState);

  useEffect(() => {
    setQuizQueue(createQuiz());
  }, []);

  return <>{isStarted ? <Quiz /> : <Title />}</>;
}

export default App;
