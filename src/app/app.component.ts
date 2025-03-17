import { Component, OnInit } from '@angular/core';
import { AppLayoutService } from '@modules/layout';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private route: Router, private appLayoutService: AppLayoutService) {}
  ngOnInit(): void {
    /**
     * ScrollToTop on every navigation change
     */
    this.route.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      setTimeout(() => this.appLayoutService.scrollTop());
    });
  }
}
