import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkHistoryComponent } from './work-history/work-history.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { MainPageComponent } from './main-page/main-page.component';


const routes: Routes = [
  {
    path: 'blog',
    component: BlogPageComponent,
    data: { title: 'Blog' }
  },
  {
    path: 'contact-information',
    component: ContactPageComponent,
    data: { title: 'Contact Information' }
  },
  {
    path: 'history',
    component: WorkHistoryComponent,
    data: { title: 'Work History' }
  },
  {
    path: 'home',
    component: MainPageComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
