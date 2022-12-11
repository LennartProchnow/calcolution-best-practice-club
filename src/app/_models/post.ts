import {User} from './user';

export class Post {

  creator: User;
  post: string;
  image?: string;
  likes: number = 0;
  likedUser: User[] = [];
  comments: number; //this has to be subposts
  // events

  constructor(creator: User, post: string, likes?: number, comments?: number) {
    this.creator = creator;
    this.post = post;
    this.likes = likes;
    this.comments = comments;
  }

  addLike(user: User) {
    if(!this.likedUser.includes(user)) {
      this.likes = this.likes + 1;
    }
  }

  setImage(image: string) {
    this.image = image;
  }

}
