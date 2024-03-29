import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Good-Night-Sleepy-Planets';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getGoodNightSleepyPlanetsProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Good-Night-Sleepy-Planets.title'),
  posterSrc: getSrc('preview.jpg'),
  tags: [EProjectTag.books],
  figures: [
    {
      src: getSrc('cover.jpg'),
    },
    ...[1, 2, 3, 4, 5, 9, 10, 12, 13].map((id) => ({
      src: getSrc(`${id}.jpg`),
    })),
  ],
});
