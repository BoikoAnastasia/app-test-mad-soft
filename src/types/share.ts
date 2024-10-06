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
