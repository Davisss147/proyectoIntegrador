import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user: User;
  public status: string;
  public token;
  public identity;   //Objeto del usuario identificado

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute

  ) {
    // this.page_title = 'Identificate';
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '');
  }

  ngOnInit() {
    //se ejecuta siempre y cierra sesion solo cuando le llega el parametro sure por la url
    this.logout();
  }

  // canActivate(){
  //   if(this._userService.estaLogueado()){
  //     console.log('Paso el guard');
  //     return true;
  //   } else{
  //     console.log('Bloqueado por el guard');
  //     this._router.navigate(['/login']);
  //     return false;
  //   }
  // }


  onSubmit(form) {
    this._userService.singup(this.user).subscribe(
      response => {
        // Devuelve el token
        if(response.status != 'error') {
          this.status = 'success';
          this.token = response;

          // objeto usuario identificado
          this._userService.singup(this.user, true).subscribe(
            response => {
                this.identity = response;

                // Persistir los datos del usuario identificado
                console.log(this.token);
                console.log(this.identity);

                // transoforma a un obejto json que me permite guardar en el localstorage
                localStorage.setItem('token', this.token);
                localStorage.setItem('identity', JSON.stringify(this.identity));
                this._router.navigate(['dashboard']);

            },
            error => {
              this.status = 'error';
              console.log(<any>error);
            }
          );

        } else {
          this.status = 'error';
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

  logout(){
    this._route.params.subscribe(params => {
      let logout = +params['sure'];

      if(logout == 1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        //Redireccion a inicio
        this._router.navigate(['login']);
      }
    });
  }

 

}




 // login() {
  //   // this.router.navigateByUrl('/');
  // }
