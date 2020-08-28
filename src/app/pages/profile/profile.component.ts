import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { global } from '../../services/global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: [],
  providers: [PostService, UserService]
})

export class ProfileComponent implements OnInit {

  public url;
  public posts: Array<Post>;
  public user: User;
  public identity;
  public token;

  constructor(
    // private settingsService: SettingsService
    private _postService: PostService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
    // private _categoryService: CategoryService
  ) {
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.getProfile();
  }

  getProfile() {
    // Sacar el id del post de la url
      this._route.params.subscribe(params => {
      let userId = +params['id'];
      this.getUser(userId);
      this.getPosts(userId);
    });
  }

  getUser(userId) {
    this._userService.getUser(userId).subscribe(
      response => {
        if (response.status == 'success') {
          this.user = response.user;
          console.log(this.user);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getPosts(userId) {
    this._userService.getPosts(userId).subscribe(
      response => {
        if (response.status == 'success') {
          this.posts = response.posts;
          console.log(this.posts);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deletePost(id) {
    this._postService.delete(this.token, id).subscribe(
      response => {

        this.getProfile();
      },
      error => {
        console.log(error);
      }
    );
  }
}
