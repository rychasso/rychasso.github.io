import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IIllustration} from '@models/Illustration';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly illustrations$: Observable<IIllustration[]> = this.route.data.pipe(map(d => d.illustrations));

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
