import { Component } from '@angular/core';
import { Session } from './session';

@Component({
  selector: 'session-detail',
  inputs: ['session'],
  template: `
      <div> {{ session.start | time }}-{{session.end | time }}</div>
      <div><label>Name: </label>
           <input type=text [(ngModel)]="session.name" />
      </div>
      <div><label>Room: </label>
           <input type=text [(ngModel)]="session.room" />
      </div>
      <div><label>Speaker: </label>
           <input type=text [(ngModel)]="session.speaker" />
      </div>
      <div><label>Info: </label>
           <textarea [(ngModel)]="session.info"></textarea>
      </div>
  `
})
export class SessionComponent {
  session: Session;
}