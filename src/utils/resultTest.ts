import { ICurrentQuest, IUserAnswer } from "../types/share";

export const finishResult = (
  questions: ICurrentQuest[],
  userAnswer: IUserAnswer[]
) => {
  const tmp1 = questions.map((el: ICurrentQuest) => el.answer);
  const tmp2 = userAnswer.map((el: IUserAnswer) => el.answer);
  let res = 0;
  for (let i = 0; i < tmp1.length; i++) {
    if (tmp1[i] === tmp2[i]) {
      res++;
    }
  }
  return res;
};
