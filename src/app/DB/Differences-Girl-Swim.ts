import {IProject} from '@models/Project';
import {TranslateService} from '@i18n/translate.service';
import {assetsPathBuilder} from './_helpers';

const id = 'Differences-Girl-Swim';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getDifferencesGirlSwimProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Differences-Girl-Swim.title'),
  posterSrc: getSrc('preview.jpg'),
  tags: [],
  figures: [
    {
      src: getSrc(`1.jpg`),
    },
    {
      src: getSrc(`2.jpg`),
    },
  ],
});
