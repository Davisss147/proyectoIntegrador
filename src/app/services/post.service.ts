import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { global } from './global.service';
import { Params } from '@angular/router';

@Injectable()
export class PostService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
    }

    pruebas() {
        return "Hola POST";
    }

    create(token, post): Observable<any> {
        // Limpia el campo content
        post.content = global.htmlEntities(post.content);

        let json = JSON.stringify(post);
        let params = "json=" + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);

        return this._http.post(this.url + 'post', params, { headers: headers });
    }

    getPosts(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url + 'post', { headers: headers });
    }

    getPost(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url + 'post/' + id, { headers: headers });
    }

    update(token, post, id): Observable<any> {
        // Limpia el campo content
        post.content = global.htmlEntities(post.content);
        
        let json = JSON.stringify(post);
        let params = "json=" + json;

        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);

        return this._http.put(this.url + 'post/' + id, params, { headers: headers });
    }

    delete(token, id) {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
            .set('Authorization', token);

        return this._http.delete(this.url + 'post/' + id, { headers: headers });

    }
}