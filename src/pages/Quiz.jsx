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
import { useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isStartedState } from "../../recoil_state";
import { urls } from "../utils/urls";
import { quizQueueState } from "../../recoil_state";

const Quiz = () => {
  const setIsStarted = useSetRecoilState(isStartedState);
  const [quizQueue, setQuizQueue] = useRecoilState(quizQueueState);
  const [imageUrls, setImageUrls] = useState([]);
  const [restQuiz, setRestQuiz] = useState(47);
  const counter = 47 - restQuiz;

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
    if (select === quizQueue.answer[counter]) {
      alert("正解！");
      updateQuiz();
    } else if (select != quizQueue.answer[counter]) {
      alert("不正解！");
    }
  };

  return (
    <HStack w="100vw" h="90vh">
      <Square size="75vh" mt={1}>
        <img
          src={imageUrls[counter]}
          key={counter}
          alt={`prefecture image ${counter}`}
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
