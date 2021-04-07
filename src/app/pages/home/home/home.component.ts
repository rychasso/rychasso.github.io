import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IProject} from '@models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly project$: Observable<IProject[]> = this.route.data.pipe(map(d => d.projects));

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
