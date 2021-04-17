interface IProjectFigure {
  src: string;
  description?: string;
}

export interface IProject {
  id: string;
  title: string;
  figures: IProjectFigure[];
  description?: string;
}
