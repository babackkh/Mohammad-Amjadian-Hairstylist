import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  activeClass: string;
  @ViewChild('drawer', {static: false}) sidenav: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
          let urlStr = this.router.url.slice(1);
          switch (urlStr) {
            case 'learn/workshops':
              this.activeClass = 'learn'
              break;
            case 'learn/video-tutorials':
              this.activeClass = 'learn'
              break;
            case 'learn/hair-book':
              this.activeClass = 'learn'
              break;
            default:
              this.activeClass = urlStr;
              break;
          }
      });
  }
  onSidenavClick(routeName: string) {
    setTimeout(() => {
      this.router.navigate([`${routeName}`]);
      this.sidenav.close();
    }, 400);
  }

}
