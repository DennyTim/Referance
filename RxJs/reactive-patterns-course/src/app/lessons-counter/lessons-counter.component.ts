import { Component } from '@angular/core';
import { store } from '../event-bus-experiments/app-data';
import { Lesson } from '../shared/model/lesson';
import { Observer } from 'rxjs';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer<Lesson[]> {
  lessonsCounter = 0;

  constructor() {
    console.log('lesson list component is registered as observer ...');
    store.lessonsList$.subscribe(this);
  }

  next = (data: Lesson[]) => {
    console.log('counter component received data ..');
    this.lessonsCounter = data.length;
  };

  error(err: any) {
    console.error(err);
  }

  complete() {
    console.log('Completed');
  }
}
