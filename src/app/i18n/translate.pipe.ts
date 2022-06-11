import { Pipe, PipeTransform } from '@angular/core';
import eng from './locale/en';
import { TranslateService } from './translate.service';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(
    value: keyof typeof eng,
    interpolateParams: Record<string, string | number> = {},
  ): string {
    return TranslateService.localize(value, interpolateParams);
  }
}
