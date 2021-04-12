import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class PageMetaService {
  constructor(private meta: Meta, private title: Title) {}

  setTitle(title: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'og:title', property: 'og:title', content: title });
  }

  setImage(url: string): void {
    const absoluteUrl = this.getImageAbsoluteURL(url);

    this.meta.updateTag({ name: 'og:image', property: 'og:image', content: absoluteUrl });
    this.meta.updateTag({ property: 'twitter:image', content: absoluteUrl });
  }

  setDescription(description: string | null): void {
    this.meta.updateTag({
      name: 'description',
      property: 'description',
      content: description || '',
    });
    this.meta.updateTag({
      name: 'og:description',
      property: 'og:description',
      content: description || '',
    });
  }

  private getImageAbsoluteURL(relativeOrAbsoluteUrl: string): string {
    if (relativeOrAbsoluteUrl.startsWith('http')) {
      return relativeOrAbsoluteUrl;
    }

    /**
     * TODO Need a better way
     */
    return location.origin + relativeOrAbsoluteUrl;
  }
}
