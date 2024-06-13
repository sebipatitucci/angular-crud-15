import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = "http://localhost:3000/enquiry"

constructor(private _http: HttpClient) { }

postRegistration(registerObj: User){
  return this._http.post<User>(`${this.baseUrl}`, registerObj);
}

getRegisteredUser(){
  return this._http.get<User[]>(`${this.baseUrl}`);
}

updateRegisterUser(registerObj: User, id:number){
  return this._http.put<User>(`${this.baseUrl}/${id}`, registerObj);
}

deleteRegistered(id:number){
  return this._http.delete<User>(`${this.baseUrl}/${id}`);
}

getRegisteredUserById(id: number){
  return this._http.get<User>(`${this.baseUrl}/${id}`)
}

}
