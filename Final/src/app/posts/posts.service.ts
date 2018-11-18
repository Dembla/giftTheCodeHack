import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) {}
  getPosts() {
    // return [...this.posts];
    this.http.get<{message: string, posts: Post[]}>('http://localhost:3000/api/posts')
    .subscribe((postData) => {
      console.log(postData);
      this.posts = postData.posts;
      this.postsUpdated.next([...this.posts]);
    });
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(age: string, province: string, club: string, event: string) {
    const post: Post = {id: null, age: age, province: province, club: club, event: event};
    this.http.post<{message: string, posts}>('http://localhost:3000/api/posts', post)
    .subscribe((responseData) => {
      console.log(responseData);
      this.posts.push(post);
      this.postsUpdated.next([...this.posts]);
    });
  }
}
