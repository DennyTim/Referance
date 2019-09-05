import { Component, OnInit } from '@angular/core';
import { Observer, store } from '../event-bus-experiments/app-data';
import { Lesson } from '../shared/model/lesson';
import * as _ from 'lodash';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer, OnInit {
  lessons: null | Lesson[] = null;

  constructor() {
    console.log('lesson list component is registered as observer');
  }

  ngOnInit(): void {
    store.lessonsList$.subscribe(this);
  }

  next(data: any) {
    console.log('Lessons list component received data');
    this.lessons = data;
  }

  toggleLessonViewed(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }

  delete(deleted: Lesson): void {
    store.deleteLesson(deleted);
  }
}
