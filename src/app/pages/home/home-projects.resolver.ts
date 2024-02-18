import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { getProjects } from 'src/app/DB';
import { IProject } from '@models/Project';

@Injectable()
export class HomeProjectsResolver {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProject[]> {
    return of(getProjects());
  }
}
