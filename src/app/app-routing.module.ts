import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { PostsComponent } from './features/posts/posts.component';


const routerOptions: ExtraOptions = {
  enableTracing: true,
  useHash: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 32],
  relativeLinkResolution: 'legacy',
};

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
