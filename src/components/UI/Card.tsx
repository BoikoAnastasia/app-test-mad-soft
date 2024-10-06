import { useState } from "react";
import { ICurrentQuest } from "../../types/share";
import { ImageAnswer } from "../typesQuestion/ImageAnswer";
import { InputAnswer } from "../typesQuestion/InputAnswer";
import { ManyAnswer } from "../typesQuestion/ManyAnswer";
import { OneAnswer } from "../typesQuestion/OneAnswer";
import { SequenceAnswer } from "../typesQuestion/SequenceAnswer";
import { ShoiceAnswer } from "../typesQuestion/ShoiceAnswer";



export const Card = ({
  currentQuest,
  changeIndexQuest,
}: {
  currentQuest: ICurrentQuest;
  changeIndexQuest: (answerKey:any) => void;
}) => {
  const [answerKey, setAnswerKey] = useState(null);

  const getAnswer = () => {
    if (answerKey === null) {
      alert("Выберите ответ!");
      return;
    }
    changeIndexQuest(answerKey);
  };

  const handleChange = (e: any) => {
    const {value } = e.target;
    setAnswerKey(value);
  };

  const typeOptions = (type: string, options: any, answer: string) => {
    if (type === "oneAnswer") {
      return <OneAnswer options={options} handleChange={handleChange} />;
    }
    if(type === 'manyAnswer'){
        return <ManyAnswer options={options} handleChange={handleChange}/>
    }
    // if(type === 'inputAnswer'){
    //     return <InputAnswer options={options}/>
    // }
    // if(type === 'sequenceAnswer'){
    //     return <SequenceAnswer options={options}/>
    // }
    // if(type === 'shoiceAnswer'){
    //     return <ShoiceAnswer options={options}/>
    // }
    // if(type === 'imageAnswer'){
    //     return <ImageAnswer options={options}/>
    // }
  };

  return (
    <div className="content-quest">
      <h3>{currentQuest.question}</h3>
      {typeOptions(
        currentQuest.type,
        currentQuest.options,
        currentQuest.answer
      )}
      <button onClick={getAnswer}>Отправить</button>
    </div>
  );
};
