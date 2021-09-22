import { Component, OnInit } from '@angular/core';
import { PageMetaService } from '@services/page-meta.service';
import { TranslateService } from '@i18n/translate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private pageMetaService: PageMetaService) {}

  ngOnInit(): void {
    const title = `${TranslateService.localize('menu.about')} | ${TranslateService.localize('menu.first-name')} ${TranslateService.localize('menu.last-name')}`;

    this.pageMetaService.setTitle(title);
    this.pageMetaService.setDescription(
      'Я детский иллюстратор и смогу помочь вам в реализации вашего проект. Ознакосьтесь с видами услуг и процессом моей работы',
    );
  }
}
