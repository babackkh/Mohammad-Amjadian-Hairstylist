import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hair-book',
  templateUrl: './hair-book.component.html',
  styleUrls: ['./hair-book.component.scss']
})
export class HairBookComponent implements OnInit, OnDestroy {

  constructor(private dataService: DataService, private router: Router) { }

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
  ngOnInit(): void {
  }

}
