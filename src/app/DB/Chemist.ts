import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import {assetsPathBuilder, getGenericMagazineDescription} from './_helpers';

const id = 'Chemist';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getChemistProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Chemist.title'),
  posterSrc: getSrc('poster.jpg'),
  tags: [EProjectTag.magazine],
  description: getGenericMagazineDescription(),
  figures: [
    {
      src: getSrc('1.jpg'),
    },
  ],
});
