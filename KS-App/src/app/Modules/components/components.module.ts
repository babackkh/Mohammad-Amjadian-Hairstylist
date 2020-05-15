import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeComponent } from '../../components/home/home.component';
import { BioComponent } from '../../components/bio/bio.component';
import { LearnComponent } from '../../components/learn/learn.component';
import { CallComponent } from '../../components/call/call.component';
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { SnackbarComponent } from '../../components/call/snackbar/snackbar.component';
import { WorkshopComponent } from '../../components/learn/workshop/workshop.component';
import { VideoTutorialsComponent } from '../../components/learn/video-tutorials/video-tutorials.component';
import { HairBookComponent } from '../../components/learn/hair-book/hair-book.component';
import { CarouselComponent } from '../../components/learn/carousel/carousel.component';


const componentsList = [
  NavbarComponent,
  HomeComponent,
  BioComponent,
  LearnComponent,
  CallComponent,
  NotFoundComponent,
  SnackbarComponent,
  WorkshopComponent,
  VideoTutorialsComponent,
  HairBookComponent,
  CarouselComponent
];

@NgModule({
  declarations: [componentsList],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    CarouselModule
  ],
  exports: [componentsList]
})
export class ComponentsModule { }
