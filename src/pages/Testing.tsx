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
        C: "proceed with caution",
        D: "honk the horn",
      },
      answer: "A",
      type: "oneAnswer",
      //   type: "manyAnswer",
      //   type: "inputAnswer",
      //   type: "sequenceAnswer",
      //   type: "shoiceAnswer",
      //   type: "imageAnswer",
    },
    {
      question: "A knish is traditionally stuffed with what filling?",
      options: {
        A: "potato",
        B: "creamed corn",
        C: "lemon custard",
        D: "raspberry jelly",
      },
      answer: "A",
      type: "oneAnswer",
    },
    {
      question: "A pita is a type of what?",
      options: {
        A: "fresh fruit",
        B: "flat bread",
        C: "French tart",
        D: "friend bean dip",
      },
      answer: "B",
      type: "oneAnswer",
    },
    {
      question:
        "A portrait that comically exaggerates a person's physical traits is called a what?",
      options: {
        A: "landscape",
        B: "caricature",
        C: "still life",
        D: "Impressionism",
      },
      answer: "B",
      type: "oneAnswer",
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
      type: "oneAnswer",
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
      answer: "A",
      type: "oneAnswer",
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
  }, []);

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
        {/* {!testComplete && <p>Вы не можете покинуть эту страничку, пока не завершите тест.</p>} */}
        <h1>Тестирование</h1>
        <Timer seconds={30} over={over} setOver={setOver} />
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
