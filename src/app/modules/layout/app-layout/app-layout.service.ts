import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppLayoutService {
  scrollTop(): void {
    document.querySelector('main')?.scrollTo(0, 0);
  }
}
