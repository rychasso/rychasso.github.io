import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Happy-Birthday-28';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getHappyBirthday28Project: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Happy-Birthday-28.title'),
  posterSrc: getSrc('poster.jpg'),
  tags: [EProjectTag.character],
  figures: [
    {
      src: getSrc('1.jpg'),
    },
  ],
});
