import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { CategoryService } from '../services/category.service';
import { Post } from '../models/post.model';
import { global } from '../services/global.service';


declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
  providers: [CategoryService]
})
export class PagesComponent implements OnInit {

  public url;
  public categories;

  constructor(
      private settingsService: SettingsService,
      private _categoryService: CategoryService
     ) { 
        this.url = global.url;
     }

  ngOnInit(){
    this.getCategories();
    customInitFunctions();
  }

  getCategories(){
    this._categoryService.getCategories().subscribe(
      response => {
        if(response.status == 'success'){
          this.categories = response.categories;
          console.log(this.categories);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}



