import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'browser-event-experiments',
  templateUrl: './browser-event-experiments.component.html',
  styleUrls: ['./browser-event-experiments.component.css']
})
export class BrowserEventExperimentsComponent implements OnInit {
  hoverSection: HTMLElement;

  constructor() {}

  ngOnInit() {
    this.hoverSection = document.getElementById('hover');
    this.hoverSection.addEventListener('mousemove', onMouseMove);
    this.hoverSection.addEventListener('click', onMouseMove);
  }

  unsubscribe() {
    console.log('Called unsubscribe...');

    this.hoverSection.removeEventListener('mousemove', onMouseMove);
  }
}

function onClick(ev: Event) {
  console.log('click', ev);
}

function onMouseMove(ev: MouseEvent) {
  console.log(ev);
}
