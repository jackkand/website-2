import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {PhotoComponent} from './photo.component';
import {DetailsComponent} from './details.component';
import {FamilyComponent} from './family.component';
import {AboutComponent} from './about.component';
import {LoginComponent} from './login.component';
import {PotographComponent} from './potograph.component';
import {SigninComponent} from './signin.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'photos', component: PhotoComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'family', component: FamilyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'clicks', component: PotographComponent},
  {path: 'signup', component: SigninComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{}
export const routingComponents = [HomeComponent, PhotoComponent, DetailsComponent, FamilyComponent, AboutComponent, LoginComponent, PotographComponent, SigninComponent]
