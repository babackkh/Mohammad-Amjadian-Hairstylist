import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-video-tutorials',
  templateUrl: './video-tutorials.component.html',
  styleUrls: ['./video-tutorials.component.scss']
})
export class VideoTutorialsComponent implements OnDestroy, AfterViewChecked {
  @ViewChild('closeLink', {static: false}) closeLinkRef:ElementRef;
  hasTransformClass: boolean;

  
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
  closeVideo() {
    $('img').zoomify('zoomOut', {duration: 400});
  }
  ngAfterViewChecked() {
    this.hasTransformClass = this.closeLinkRef.nativeElement.classList.contains('translate-close');
  }

  ngOnDestroy() {
    this.dataService.unclipVar = false;
  }

}
