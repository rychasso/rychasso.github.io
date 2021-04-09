import { Component } from '@angular/core';
import { environment } from '@env';
import { TIcon } from './modules/icon';

interface ISocialLink {
  label: string;
  iconName: TIcon;
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
      label: 'rychasso',
      iconName: 'instagram',
      href: environment.INSTAGRAM,
    },
    {
      label: 'rychasso',
      iconName: 'telegram',
      href: environment.TELEGRAM,
    },
    {
      label: environment.EMAIL,
      iconName: 'email',
      href: `mailto:${environment.EMAIL}`,
    },
  ];
}
