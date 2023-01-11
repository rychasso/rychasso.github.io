import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Where-Are-Waves-From';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getWhereAreWavesFromProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Where-Are-Waves-From.title'),
  posterSrc: getSrc('poster.jpg'),
  description: `<p>Проект, подготовленный в рамках "Школы детской книги"</p>`,
  tags: [EProjectTag.books],
  figures: [
    {
      src: getSrc('1.jpg'),
    },
    {
      src: getSrc('2.jpg'),
    },
    {
      src: getSrc('3.jpg'),
    },
  ],
});
