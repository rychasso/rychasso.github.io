import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder, getUpsideDownMagazineDescription } from './_helpers';

const id = 'Learning';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getLearningProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Learning.title'),
  posterSrc: getSrc('poster.jpg'),
  description: getUpsideDownMagazineDescription(),
  tags: [EProjectTag.magazine],
  figures: [
    {
      src: getSrc('1.jpg'),
    },
    {
      src: getSrc('2.jpg'),
    },
    {
      src: getSrc('3.jpg'),
    },
  ],
});
