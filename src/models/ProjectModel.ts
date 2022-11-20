interface Link {
  title: string;
  url: string;
}

export interface Project {
  image: string;
  title: string;
  links: Link[];
  description: string;
}
