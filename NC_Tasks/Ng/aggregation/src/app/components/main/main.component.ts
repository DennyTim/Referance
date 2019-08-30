import { Component, OnInit } from '@angular/core';
import { JsonapiService } from '../../services/jsonapi.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[];

  constructor(private jsonapi: JsonapiService) {}

  ngOnInit() {
    this.jsonapi.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
