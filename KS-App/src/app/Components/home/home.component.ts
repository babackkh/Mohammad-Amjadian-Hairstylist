import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit, AfterViewChecked {

  @ViewChild('getHeight', {static: false}) getHeight: ElementRef;
  divRatio: number;
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    setTimeout(() => this.divRatio = (this.getHeight.nativeElement.offsetHeight) / this.getHeight.nativeElement.offsetWidth
    ,180)
  }
  ngAfterViewChecked() {
    this.cdr.detectChanges()
    console.log(this.divRatio)
  }

}
