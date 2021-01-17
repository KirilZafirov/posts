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
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'comments',
    loadChildren: () =>
      import('./features/comments/comments.module').then(
        (m) => m.CommentsModule
      ),
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
