import { Button, SimpleGrid } from "@chakra-ui/react";

const QuizChoices = () => {
  return (
    <>
      <SimpleGrid columns={2} spacing={2}>
        <Button>Choice 1</Button>
        <Button>Choice 2</Button>
        <Button>Choice 3</Button>
        <Button>Choice 4</Button>
      </SimpleGrid>
    </>
  );
};

export default QuizChoices;
