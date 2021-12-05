import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Bedtime-Stories-For-Kids';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getBedtimeStoriesForKidsProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Bedtime-Stories-For-Kids.title'),
  posterSrc: getSrc('poster.jpg'),
  tags: [EProjectTag.books],
  description: `
   <p>Иллюстрация подготовлена для обложки детской книги &laquo;Bedtime stories for kids&raquo;</p>
  `,
  figures: [
    {
      src: getSrc('1.jpg'),
    },
    {
      src: getSrc('mockup.jpg'),
    },
  ],
});
