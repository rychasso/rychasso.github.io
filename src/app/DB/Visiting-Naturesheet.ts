import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import {assetsPathBuilder, getUpsideDownMagazineDescription} from './_helpers';

const id = 'Visiting-Naturesheet';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getVisitingNaturesheetProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Visiting-Naturesheet.title'),
  posterSrc: getSrc('poster.jpg'),
  tags: [EProjectTag.magazine],
  description: getUpsideDownMagazineDescription(),
  figures: [
    {
      src: getSrc('1080.jpg'),
    },
  ],
});
