export interface Hero {
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  name: string;
  description: string;
}
