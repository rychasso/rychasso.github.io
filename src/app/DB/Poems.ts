import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder, getUpsideDownMagazineDescription } from './_helpers';

const id = 'Poems';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getPoemsProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Poems.title'),
  posterSrc: getSrc('512.jpg'),
  description: getUpsideDownMagazineDescription(),
  tags: [EProjectTag.magazine],
  figures: [
    {
      src: getSrc('1080_1.jpg'),
    },
    {
      src: getSrc('1080_2.jpg'),
    },
    {
      src: getSrc('1080_3.jpg'),
    },
  ],
});
