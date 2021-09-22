import { Component } from '@angular/core';
import { environment } from '@env';
import { EProjectTag } from '@models/Project';
import { TIcon } from '@modules/icon';
import { TranslateService } from '@i18n/translate.service';

interface ISocialLink {
  label: string;
  iconName: TIcon;
  href: string;
}

interface ISubmenu {
  label: string;
  href: string;
}

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {
  title = 'rychasso-me';

  public readonly socialLinks: ISocialLink[] = [
    {
      label: 'instagram',
      iconName: 'instagram',
      href: environment.INSTAGRAM,
    },
    {
      label: 'behance',
      iconName: 'behance',
      href: environment.BEHANCE,
    },
    {
      label: 'telegram',
      iconName: 'telegram',
      href: environment.TELEGRAM,
    },
    {
      label: environment.EMAIL,
      iconName: 'email',
      href: `mailto:${environment.EMAIL}`,
    },
  ];

  public readonly submenuItems: ISubmenu[] = [
    {
      label: TranslateService.localize('menu.tag.illustrations'),
      href: `/tags/${EProjectTag.illustration}`,
    },
    {
      label: TranslateService.localize('menu.tag.characters'),
      href: `/tags/${EProjectTag.character}`,
    },
  ];
}
