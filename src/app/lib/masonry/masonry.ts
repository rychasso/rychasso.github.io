class Masonry {
  /** @type {HTMLDivElement} */
  container: HTMLElement;

  gap: number;
  columns: number;

  columnWidth: number | undefined;

  acc: number[] = [];

  resizeObserver: ResizeObserver | undefined;

  constructor(container: HTMLElement, options: { columns?: number; gap?: number }) {
    this.container = container;
    this.columns = options?.columns ?? 3;
    this.gap = options?.gap ?? 16;
    this.observe();
  }

  init() {
    this.container.style.position = 'relative';

    const width = this.container.clientWidth;
    this.columnWidth = (width - (this.columns - 1) * this.gap) / this.columns;
    this.acc = new Array(this.columns).fill(null).map(() => 0);

    const items = Array.from(this.container.children);

    for (const item of items) {
      this.placeItem(item as HTMLElement);
    }
  }

  placeItem(item: HTMLElement) {
    item.style.width = `${this.columnWidth}px`;
    const height = item.clientHeight;

    const top = Math.min(...this.acc);
    const index = this.acc.indexOf(top);

    item.style.position = 'absolute';

    if (index === 0) {
      item.style.left = `0`;
    } else {
      item.style.left = `${index * (this.columnWidth ?? 0) + this.gap * index}px`;
    }

    item.style.top = `${top}px`;

    this.acc[index] = top + height + this.gap;
  }

  clearItem(item: HTMLElement) {
    item.style.width = '';
    item.style.position = '';
    item.style.top = '';
    item.style.left = '';
  }

  destroy() {
    this.resizeObserver?.disconnect();

    const items = Array.from(this.container.children);

    for (const item of items) {
      this.clearItem(item as HTMLElement);
    }
  }

  observe() {
    this.resizeObserver = new ResizeObserver(() => {
      this.init();
    });

    this.resizeObserver.observe(this.container);
  }
}

export class MasonryController {
  /** @type {HTMLDivElement} */
  private container: HTMLElement;

  private resizeObserver: ResizeObserver | undefined;

  constructor(container: HTMLElement) {
    this.container = container;
    this.observe();
  }

  destroy() {
    this.resizeObserver?.disconnect();
  }

  observe() {
    let columns = 1;
    let masonry: Masonry | undefined = undefined;

    this.resizeObserver = new ResizeObserver(() => {
      const newColumns = this.getCurrentColumns();

      if (newColumns === 1) {
        masonry?.destroy();
        columns = newColumns;
        return;
      }

      if (newColumns != columns || masonry == null) {
        masonry?.destroy();
        masonry = new Masonry(this.container, { columns: newColumns, gap: 24 });
      }

      columns = newColumns;
    });

    this.resizeObserver.observe(this.container);
  }

  getCurrentColumns() {
    const min = 350;

    const width = this.container.clientWidth;

    return Math.max(1, Math.min(Math.floor(width / min), 5));
  }
}
