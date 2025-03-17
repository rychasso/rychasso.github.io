import { Component } from '@angular/core';
import { environment } from '@env';
import { EProjectTag } from '@models/Project';
import { TIcon } from '@modules/icon';
import { TranslateService } from '@i18n/translate.service';

interface ISocialLink {
  label: string;
  iconName?: TIcon;
  href?: string;
  accountName?: string;
  description?: string;
}

interface ISubmenu {
  label: string;
  href: string;
}

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  standalone: false,
})
export class AppLayoutComponent {
  title = 'rychasso-me';

  public readonly socialLinks: ISocialLink[] = [
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
    {
      label: environment.GENERIC_ACCOUNT_NAME,
      description: TranslateService.localize('menu.footer.in-most-services'),
    },
  ];

  public readonly submenuItems: ISubmenu[] = [
    {
      label: TranslateService.localize('menu.tag.book'),
      href: `/tags/${EProjectTag.books}`,
    },
    {
      label: TranslateService.localize('menu.tag.magazine'),
      href: `/tags/${EProjectTag.magazine}`,
    },
    {
      label: TranslateService.localize('menu.tag.characters'),
      href: `/tags/${EProjectTag.character}`,
    },
    {
      label: TranslateService.localize('menu.tag.postcards'),
      href: `/tags/${EProjectTag.postcards}`,
    },
    {
      label: TranslateService.localize('menu.tag.packing'),
      href: `/tags/${EProjectTag.packing}`,
    },
  ];

  public asSocialLink(v: unknown): ISocialLink {
    return v as ISocialLink;
  }
}
