import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'Deep-Dive';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getDeepDiveProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Deep-Dive.title'),
  posterSrc: getSrc('512.jpg'),
  description: `
    <p>Иллюстрация, подготовленная для рубрики &laquo;Перлы из СковоЛодки&raquo; детского журнала &laquo;Вверх тормашками&raquo;</p>
    <br>
    <p>
        Крис, 6 лет <br>
        — Я плакал, потому что много плаваю, и у меня в мозгах много воды накопилось.
    </p>
    `,
  tags: [EProjectTag.magazine],
  figures: [
    {
      src: getSrc('1080.jpg'),
    },
  ],
});
