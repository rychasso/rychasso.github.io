import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IProject} from '@models/Project';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectListItemComponent implements OnInit {

  @Input() project!: IProject;

  constructor() { }

  ngOnInit(): void {
  }

}
