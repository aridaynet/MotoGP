import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../services/motogp.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  AUTH_sERVER_ADDRESS: string = 'http://localhost:4000';

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  private getOptions(user: User) {
    let base64UserAndPassword = window.btoa(user.username + ":" + user.password);

    let basicAccess = 'Basic ' + base64UserAndPassword;

    let options = {
      headers: {
        'authorization': basicAccess,
        'Content-Type': 'aplication/x-www-form-urlencoded',
      }
    };
    return options;
  }
}
/*
  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(
      '${this.AUTH_SERVER_ADDRESS}/api/users/', user, this.getOptions(user)
    ).pipe(tap(async (res: AuthResponse) => {
      if (res.user) {
        await this.storage.set("token", res.access_token);
      }
    })
    );
  }

  login (user: User): Observable<AuthResponse>{
    return this.httpClient.post(
      '${this.AUTH_SERVER_ADDRESS}/api/users/signin', null, this.getOptions(user)
    ).pipe(tap(async (res: AuthResponse) => {
      if (res.user){
        await this.storage.set("token", res.access_token);
      }
    })
  );
}

async logout()´
  await this.storage.remove("token");
}
async isLoggedIn(){
  let token = await this.storage.get("token");
  if (token){
    return true;
  }
  return false;
}*/
