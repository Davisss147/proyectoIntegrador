import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: [],
  providers: [UserService, CategoryService]
})
export class CategoriasComponent implements OnInit {
  
  public identity;
  public token;
  public category: Category;
  public status: string;
  public categories;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _categoryService: CategoryService
  ) { 
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.category = new Category(1, '');
  }

  ngOnInit(){
  
  }

  onSubmit(form){
    this._categoryService.create(this.token, this.category).subscribe(
      response => {
          if(response.status == 'success'){
              this.category = response.category;
              this.status = 'success';

              this._router.navigate(['dashboard/dashboard']);
          }
      },
      error => {
          this.status = 'error';
          console.log(<any>error);
      }
    );
  }
}