export type Row = {
  id: string;
  generation: string;
  answers: number[];
};

export type Rows = Row[];

export const rows: Rows = [
  {
    id: "A1",
    generation: "a1",
    answers: [0.1, 0.2, 0.3, 0.4]
  },
  {
    id: "A2",
    generation: "a2",
    answers: [0.1, 0.2, 0.3, 0.4]
  }
];
