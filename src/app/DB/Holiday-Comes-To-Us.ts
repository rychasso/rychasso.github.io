import { IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Holiday-Comes-To-Us';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getHolidayComesToUsProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Holiday-Comes-To-Us.title'),
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
