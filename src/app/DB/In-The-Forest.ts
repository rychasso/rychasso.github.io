import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'In-The-Forest';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getInTheForestProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.In-The-Forest.title'),
  posterSrc: getSrc('poster.jpg'),
  tags: [EProjectTag.magazine],
  description: `
   <p>Иллюстрация подготовлена к загадкам для детского журнала</p>
  `,
  figures: [
    {
      src: getSrc('1.jpg'),
    },
  ],
});
