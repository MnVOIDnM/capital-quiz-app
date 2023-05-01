import {
  Box,
  Button,
  SimpleGrid,
  Flex,
  Square,
  HStack,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { imageUrlsState, isStartedState } from "../../recoil_state";
import { quizQueueState } from "../../recoil_state";

const Quiz = () => {
  const setIsStarted = useSetRecoilState(isStartedState);
  const quizQueue = useRecoilValue(quizQueueState);
  const imageUrls = useRecoilValue(imageUrlsState);
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

  const judge = (select) => {
    if (select === quizQueue.answer[counter].city) {
      updateQuiz();
    } else if (select != quizQueue.answer[counter].city) {
      alert("不正解！");
    }
  };

  return (
    <HStack w="100vw" h="90vh">
      <Square size="75vh" mt={1}>
        <img
          src={quizQueue.answer[counter].img}
          // src={imageUrls.find((url) => url === quizQueue.answer[counter].img)}
          key={quizQueue.answer[counter].name}
          alt={`prefecture image ${quizQueue.answer[counter].name}`}
        />
      </Square>
      <VStack h="70%">
        <Box mt={1} mr={5}>
          <Button onClick={backToHome}>Back to home</Button>
        </Box>
        <Spacer />
        <Flex h="85%">
          {" "}
          <SimpleGrid columns={2} spacing={2}>
            {quizQueue.choices[counter].map((choice) => (
              <Button
                px={12}
                py={12}
                w="25%"
                // colorScheme={choiceButtonColor}
                fontSize="2.8rem"
                key={choice}
                // isDisabled={isButtonDisabled}
                onClick={() => judge(choice)}
              >
                {choice}
              </Button>
            ))}
          </SimpleGrid>
        </Flex>
      </VStack>
    </HStack>
  );
};

export default Quiz;
