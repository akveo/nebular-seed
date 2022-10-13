import { Component } from '@angular/core';
import { NbPosition } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items = [
    {
      title: 'Logout',
    },
  ];
  contextMenuPlacement = NbPosition.BOTTOM;
}
