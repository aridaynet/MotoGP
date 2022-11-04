import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class User {
  nombre: string;
  apellido: string;
  categoria: string;
  username: string;
  password: string;

}
@Injectable({
  providedIn: 'root'
})
export class MotogpService {
  endpoint = "http://localhost:8080/api/motogp";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  //AUTH_SERVER_ADDRESS: string = 'http://localhost:4000';


  constructor (private httpClient: HttpClient) { } //private storage: Storage
  
  createUser(user: User): Observable<any> {
    return this.httpClient.post<User>(this.endpoint, JSON.stringify(user), this.httpOptions)
      .pipe(
        catchError(this.handleError<User>('Error occured'))
      );
  }
  getMotogp(){
    return this.httpClient.get(this.endpoint);
  }

  updateUser(id, user: User): Observable<any> {
    return this.httpClient.put(this.endpoint + '/' + id, JSON.stringify(user), this.httpOptions)
      .pipe(
        tap(_ => console.log(`User updated: ${id}`)),
        catchError(this.handleError<User[]>('Update user'))
      );
  }

  createMotogp(motogp, blob){
    let formData = new FormData();
    formData.append("nombre", motogp.nombre);
    formData.append("apellido", motogp.apellido);
    formData.append("categoria", motogp.categoria);
    formData.append("file", blob);

    return this.httpClient.post(this.endpoint, formData);
  }

  deleteUser(id): Observable<User[]> {
    return this.httpClient.delete<User[]>(this.endpoint + '/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log(`User deleted: ${id}`)),
        catchError(this.handleError<User[]>('Delete user'))
      );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
}
getUser(id): Observable<User[]> {
  return this.httpClient.get<User[]>(this.endpoint + '/' + id)
    .pipe(
      tap(_ => console.log(`User fetched: ${id}`)),
      catchError(this.handleError<User[]>(`Get user id=${id}`))
    );
}

getUsers(): Observable<User[]> {
  return this.httpClient.get<User[]>(this.endpoint)
    .pipe(
      tap(users => console.log('Users retrieved!')),
      catchError(this.handleError<User[]>('Get user', []))
    );
}
/*private getOptions(token) {
  let bearerAccess = 'Bearer ' + token;

  let options = {
    headers: {
      'authorization': bearerAccess,
    }
  };
  return options;
}*/
}