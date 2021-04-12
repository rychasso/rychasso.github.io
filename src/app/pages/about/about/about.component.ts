import { Component, OnInit } from '@angular/core';
import { PageMetaService } from '@services/page-meta.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(private pageMetaService: PageMetaService) {}

  ngOnInit(): void {
    this.pageMetaService.setTitle('Обо мне | Алёна Рычагова');
    this.pageMetaService.setDescription(
      'Я детский иллюстратор и смогу помочь вам в реализации вашего проект. Ознакосьтесь с видами услуг и процессом моей работы',
    );
  }
}
