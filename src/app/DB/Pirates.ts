import {EProjectTag, IProject} from '@models/Project';
import {TranslateService} from '@i18n/translate.service';
import {assetsPathBuilder} from './_helpers';

const id = 'Pirates';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getPiratesProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Pirates.title'),
  posterSrc: getSrc('512.jpg'),
  tags: [EProjectTag.character],
  figures: [
    {
      src: getSrc('1080.jpg'),
    },
  ],
});
