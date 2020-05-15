import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { VideosModel } from 'src/app/videos-model';
import { DataService } from 'src/app/service/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {
  slides: Array<VideosModel>;
  hideSlide: boolean;
  activeSlide: number;

  constructor(private dataService: DataService) { }

  customOptions: OwlOptions = {
    items: 2,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    navText: ['<i class="material-icons">arrow_back_ios</i>', '<i class="material-icons">arrow_forward_ios</i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      799: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
  
  ngOnInit() {
    this.slides = this.dataService.getSlides();
  }
  ngAfterViewInit() {
    this.slides.forEach((slide) => {
      $( "#video" + slide.id ).click(function() {
        $('#image' + slide.id).zoomify('zoomIn', {duration: 400});
      });
    });
    $('.owl-item:odd img').on('zoom-in.zoomify', function () {
      $('.owl-next, .owl-prev, .owl-item:even, .mat-display-1').addClass('carousel-deactive'); 
    });
    $('.owl-item:odd img').on('zoom-out.zoomify', function () {
      $('.owl-next, .owl-prev, .owl-item:even, .mat-display-1').removeClass('carousel-deactive'); 
    });
    $('.owl-item:even img').on('zoom-in.zoomify', function () {
      $('.owl-next, .owl-prev, .owl-item:odd, .mat-display-1').addClass('carousel-deactive'); 
    });
    $('.owl-item:even img').on('zoom-out.zoomify', function () {
      $('.owl-next, .owl-prev, .owl-item:odd, .mat-display-1').removeClass('carousel-deactive'); 
    });
    $('.owl-item img').on('zoom-in.zoomify', function () {
      $('.close-link').addClass('translate-close'); 
    });
    $('.owl-item img').on('zoom-out.zoomify', function () {
      $('.close-link').removeClass('translate-close'); 
    });
    $('.owl-item:odd img').on('zoom-in.zoomify', function () {
      $('.owl-item:odd .icon').addClass('change-block'); 
    });
    $('.owl-item:odd img').on('zoom-out.zoomify', function () {
      $('.owl-item:odd .icon').removeClass('change-block'); 
    });
    $('.owl-item:even img').on('zoom-in.zoomify', function () {
      $('.owl-item:even .icon').addClass('change-block'); 
    });
    $('.owl-item:even img').on('zoom-out.zoomify', function () {
      $('.owl-item:even .icon').removeClass('change-block'); 
    });
    $('.owl-item:even img').on('zoom-in.zoomify', function () {
      $('.owl-item:even .video-texty').addClass('transform-text-odd'); 
    });
    $('.owl-item:even img').on('zoom-out.zoomify', function () {
      $('.owl-item:even .video-texty').removeClass('transform-text-odd'); 
    });
    $('.owl-item:odd img').on('zoom-in.zoomify', function () {
      $('.owl-item:odd .video-texty').addClass('transform-text-even'); 
    });
    $('.owl-item:odd img').on('zoom-out.zoomify', function () {
      $('.owl-item:odd .video-texty').removeClass('transform-text-even'); 
    });
    $('.owl-item:odd img').on('zoom-in.zoomify', function () {
      $('.owl-item:odd .svg-icon').addClass('transform-icon-even'); 
    });
    $('.owl-item:odd img').on('zoom-out.zoomify', function () {
      $('.owl-item:odd .svg-icon').removeClass('transform-icon-even'); 
    });
    $('.owl-item:even img').on('zoom-in.zoomify', function () {
      $('.owl-item:even .svg-icon').addClass('transform-icon-odd'); 
    });
    $('.owl-item:even img').on('zoom-out.zoomify', function () {
      $('.owl-item:even .svg-icon').removeClass('transform-icon-odd'); 
    });
    
  }
}
