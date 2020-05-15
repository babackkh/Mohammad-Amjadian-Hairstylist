import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit, OnDestroy{
  
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  onUnclip() {
    return this.dataService.unclipVar;
  }

  onClip() {
    this.dataService.unclipVar = false;
    setTimeout(() => {
      this.router.navigate(['learn']);
    }, 300);
  }

  ngOnDestroy() {
    this.dataService.unclipVar = false;
  }



}
