import { Injectable } from '@angular/core';
import { RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { getProjects } from 'src/app/DB';
import { IProject } from '@models/Project';

@Injectable()
export class HomeProjectsByTagResolver {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProject[]> {
    const { tag } = route.params;

    /**
     * Move projects with tags above the rest
     */
    return of(
      getProjects().sort((a, b) => {
        if (a.tags?.includes(tag) && b.tags?.includes(tag)) {
          return 0;
        }

        return a.tags?.includes(tag) ? -1 : 1;
      }),
    );
  }
}
