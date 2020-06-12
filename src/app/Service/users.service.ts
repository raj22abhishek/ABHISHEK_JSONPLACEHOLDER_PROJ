import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { UserModel } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable()
export class UsersService {
  private baseUrl:string = 'https://jsonplaceholder.typicode.com/users?id=';  
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users?name=';
  constructor(
    private http: HttpClient
  ) { }

  getUsers(id:number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.baseUrl}${id}`)
  }

  getUser(name:string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.usersUrl}${name}`)
  }

}