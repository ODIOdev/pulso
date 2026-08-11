export type Audience = "DR" | "US";

export type PulseQuestion = {
  id: string;
  slug: string;
  question: string;
  status: "draft" | "published" | "closed";
  category: string;
  options: string[];
  published_at: string | null;
};

export type PollResult = {
  option: string;
  votes: number;
  percentage: number;
};
