import { Button, Flex } from "@chakra-ui/react";
import { useSetRecoilState } from "recoil";
import { isStartedState } from "../../recoil_state";

const Title = () => {
  const setIsStarted = useSetRecoilState(isStartedState);

  function startGame() {
    setIsStarted(true);
  }

  return (
    <>
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Button onClick={startGame}>Start</Button>
      </Flex>
    </>
  );
};

export default Title;
