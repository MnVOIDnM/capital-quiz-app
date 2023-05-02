import { capitalData } from "./capitalData";

const shuffle = (arr) => {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export const createQuiz = () => {
  const shuffledData = shuffle(capitalData);

  const quizChoices = shuffledData.map((data) => {
    const choices = [...data.fakes, data.city];
    return shuffle(choices);
  });

  const queue = {
    choices: quizChoices,
    answer: shuffledData,
  };

  return queue;
};
