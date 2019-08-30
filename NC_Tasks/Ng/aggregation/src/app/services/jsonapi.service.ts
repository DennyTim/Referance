import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Task } from '../models/Task';
// import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class JsonapiService {
  constructor(private http: HttpClient) {}

  getTodos(value: string): Observable<any> {
    return this.http.get(`${value}`);
  }

  // getTodos(): Observable<Task[]> {
  //   return this.http.get(`${this.urlUsers}`).pipe(
  //     mergeMap((user: any) => {
  //       return this.http.get<Task[]>(`${this.urlTodos}${user.id}`);
  //     })
  //   );
  // }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(`${this.url}/users`);
  // }

  // getTodo(user: User): Observable<Task[]> {
  //   return this.http.get<Task[]>(`${this.url}/todos?userId=${user.id}`);
  // }
}
