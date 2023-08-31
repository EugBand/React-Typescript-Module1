import {IAuthor} from "./IAuthor";


export interface ICourse {
  id: string;
  title: string;
  description: string;
  creationDate: string;
  duration: number;
  authors: Array<string>;
  key?: string;
  category?: string
  image?: string
  price?: number
  rating?: {
    rate: number
    count: number
  }
}
