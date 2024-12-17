export type Lang = 'RU' | 'EN';

export type Advantage = {
  id: number;
  item_number: number;
  title: string;
  description: string;
};

export type Project = {
  id: number;
  item_number: number;
  title: string;
  webm: string;
  mp4: string;
};

export type TeamMember = {
  id: number;
  item_number: number;
  image: string;
  name: string;
  position: string;
};

export type Metric = {
  id: number;
  item_number: number;
  percent: number;
  description: string;
};

export type SchemaStage = {
  id: number;
  item_number: number;
  title: string;
  description: string;
};

export type Claim = {
  username: string;
  contacts: string;
  company: string;
  comment: string;
};
