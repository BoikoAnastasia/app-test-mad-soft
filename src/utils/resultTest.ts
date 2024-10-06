export const finishResult = (questions: any, userAnswer:any) => {
    const tmp1 = questions.map((el:any) => el.answer);
    const tmp2 = userAnswer.map((el: any) => el.answer);
    let res = 0;
    for (let i = 0; i < tmp1.length; i++) {
      if (tmp1[i] === tmp2[i]) {
        res++;
      }
    }
    return res
  };