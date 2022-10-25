interface IProjectFigureBase {
  description?: string;
  title?: string;
}

export interface IProjectFigure extends IProjectFigureBase {
  src: string | null;
}

export interface IProjectFigureSet extends IProjectFigureBase {
  multipleSrc?: string[];
}

export enum EProjectTag {
  character = 'character',
  books = 'books',
  magazine = 'magazine',
  postcards = 'postcards',
  packing = 'packing',
}

export interface IProject {
  id: string;
  title: string;
  figures: (IProjectFigure | IProjectFigureSet)[];
  description?: string;
  tags?: EProjectTag[];
  posterSrc?: string;
}

export function getProjectFirstImage(project: IProject): string | null {
  return project.figures
    .map((figure) => {
      if (isFigure(figure)) {
        return figure.src;
      }
      return null;
    })
    .filter((srcItem) => Boolean(srcItem))[0];
}

export function isFigure(
  figureOrSet: IProjectFigure | IProjectFigureSet,
): figureOrSet is IProjectFigure {
  return 'src' in figureOrSet;
}

export function isFigureSet(
  figureOrSet: IProjectFigure | IProjectFigureSet,
): figureOrSet is IProjectFigureSet {
  return 'multipleSrc' in figureOrSet;
}
