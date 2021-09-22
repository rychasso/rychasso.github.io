import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ELocale, getCurrentLocale } from './locale-getter';
import { loadTranslations } from '@angular/localize';
import localeDataEn from '@angular/common/locales/en';
import localeDataRu from '@angular/common/locales/ru';
import localeValuesRu from './locale/ru';
import localeValuesEn from './locale/en';
import { registerLocaleData } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class LocaleInitializerGuard implements CanActivate {
  canActivate(): Promise<true> {
    this.initLocale();

    return Promise.resolve(true);
  }

  private initLocale(): void {
    const mapForData: Record<ELocale, unknown> = {
      [ELocale.En]: localeDataEn,
      [ELocale.Ru]: localeDataRu,
    };

    const mapForValues: Record<ELocale, Record<string, string>> = {
      [ELocale.En]: localeValuesEn,
      [ELocale.Ru]: localeValuesRu,
    };

    const locale = getCurrentLocale();
    registerLocaleData(mapForData[locale], locale);

    loadTranslations(mapForValues[locale]);
  }
}
