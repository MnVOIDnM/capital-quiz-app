import { capitalData } from "./capitalData";

const shuffle = ([...arr]) => {
  for (let i = arr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

export const createQuiz = () => {
  const quizChoices = [];
  const shuffledData = shuffle(capitalData);

  for (let i = 0; i < 47; i++) {
    let choices = [];
    const answer = shuffledData[i].city;
    const fakes = shuffledData[i].fakes;
    fakes.forEach((fake) => {
      choices.push(fake);
    });
    choices.push(answer);
    quizChoices.push(shuffle(choices));
    // quizChoices.push(choices);
  }

  const queue = {
    choices: quizChoices,
    answer: shuffledData,
  };

  return queue;
};
