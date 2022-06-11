import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'The-Miracle-Beast';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getTheMiracleBeastProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.THE-MIRACLE-BEAST.title'),
  tags: [EProjectTag.books, EProjectTag.character],
  description: `
          <p>${TranslateService.localize('project.THE-MIRACLE-BEAST.description', {
            link: '@burakelena',
          })}</p>
        `,
  posterSrc: getSrc('poster.jpg'),
  figures: [
    {
      src: getSrc('book-poster.jpg'),
    },
    {
      title: TranslateService.localize('project.THE-MIRACLE-BEAST.prepare-description'),
      src: getSrc('work-1.jpg'),
    },
    {
      title: TranslateService.localize('project.THE-MIRACLE-BEAST.steps-description'),
      multipleSrc: [getSrc('work-2.1.jpg'), getSrc('work-2.2.jpg'), getSrc('work-2.3.jpg')],
    },
    {
      title: TranslateService.localize('project.THE-MIRACLE-BEAST.templates-description'),
      multipleSrc: [getSrc('work-3.1.jpg'), getSrc('work-3.2.jpg')],
    },
    {
      title: TranslateService.localize('project.THE-MIRACLE-BEAST.results-description'),
      src: getSrc('book-1.jpg'),
    },
    {
      src: getSrc('book-3.jpg'),
    },
    {
      src: getSrc('book-4.jpg'),
    },
    {
      src: getSrc('book-5.jpg'),
    },
    {
      src: getSrc('book-8.jpg'),
    },
    {
      src: getSrc('book-11.jpg'),
    },
  ],
});
