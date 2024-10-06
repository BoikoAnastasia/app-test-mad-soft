import { useState } from "react";

import { ICurrentQuest } from "../../types/share";

import { OneAnswer } from "../typesQuestion/OneAnswer";
import { ManyAnswer } from "../typesQuestion/ManyAnswer";
import { InputAnswer } from "../typesQuestion/InputAnswer";
import { ImageAnswer } from "../typesQuestion/ImageAnswer";

export const Card = ({
  currentQuest,
  changeIndexQuest,
}: {
  currentQuest: ICurrentQuest;
  changeIndexQuest: (answerKey: any) => void;
}) => {
  const [answerKey, setAnswerKey] = useState<string | null>(null);

  const getAnswer = () => {
    if (answerKey === null) {
      alert("Необходимо ответить!");
      return;
    }
    changeIndexQuest(answerKey);
  };

  const handleChange = (value: string) => {
    console.log(value);
    setAnswerKey(value);
  };

  const typeOptions = (type: string, options: any) => {
    if (type === "oneAnswer") {
      return <OneAnswer options={options} handleChange={handleChange} />;
    }
    if (type === "manyAnswer") {
      return <ManyAnswer options={options} handleChange={handleChange} />;
    }
    if (type === "inputAnswer") {
      return <InputAnswer handleChange={handleChange} />;
    }
    if(type === 'imageAnswer'){
        return <ImageAnswer options={options} handleChange={handleChange} />
    }
  };

  return (
    <div className="content-quest">
      <h3>{currentQuest.question}</h3>
      {typeOptions(currentQuest.type, currentQuest.options)}
      <button onClick={getAnswer}>Отправить</button>
    </div>
  );
};
