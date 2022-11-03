import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  AUTH_SERVER_ADDRESS: string = 'http://localhost:4000';

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  private getOptions(token) {
    let bearerAccess = 'Bearer ' + token;

    let options = {
      headers: {
        'authorization': bearerAccess,
      }
    };
    return options;
  }
}
