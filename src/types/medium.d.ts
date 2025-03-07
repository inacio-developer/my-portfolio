export type Feed = {
  id?: number;
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  enclosure: object;
  categories: string[];
};

type User = {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
};

type Medium = {
  status: string;
  user: User;
  items: Feed[];
};

export { Medium };
