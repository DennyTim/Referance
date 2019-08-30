import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class JsonapiService {
  private url: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.url}/users`);
  }

  getTodo(user: User): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.url}/todos?userId=${user.id}`);
  }
}
