import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuItems: any[];
  menuItems2: any[];
  public categories;

  constructor( private sidebarService: SidebarService,
    private _categoryService: CategoryService
    ) {
    this.menuItems = sidebarService.menu;
    this.menuItems2 = sidebarService.menu2;
    

    console.log(this.menuItems)
  }

  ngOnInit(){
    this.getCategories();

  }

  getCategories(){
    this._categoryService.getCategories().subscribe(
      response => {
        if(response.status == 'success'){
          this.categories = response.categories;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

}
