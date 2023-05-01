import { Button, Flex } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { isStartedState, quizQueueState } from "../../recoil_state";
import { useEffect } from "react";
import { createQuiz } from "../utils/helpers";

const Title = () => {
  const setIsStarted = useSetRecoilState(isStartedState);
  const setQuizQueue = useSetRecoilState(quizQueueState);

  function startGame() {
    setIsStarted(true);
  }

  useEffect(() => {
    setQuizQueue(createQuiz());
  }, []);

  return (
    <>
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Button onClick={startGame}>Start</Button>
      </Flex>
    </>
  );
};

export default Title;
