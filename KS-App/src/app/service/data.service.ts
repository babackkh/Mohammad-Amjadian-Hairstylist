import { Injectable } from '@angular/core';
import { VideosModel } from '../videos-model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  unclipVar = false;
  videoOpenToggleClass = false;
  slidesStore = [];
  constructor() { }

  unclipFunc() {
    this.unclipVar = true;
  }
  getSlides() {
    return Videos.slice(0);
  }
}

export const Videos: VideosModel[] = [
  {id: 1, caption: 'Daei is record holder for the world’s all-time', url: 'assets/video-bg.png'},
  {id: 2, caption: 'Daei is record holder for the world’s all-time', url: 'assets/video-bg.png'},
  {id: 3, caption: 'Daei is record holder for the world’s all-time', url: 'assets/video-bg.png'},
  {id: 4, caption: 'Daei is record holder for the world’s all-time', url: 'assets/video-bg.png'},
  {id: 5, caption: 'Daei is record holder for the world’s all-time', url: 'assets/video-bg.png'},
];
