import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProject } from '@models/Project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent implements OnInit {
  public readonly project$: Observable<IProject> = this.route.data.pipe(pluck('project'));

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}
}
