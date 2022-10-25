import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Good-Night-Earth';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getGoodNightEarthProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Good-Night-Earth.title'),
  posterSrc: getSrc('poster.jpg'),
  tags: [EProjectTag.books],
  description: `<p>Вторая книга про Лизу, которая путешествует</p>`,
  figures: [
    ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20].map((imageNumber) => ({
      src: getSrc(`${imageNumber}.jpg`),
    })),
  ],
});
