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
    ...[4, 5, 6, 13, 17, 18].map((imageNumber) => ({
      src: getSrc(`${imageNumber}.jpg`),
    })),
  ],
});
