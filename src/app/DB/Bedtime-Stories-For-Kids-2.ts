import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Bedtime-Stories-For-Kids-2';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getBedtimeStoriesForKids2Project: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Bedtime-Stories-For-Kids-2.title'),
  posterSrc: getSrc('poster.jpg'),
  tags: [EProjectTag.books],
  description: `
   <p>Иллюстрация подготовлена для обложки детской книги &laquo;Bedtime stories for kids 2&raquo;</p>
  `,
  figures: [
    {
      src: getSrc('1080.jpg'),
    },
  ],
});
