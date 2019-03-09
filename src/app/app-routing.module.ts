import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


import { DemoComponent } from './demo/demo.component';
import { RaceHorseListComponent } from './race-horse-list/race-horse-list.component';

const routes: Routes = [
  { path: 'demo', component: DemoComponent },
  { path: 'horse-race/:id', component: RaceHorseListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
