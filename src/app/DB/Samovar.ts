import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder, getUpsideDownMagazineDescription } from './_helpers';

const id = 'Samovar';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getSamovarProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Samovar.title'),
  tags: [EProjectTag.magazine],
  description: getUpsideDownMagazineDescription(),
  posterSrc: getSrc('poster.jpg'),
  figures: [
    {
      src: getSrc('2.jpg'),
    },
    {
      src: getSrc('1.jpg'),
    },
  ],
});
