import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ],
  providers: [UserService]

})
export class HeaderComponent implements OnInit {
  public identity;
  public token;

  constructor(
    public _userService: UserService
  ) {
    this.identity = this._userService.getIdentity();
   }

  ngOnInit(): void {
  }

}
