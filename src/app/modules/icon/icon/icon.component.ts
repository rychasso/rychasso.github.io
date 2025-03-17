import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

export type TIcon = 'behance' | 'images' | 'telegram' | 'email';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class IconComponent implements OnChanges {
  @Input() name: TIcon = 'email';

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
    return fetch(`/assets/icons/${iconName}.svg`)
      .then((res) => res.text())
      .then((text) => ({
        default: text,
      }))
      .catch((err) => {
        console.error(err);
        return null;
      });
  }
}
