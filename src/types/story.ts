export type Story = {
  id: number;
  by: string;
  descendants: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  kids?: number[];
};
