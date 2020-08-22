import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { global } from './global.service';

@Injectable()
export class UserService {
    public url: string;
    public identity;
    public token;

    constructor(
        public _http: HttpClient
    ){
        this.url = global.url;
        // this.cargarStorage();
    }
    // test(){
    //     return "Hola mundo desde un servicio";
    // }
    
    // estaLogueado(){
    //     return (this.token.length > 5) ? true : false;
    // }

    // cargarStorage(){
    //     if(localStorage.getItem('token')){
    //       this.token = localStorage.getItem('token');
    //       this.identity = JSON.parse(localStorage.getItem('identity'));
    //     } else{
    //       this.token = '';
    //       this.identity = null;
    //     }
    //   }
    
    register(user): Observable<any>{
        let json = JSON.stringify(user);
        let params = 'json='+json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'register', params, {headers: headers});
    }

    // Metodo para identificar el usuario.
    singup(user, gettoken = null): Observable<any>{
        if(gettoken != null){
            user.gettoken = 'true';
        }

        let json = JSON.stringify(user);
        let params = 'json='+json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this._http.post(this.url+'login', params, {headers: headers});
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));

        if(identity && identity != "undefined"){
            this.identity = identity;
        }else{
            this.identity = null;
        }

        return this.identity;
    }

    getToken(){
        let token = localStorage.getItem('token');

        if(token && token != "undefined"){
            this.token = token;
        }else{
            this.token = null;
        }

        return this.token;
    }
}