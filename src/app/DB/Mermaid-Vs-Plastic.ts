import {EProjectTag, IProject} from '@models/Project';
import {TranslateService} from '@i18n/translate.service';
import {assetsPathBuilder} from './_helpers';

const id = 'Mermaid-Vs-Plastic';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getMermaidVsPlasticProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Mermaid-Vs-Plastic.title'),
  posterSrc: getSrc('512.jpg'),
  tags: [EProjectTag.character],
  description: 'Иллюстрация на тему загрязнения мирового океана',
  figures: [
    {
      src: getSrc('1080.jpg'),
    },
  ],
});
