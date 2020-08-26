import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Category } from '../../models/category.model';
import { CategoryService } from '../../services/category.service';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { global } from '../../services/global.service';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: [],
  providers: [CategoryService, UserService, PostService]
})
export class CategoryDetailComponent implements OnInit {

  public page_title: string;
  public category: Category;
  public posts: any;
  public url: string;
  public identity;
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _categoryService: CategoryService,
    private _userService: UserService,
    private _postService: PostService


  ) { 
    this.url = global.url;
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.getPostByCategory();
  }

  getPostByCategory(){
    this._route.params.subscribe(params => {
      let id = +params['id'];
      
      this._categoryService.getCategory(id).subscribe(
        response => {
          if(response.status == 'success'){
            this.category = response.category;
            
            this._categoryService.getPosts(id).subscribe(
              response => {
                if(response.status == 'success'){
                  this.posts = response.posts;
                }else{
                  this._router.navigate(['/dashboard']);
                }
              },
              error =>{
                console.log(error);
              }
            );

          }else{
            this._router.navigate(['/dashboard']);
          }
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  deletePost(id){
    this._postService.delete(this.token, id).subscribe(
      response => {
        this.getPostByCategory();
      },
      error => {
        console.log(error);
      }
    );
  }

}
