import { atom, selector } from "recoil";

export const quizQueueState = atom({
  key: "quizQueue",
  default: [],
});

export const isStartedState = atom({
  key: "isStarted",
  default: false,
});

export const imageUrlsState = atom({
  key: "imageUrls",
  default: [],
});
