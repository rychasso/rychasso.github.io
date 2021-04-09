import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PROJECTS } from 'src/app/DB';
import { IProject } from '@models/Project';

@Injectable()
export class ProjectResolver implements Resolve<IProject | null> {
  constructor(private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProject | null> {
    const { id } = route.params;
    const targetProject = PROJECTS.find((project) => project.id === id);

    console.log({
      id,
      PROJECTS,
      targetProject,
    });

    if (!targetProject) {
      this.router.navigateByUrl('/');
      return of(null);
    }

    return of(targetProject);
  }
}
