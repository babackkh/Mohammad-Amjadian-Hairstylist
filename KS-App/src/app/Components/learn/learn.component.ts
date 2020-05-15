import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss'],
})
export class LearnComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  onLearnClick() {
    setTimeout(() => this.dataService.unclipFunc(),100);
  }

}
