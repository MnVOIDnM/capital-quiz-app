import {
  Box,
  Button,
  Flex,
  Square,
  HStack,
  VStack,
  Spacer,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { isStartedState } from "../../recoil_state";
import { urls } from "../../urls";
import QuizChoices from "../components/quiz/QuizChoices";

const Quiz = () => {
  const setIsStarted = useSetRecoilState(isStartedState);
  const [num, setNum] = useState(0);
  const [imageUrls, setImageUrls] = useState([]);

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

  function nextImage() {
    setNum(num + 1);
  }

  return (
    <HStack w="100vw" h="90vh">
      <Square size="75vh" mt={1}>
        <img src={imageUrls[num]} key={num} alt={`prefecture image ${num}`} />
      </Square>
      <VStack h="70%">
        <Box mt={1} mr={5}>
          <Button onClick={backToHome}>Back to home</Button>
        </Box>
        <Spacer />
        <Flex h="85%">
          <QuizChoices />
        </Flex>
      </VStack>
    </HStack>
  );
};

export default Quiz;
