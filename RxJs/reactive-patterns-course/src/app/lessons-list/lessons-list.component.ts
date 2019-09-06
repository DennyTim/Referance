import { Component, OnInit } from '@angular/core';
import { store } from '../event-bus-experiments/app-data';
import { Lesson } from '../shared/model/lesson';
import * as _ from 'lodash';
import { Observer } from 'rxjs';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer<Lesson[]>, OnInit {
  lessons: null | Lesson[] = null;

  constructor() {
    console.log('lesson list component is registered as observer');
  }

  ngOnInit(): void {
    store.lessonsList$.subscribe(this);
  }

  next = (data: Lesson[]) => {
    console.log('Lessons list component received data ..');
    this.lessons = data;
  };

  error(err: any) {
    console.error(err);
  }

  complete() {
    console.log('Completed');
  }

  toggleLessonViewed(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson): void {
    store.deleteLesson(deleted);
  }
}
