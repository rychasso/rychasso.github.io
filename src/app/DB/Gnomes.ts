import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Gnomes';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getGnomesProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Gnomes.title'),
  posterSrc: getSrc('poster.jpg'),
  tags: [EProjectTag.packing],
  description: `<p>Иллюстрации подготовлены для новогодних упаковок для «Столица упаковки»</p>`,
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
    {
      src: getSrc('4.jpg'),
    },
    {
      src: getSrc('5.png'),
    },
    {
      src: getSrc('6.png'),
    },
    {
      src: getSrc('7.png'),
    },
  ],
});
