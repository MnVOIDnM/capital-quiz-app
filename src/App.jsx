import { useRecoilValue } from "recoil";
import Title from "./pages/Title";
import Quiz from "./pages/Quiz";
import { isStartedState } from "../recoil_state";

function App() {
  const isStarted = useRecoilValue(isStartedState);
  return <>{isStarted ? <Quiz /> : <Title />}</>;
  //   return (
  //     <>
  //       <Test />
  //     </>
  //   );
}

export default App;
