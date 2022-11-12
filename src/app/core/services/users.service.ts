import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from 'src/app/shared/interface/data.interface';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private prefix = 'http://localhost:3200';

  constructor(private _http : HttpClient) { }

  getUser(): Observable<any> {
    const url = `${this.prefix}/employee`;
    return this._http.get(url);
  }
  getUserDetail(id:number): Observable<any> {
    const url = `${this.prefix}/employee/${id}`;
    return this._http.get(url);
  }
  deleteUser(id:number): Observable<any> {
    const url = `${this.prefix}/employee/${id}`;
    return this._http.delete(url);
  }
  addUser(data:data): Observable<any> {
    console.log(data, 'data api aid');
    const url = `${this.prefix}/employee`;
    return this._http.post(url, data);
  }
  
}
