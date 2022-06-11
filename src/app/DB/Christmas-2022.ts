import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder, getUpsideDownMagazineDescription } from './_helpers';

const id = 'Christmas-2022';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getChristmas2022Project: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Christmas-2022.title'),
  posterSrc: getSrc('512.jpg'),
  description: getUpsideDownMagazineDescription(),
  tags: [EProjectTag.magazine],
  figures: [
    {
      src: getSrc('1080.jpg'),
    },
  ],
});
