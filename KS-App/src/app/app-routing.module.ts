import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BioComponent } from './components/bio/bio.component';
import { LearnComponent } from './components/learn/learn.component';
import { CallComponent } from './components/call/call.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WorkshopComponent } from './components/learn/workshop/workshop.component';
import { HairBookComponent } from './components/learn/hair-book/hair-book.component';
import { VideoTutorialsComponent } from './components/learn/video-tutorials/video-tutorials.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home', data: {animationState: 'main0'}},
  {path: 'home', component: HomeComponent, data: {animationState: 'main1'}},
  {path: 'bio', component: BioComponent, data: {animationState: 'main2'}},
  {path: 'learn', component: LearnComponent, data: {animationState: 'main3'}},
  {path: 'call', component: CallComponent, data: {animationState: 'main4'}},
  {path: 'learn/workshops', component: WorkshopComponent, data: {animationState: 'work'}},
  {path: 'learn/hair-book', component: HairBookComponent, data: {animationState: 'hair'}},
  {path: 'learn/video-tutorials', component: VideoTutorialsComponent, data: {animationState: 'video'}},
  {path: '**', component: NotFoundComponent, data: {animationState: 'main5'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
