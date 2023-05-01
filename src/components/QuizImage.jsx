import { Heading, Square, VStack } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { quizQueueState } from "../../recoil_state";
import React from "react";

const QuizImage = React.memo(({ counter }) => {
  const quizQueue = useRecoilValue(quizQueueState);
  const { name, img } = quizQueue.answer[counter];

  return (
    <>
      <VStack>
        <Heading size="4xl">{name}</Heading>
        <Square size="60vh" m={5}>
          <img src={img} key={name} alt={`prefecture image ${name}`} />
        </Square>
      </VStack>
    </>
  );
});

export default QuizImage;
