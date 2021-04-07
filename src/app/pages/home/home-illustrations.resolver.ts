import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {ITEMS} from 'src/app/DB';

@Injectable()
export class HomeIllustrationsResolver implements Resolve<any[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {
    return of(ITEMS);
  }
}
