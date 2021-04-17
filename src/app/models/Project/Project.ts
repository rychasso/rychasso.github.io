interface IProjectFigure {
  src: string;
  description?: string;
}

export enum EProjectTag {
  character = 'character',
  illustration = 'illustration',
}

export interface IProject {
  id: string;
  title: string;
  figures: IProjectFigure[];
  description?: string;
  tags?: EProjectTag[];
  posterSrc?: string;
}
