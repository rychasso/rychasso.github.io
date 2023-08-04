import { IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Feb-14';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getFeb14Project: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Feb-14.title'),
  posterSrc: getSrc('poster.jpg'),
  tags: [],
  figures: [
    {
      src: getSrc('1.jpg'),
    },
  ],
});
