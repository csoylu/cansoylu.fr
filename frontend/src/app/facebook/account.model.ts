import { Post } from './post.model';
export class Account {
  "id": number;
  "name": string;
  "avatar": string;
  "access_token": string;
  "posts": Post[];
}
