import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Mendeleev';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getMendeleevProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Mendeleev.title'),
  posterSrc: getSrc('preview.jpg'),
  tags: [EProjectTag.character],
  figures: [
    {
      src: getSrc(`1.jpg`),
    },
  ],
});
