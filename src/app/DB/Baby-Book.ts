import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Baby-Book';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getBabyBookProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Baby-Book.title'),
  description: TranslateService.localize('project.Baby-Book.description'),
  posterSrc: getSrc('poster.jpg'),
  tags: [EProjectTag.books, EProjectTag.magazine],
  figures: [
    {
      src: getSrc('live_1.jpeg'),
    },
    {
      src: getSrc('live_2.jpeg'),
    },
    {
      src: getSrc('live_3.jpeg'),
    },
    {
      src: getSrc('1_1080.jpg'),
    },
    {
      src: getSrc('2_1080.jpg'),
    },
    {
      src: getSrc('3_1080.jpg'),
    },
    {
      src: getSrc('4_1080.jpg'),
    },
  ],
});
