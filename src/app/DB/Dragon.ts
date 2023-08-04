import { IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Dragon';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getDragonProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Dragon.title'),
  posterSrc: getSrc('poster.jpg'),
  tags: [],
  figures: [
    {
      src: getSrc('1.jpg'),
    },
  ],
});
