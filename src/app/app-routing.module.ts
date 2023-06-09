import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  {
    path: "contact", component: ContactComponent, children: [
      { path: "add", component: AddcontactComponent },
      { path: "edit/:id", component: AddcontactComponent }
    ]
  },
  { path: "access", loadChildren: () => import('./access/access.module').then(opt => opt.AccessModule) }, // for module and lazy loading.
  {path:"login", loadComponent:()=> import('./login/login.component').then(opt=>opt.LoginComponent)}, // for standalone component and lazy loading.
  {path:"**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
