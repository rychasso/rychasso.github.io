import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {IIllustration} from '@models/Illustration';

@Component({
  selector: 'app-illustration-list-item',
  templateUrl: './illustration-list-item.component.html',
  styleUrls: ['./illustration-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IllustrationListItemComponent implements OnInit {

  @Input() illustration!: IIllustration;

  constructor() { }

  ngOnInit(): void {
  }

}
