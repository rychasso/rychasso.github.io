import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Elf';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getElfProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Elf.title'),
  posterSrc: getSrc('poster.jpg'),
  tags: [EProjectTag.character],
  figures: [
    {
      src: getSrc('1.jpg'),
    },
  ],
});
