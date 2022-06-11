import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProject } from '@models/Project';
import { PageMetaService } from '@services/page-meta.service';
import { TranslateService } from '@i18n/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public readonly project$: Observable<IProject[]> = this.route.data.pipe(map((d) => d.projects));

  constructor(private route: ActivatedRoute, private pageMetaService: PageMetaService) {}

  ngOnInit(): void {
    const title = `${TranslateService.localize('menu.portfolio')} | ${TranslateService.localize(
      'menu.first-name',
    )} ${TranslateService.localize('menu.last-name')}`;
    this.pageMetaService.setTitle(title);
    this.pageMetaService.setDescription('Ознакомьтесь со списком моих работ');
  }
}
