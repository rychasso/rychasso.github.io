import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { getProjects } from 'src/app/DB';
import { IProject } from '@models/Project';

@Injectable()
export class HomeProjectsResolver implements Resolve<IProject[]> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProject[]> {
    return of(getProjects());
  }
}
