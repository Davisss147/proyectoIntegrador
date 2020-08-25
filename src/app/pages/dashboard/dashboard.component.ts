import { Component, OnInit } from '@angular/core';
// import { SettingsService } from '../../services/settings.service';
// import { CategoryService } from '../../services/category.service';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { global } from '../../services/global.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
  providers: [PostService, UserService ]

})
export class DashboardComponent implements OnInit {

  public page_title: string;
  public url;
  public categories;
  public posts: Array<Post>;
  public identity;
  public token;

  constructor(
    // private settingsService: SettingsService,
    private _postService: PostService,
    private _userService: UserService
    // private _categoryService: CategoryService
  ) { 
    this.page_title = 'Inicio';
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
    this._postService.getPosts().subscribe(
      response => {
        if(response.status == 'success'){
          this.posts = response.posts;
          console.log(this.posts);
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
