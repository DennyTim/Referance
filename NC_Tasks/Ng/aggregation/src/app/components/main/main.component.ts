import { Component, OnInit } from '@angular/core';
import { JsonapiService } from '../../services/jsonapi.service';
import { forkJoin } from 'rxjs';
import { switchMap, map, filter } from 'rxjs/operators';
import { User } from 'src/app/models/User';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  _users: User[];
  private urlUsers: string = 'https://jsonplaceholder.typicode.com/users';
  private urlTodos: string =
    'https://jsonplaceholder.typicode.com/todos?userId=';
  tasks: Task[];

  constructor(private jsonapi: JsonapiService) {}

  ngOnInit() {
    const userId = 1;
    this.jsonapi
      .getTodos(this.urlUsers)
      .pipe(
        switchMap(([users]) => users),
        filter((user: User) => user.id === userId),
        switchMap((user: User) =>
          this.jsonapi.getTodos(`${this.urlTodos}${user.id}`)
        ),
        map((tasks: Task[]) => {
          return tasks.filter((task: Task) => task.completed === true);
        })
      )
      .subscribe((data: any): void => {
        this.tasks = data;
        console.log(this.tasks);
      });
  }
}
