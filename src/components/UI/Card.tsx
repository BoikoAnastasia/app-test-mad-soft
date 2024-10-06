//react
import { useState } from "react";
//share
import { ICurrentQuest, IOptions } from "../../types/share";
//components
import { OneAnswer } from "../typesQuestion/OneAnswer";
import { ManyAnswer } from "../typesQuestion/ManyAnswer";
import { InputAnswer } from "../typesQuestion/InputAnswer";
import { ImageAnswer } from "../typesQuestion/ImageAnswer";

export const Card = ({
  currentQuest,
  changeIndexQuest,
}: {
  currentQuest: ICurrentQuest;
  changeIndexQuest: (answerKey: string) => void;
}) => {
  const [answerKey, setAnswerKey] = useState<string | null>(null);

  const getAnswer = () => {
    if (answerKey === null) {
      alert("Необходимо ответить!");
      return;
    }
    changeIndexQuest(answerKey);
    setAnswerKey(null)
  };

  const handleChange = (value: string) => {
    setAnswerKey(value);
  };

  const typeOptions = (type: string, options: IOptions) => {
    if (type === "oneAnswer") {
      return <OneAnswer selectedValue={answerKey} options={options} handleChange={handleChange} />;
    }
    if (type === "manyAnswer") {
      return <ManyAnswer selectedValue={answerKey} options={options} handleChange={handleChange} />;
    }
    if (type === "inputAnswer") {
      return <InputAnswer handleChange={handleChange} />;
    }
    if (type === "imageAnswer") {
      return <ImageAnswer options={options} handleChange={handleChange} />;
    }
  };

  return (
    <div className="content-quest">
      <h3>{currentQuest.question}</h3>
      <div className="content-quests">
        {typeOptions(currentQuest.type, currentQuest.options)}
      </div>
      <button className="btn" onClick={getAnswer}>
        Отправить
      </button>
    </div>
  );
};
