import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'risks', component: AppComponent },
  { path: '**', redirectTo: 'risks' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
