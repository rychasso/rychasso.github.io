import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { getProjects } from 'src/app/DB';
import { IProject } from '@models/Project';

@Injectable()
export class ProjectResolver {
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IProject | null> {
    const { id } = route.params;
    const targetProject = getProjects().find((project) => project.id === id);

    if (!targetProject) {
      this.router.navigateByUrl('/');
      return of(null);
    }

    return of(targetProject);
  }
}
