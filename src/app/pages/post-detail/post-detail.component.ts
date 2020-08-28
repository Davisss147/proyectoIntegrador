import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { global } from '../../services/global.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: [],
  providers: [PostService, UserService]
})
export class PostDetailComponent implements OnInit {

  public post: Post;
  public identity;
  public url;

  constructor(
    private _postService: PostService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.identity = this._userService.getIdentity();
    this.url = global.url;
  }

  ngOnInit(){
    this.getPost();
  }

  getPost(){
    // Sacar el id del post de la url
    this._route.params.subscribe(params => {
      let id = +params['id'];
      
      // Peticion ajax para sacar los datos del post
      this._postService.getPost(id).subscribe(
        response => {
          if(response.status == 'success'){
            this.post = response.posts;
            console.log(this.post);
          }else{
            this._router.navigate(['dashboard']);
          }
        },
        error => {
          console.log(error);
          this._router.navigate(['dashboard']);
        }
      );

    });
  }
}
