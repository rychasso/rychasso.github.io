import { IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Christmas-2021';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getChristmas2021Project: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Christmas-2021.title'),
  figures: [
    {
      src: getSrc('1.jpg'),
    },
  ],
});
