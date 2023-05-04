import { CommentIds } from "./comment";

export type StoryType = "story" | "comment" | "job" | "poll" | "pollopt";

export type Story = {
  id: number;
  by: string;
  descendants: number;
  score: number;
  time: number;
  title: string;
  type: StoryType;
  url: string;
  kids?: CommentIds;
};
