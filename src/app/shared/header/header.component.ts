import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { global } from '../../services/global.service';

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
  public url;

  constructor(
    public _userService: UserService
  ) {
    this.identity = this._userService.getIdentity();
    this.url = global.url;
   }

  ngOnInit(): void {
  }

}
