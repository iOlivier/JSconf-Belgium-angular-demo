import { Component } from '@angular/core';
import { Session } from './session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 2017;
  selectedSession = null;
  sessions = [
    new Session("Build a mobile app", "Johan Coppieters", "D101", "bla bla", 800, 1000),
    new Session("Ionic 3", "Olivier Overstraete", "D102", "blo blo", 900, 1030),
    new Session("nodejs services", "Ruben Callewaert", "D103", "bli bli", 1000, 1315)
  ];

  select(session) {
    if (this.selectedSession == session)
      this.selectedSession = null;
    else
      this.selectedSession = session;
  }

  isSelected(session) {
    return (this.selectedSession == session);
  }
}
