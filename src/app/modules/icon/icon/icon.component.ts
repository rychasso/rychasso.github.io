import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

export type TIcon = 'instagram' | 'telegram' | 'email';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent implements OnChanges {
  @Input() name: TIcon = 'instagram';

  private iconName$ = new BehaviorSubject<TIcon>(this.name);

  public icon$ = this.iconName$.pipe(
    switchMap((name) => this.loadIcon(name)),
    map((module) => module?.default),
    map((svg) => (svg ? this.sanitizer.bypassSecurityTrustHtml(svg) : null)),
  );

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    this.iconName$.next(this.name);
  }

  private loadIcon(iconName: TIcon): Promise<{ default: string } | null> {
    return import(
      /* webpackChunkName: "icon-[request]" */ `!!raw-loader!./icons/${iconName}.svg`
    ).catch((err) => {
      console.error(err);
      return null;
    });
  }
}
