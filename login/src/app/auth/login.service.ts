import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class loginService {

  private URL: string = 'http://localhost:8000';
  constructor(private serHTTP: HttpClient) {
  }

  public login(user:any){
  return "YA ESTAMOS AQUI";
  }
}
