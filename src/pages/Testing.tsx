import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { IUserAnswer } from "../types/share";

import { Slider } from "../components/UI/Slider";
import { Timer } from "../components/UI/Timer";
import { Card } from "../components/UI/Card";

import { finishResult } from "../utils/resultTest";

export const Testing = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question:
        "A flashing red traffic light signifies that a driver should do what?",
      options: {
        A: "stop",
        B: "speed up",
        C: "proceed with caution"
      },
      answer: "A",
      type: "oneAnswer",
    },
    {
      question: "A knish is traditionally stuffed with what filling?",
      options: {
        A: "potato",
        B: "creamed corn",
        C: "lemon custard",
        D: "raspberry jelly",
      },
      answer: "A, B, C",
      type: "manyAnswer",
    },
    {
      question: "A pita is a type of what?",
      options: {},
      answer: "fruit",
      type: "inputAnswer",
    },
    {
      question:
        "A portrait that comically exaggerates a person's physical traits is called a what?",
      options: {
        A: "https://res.cloudinary.com/stealthman22/image/upload/v1586308024/new-portfolio/hero/time-lapse-photography-of-waterfalls-during-sunset-210186.jpg",
        B: "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
        C: "https://thumbs.dreamstime.com/b/woman-praying-free-birds-to-nature-sunset-background-woman-praying-free-birds-enjoying-nature-sunset-99680945.jpg",
      },
      answer: "B",
      type: "imageAnswer",
    },
    {
      question: "A second-year college student is usually called a what?",
      options: {
        A: "sophomore",
        B: "senior",
        C: "freshman ",
        D: "junior ",
      },
      answer: "A",
      type: "manyAnswer",
    },
    {
      question:
        "A student who earns a J.D. can begin his or her career as a what?",
      options: {
        A: "lawyer",
        B: "bricklayer",
        C: "doctor",
        D: "accountant",
      },
      answer: "A, C",
      type: "manyAnswer",
    },
    {
      question:
        "A triptych is a work of art that is painted on how many panels?",
      options: {
        A: "two",
        B: "three",
        C: "five",
        D: "eight",
      },
      answer: "B",
      type: "oneAnswer",
    },
    {
      question:
        "According to a famous line from the existentialist play 'No Exit' what is hell?",
      options: {
        A: "oneself",
        B: "other people",
        C: "little made large",
        D: "hued in green and blue",
      },
      answer: "B",
      type: "oneAnswer",
    },
    {
      question:
        "According to a popular slogan, what state should people not 'mess with'?",
      options: {
        A: "New York",
        B: "Texas",
        C: "Montana",
        D: "Rhode Island",
      },
      answer: "B",
      type: "oneAnswer",
    },
    {
      question:
        "According to a Yale University study, what smell is the most recognizable to American adults?",
      options: {
        A: "tuna",
        B: "laundry",
        C: "popcorn",
        D: "coffee",
      },
      answer: "D",
      type: "oneAnswer",
    },
    {
      question:
        "According to folklore, the 'jackalope' is an antlered version of what animal?",
      options: {
        A: "chicken",
        B: "rabbit",
        C: "moose",
        D: "snake",
      },
      answer: "B",
      type: "oneAnswer",
    },
  ];
  const [currentQuest, setCurrentQuest] = useState(questions[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState<IUserAnswer[]>([]);

  const [over, setOver] = useState(false);
  const savedCurrentQuest = localStorage.getItem("indexQuest");

  const [testComplete, setTestComplete] = useState(false);

  useEffect(() => {
    if (!testComplete) {
      navigate("/test");
    }
  }, [testComplete, navigate]);

  useEffect(() => {
    if (savedCurrentQuest) {
      setCurrentIndex(Number(savedCurrentQuest));
    }
  }, [savedCurrentQuest]);

  useEffect(() => {
    getQuest(currentIndex);
  }, [currentIndex, savedCurrentQuest]);

  useEffect(() => {
    if (over) {
      let sliceIndex = questions.length - currentIndex;
      const count = finishResult(questions.slice(0, sliceIndex), userAnswer);
      return navigateToFinish(count, questions.length);
    }
  }, [over]);

  const getQuest = (currentIndex: Number) => {
    const quest = questions.find((_, index) => index === currentIndex);
    if (quest) {
      setCurrentQuest(quest);
    }
  };

  const navigateToFinish = (count: number, questionsLength: number) => {
    setTestComplete(true)
    navigate("/finish", { state: { count, questionsLength } });
  };

  const changeIndexQuest = (answerKey: any) => {
    if (currentIndex === questions.length - 1) {
      const count = finishResult(questions, userAnswer);
      return navigateToFinish(count, questions.length);
    }
    setUserAnswer((userAnswer) => [
      ...userAnswer,
      {
        index: currentIndex,
        answer: answerKey,
      },
    ]);
    setCurrentIndex((currentIndex) => currentIndex + 1);
    localStorage.setItem("indexQuest", `${currentIndex + 1}`);
  };

  return (
    <>
      <div className="header-flex">
        <h1>Тестирование</h1>
        <Timer minutes={30} over={over} setOver={setOver} />
      </div>
      <div className="content-flex-column">
        <div className="content-flex">
          {questions.map((_, index) => {
            if (index === currentIndex)
              return <Slider key={index} nameClass={"active"} />;
            if (index < currentIndex)
              return <Slider key={index} nameClass={"passed"} />;
            else return <Slider key={index} nameClass={""} />;
          })}
        </div>
        <Card currentQuest={currentQuest} changeIndexQuest={changeIndexQuest} />
      </div>
    </>
  );
};
