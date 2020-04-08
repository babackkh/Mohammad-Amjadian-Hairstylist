import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HomeComponent } from '../../components/home/home.component';


const componentsList = [
  NavbarComponent,
  HomeComponent
];

@NgModule({
  declarations: [componentsList],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [componentsList]
})
export class ComponentsModule { }
