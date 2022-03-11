import { Component, OnInit, LOCALE_ID } from '@angular/core';
import {mergeMap, map, filter} from 'rxjs/operators';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ){}
  
  ngOnInit() {
    this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    map(() => this.activatedRoute),
    map((route) => {
      while (route.firstChild) route = route.firstChild;
      return route;
    }),
    filter((route) => route.outlet === 'primary'),
    mergeMap((route) => route.data),)
    .subscribe((event) => {
        this.titleService.setTitle(event['title']);
        window.scrollTo(0, 0);
    });
}

}
