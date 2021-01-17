import { Component } from '@angular/core';
import { UserService } from './core/services.ts/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'posts';
  /**
   *
   */
  constructor(private user: UserService) {
    this.user.getCurrentUser(1);
  }
}
