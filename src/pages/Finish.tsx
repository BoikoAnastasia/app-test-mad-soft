import { FC } from "react";
import { useLocation } from "react-router-dom";
interface FinishProps {
  count: number;
  questionsLength: number;
}

export const Finish: FC = () => {
    const location = useLocation();
  const { count, questionsLength } = location.state as FinishProps;

  return (
    <>
      <h1>Результаты:</h1>
      <span>
        Ты набрал: {count} из {questionsLength}
      </span>
    </>
  );
};
