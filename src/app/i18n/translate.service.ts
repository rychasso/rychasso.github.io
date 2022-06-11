import { Injectable } from '@angular/core';
import ru from './locale/ru';

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  /**
   * WARNING!!! Translations have to be loaded by using `loadTranslations` method.
   * Examples of usage:
   * Let's imagine we have translation `Hello {$name}! Today is {$dayLabel}!` with id `hello`;
   * We can call it like TranslateService.localize('hello', {name: 'John', dayLabel: 'Friday'});
   * It is the same as we call $localize`:@@hello:${'World'}:name:${'Friday'}:dayLabel`
   * and gives result `Hello World! Today is Friday!`
   *
   * Template:
   * For example we have loaded next source phrase `Lorem {$foo} ipsum {$bar) dolor {$baz}` with id `some.key`;
   * We want to interpolate values {foo: 1, bar 2, baz: 3} to this phrase;
   * To do it we should call $localize in two ways:
   * 1. Calling it like static template $localize`:@@some.key:${1}:foo:${2}:bar:${3}:baz:`
   * 2. Calling it like method
   * $localize([':@@some.key:', ':foo:', ':bar:', ':baz:', raw: [':@@some.key:', ':foo:', ':bar:', ':baz:']], 1, 2, 3)
   */
  public static localize(
    key: keyof typeof ru,
    interpolateParams: Record<string, string | number> = {},
  ): string {
    const id = `:@@${key}:`;
    const raw: string[] = [id];

    Object.keys(interpolateParams).forEach((paramKey) => {
      raw.push(`:${paramKey}:`);
    });

    const templateStringsArray: TemplateStringsArray = Object.assign(raw, { raw });

    return $localize(templateStringsArray, ...Object.values(interpolateParams));
  }
}
