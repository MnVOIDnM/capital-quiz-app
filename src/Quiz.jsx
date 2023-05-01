import { Button, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { isStartedState } from "../recoil_state";
import QuizChoices from "./components/QuizChoices";
import QuizImage from "./components/QuizImage";

const Quiz = () => {
  const setIsStarted = useSetRecoilState(isStartedState);

  const [restQuiz, setRestQuiz] = useState(47);
  const counter = 47 - restQuiz;

  function backToHome() {
    setIsStarted(false);
  }

  const updateQuiz = () => {
    if (restQuiz > 1) {
      setRestQuiz((prev) => prev - 1);
    } else if (restQuiz === 1) {
      setIsStarted(false);
    }
  };

  return (
    <HStack w="100vw" h="90vh" justifyContent="center" alignItems="center">
      <QuizImage counter={counter} />
      <VStack h="70%">
        <Button my={10} onClick={backToHome}>
          もどる
        </Button>
        <QuizChoices updateQuiz={updateQuiz} counter={counter} />
      </VStack>
    </HStack>
  );
};

export default Quiz;
