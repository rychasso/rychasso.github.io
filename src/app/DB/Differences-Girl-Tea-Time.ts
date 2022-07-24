import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Differences-Girl-Tea-Time';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getDifferencesGirlTeaTimeProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Differences-Girl-Tea-Time.title'),
  posterSrc: getSrc('preview.jpg'),
  tags: [EProjectTag.character],
  figures: [
    {
      src: getSrc('1.jpg'),
    },
    {
      src: getSrc('2.jpg'),
    },
  ],
});
