import { ApiService } from 'src/app/core/services.ts/api.service';
import { User } from './../../shared/models/user.model';

import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {

  constructor(private api: ApiService) {
  }
  public currentUser: User;
  subscription: Subscription;

  getCurrentUser(userId: number) {
   this.subscription = this.api.getUser(userId).subscribe(user =>
          this.currentUser = user
      );
  }

  ngOnDestroy(): void {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
