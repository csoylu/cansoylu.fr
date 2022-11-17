import {Account} from './account.model';
export class Post {
  "id": number;
  "message": string;
  "created_time": string;
  "full_picture": string;
  "owner": Account;
  "likes": number;
  "comments": {};
}
