import { Button, Flex, SimpleGrid } from "@chakra-ui/react";
import React, { useState } from "react";
import { quizQueueState } from "../../recoil_state";
import { useRecoilValue } from "recoil";

const QuizChoices = React.memo(({ updateQuiz, counter }) => {
  const quizQueue = useRecoilValue(quizQueueState);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [choiceButtonColor, setChoiceButtonColor] = useState("gray");

  function setButtonEffect(color, timeout) {
    setIsButtonDisabled(true);
    setChoiceButtonColor(color);
    setTimeout(() => {
      setIsButtonDisabled(false);
      setChoiceButtonColor("gray");
    }, timeout);
  }
  const judge = (select) => {
    if (select === quizQueue.answer[counter].city) {
      setButtonEffect("green", 200);
      updateQuiz();
    } else {
      setButtonEffect("red", 500);
    }
  };

  return (
    <Flex h="85%">
      <SimpleGrid columns={2} spacing={5}>
        {quizQueue.choices[counter].map((choice) => (
          <Button
            h="20vh"
            w="20vh"
            colorScheme={choiceButtonColor}
            fontSize="4xl"
            key={choice}
            isDisabled={isButtonDisabled}
            onClick={() => judge(choice)}
          >
            {choice}
          </Button>
        ))}
      </SimpleGrid>
    </Flex>
  );
});

export default QuizChoices;
