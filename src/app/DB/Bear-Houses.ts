import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Bear-Houses';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getBearHousesProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Bear-Houses.title'),
  posterSrc: getSrc('1_512.jpg'),
  tags: [EProjectTag.postcards],
  figures: [
    {
      src: getSrc('1_1080.jpg'),
    },
    {
      src: getSrc('2_1080.jpg'),
    },
    {
      src: getSrc('3_1080.jpg'),
    },
  ],
});
