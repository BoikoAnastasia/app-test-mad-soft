export interface IUserAnswer {
  index: number;
  answer: string;
}

export interface ITimer {
  hours?: number;
  minutes?: number;
  seconds?: number;
  over: boolean;
  setOver: (over: boolean) => void;
}

export interface FinishProps {
  count: number;
  questionsLength: number;
}

export interface ICurrentQuest {
  question: string;
  options:
    | {
        A?: string;
        B?: string;
        C?: string;
        D?: string;
      }
    | {};
  answer: string;
  type: string;
}
