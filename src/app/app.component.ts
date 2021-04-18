import { Component } from '@angular/core';
import { environment } from '@env';
import { TIcon } from '@modules/icon';
import { EProjectTag } from '@models/Project';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
      label: 'Иллюстрации',
      href: `/tags/${EProjectTag.illustration}`,
    },
    {
      label: 'Персонажи',
      href: `/tags/${EProjectTag.character}`,
    },
  ];
}
