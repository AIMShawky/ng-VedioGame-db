import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { GameDetailsComponent } from './Components/game-details/game-details.component';


const routes: Routes = [

  {
    path:'',
    component: HomeComponent
  },

  {
    path:'search/:game-search',
    component: HomeComponent
  },
  {
    path:'game-details/:id',
    component: GameDetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }