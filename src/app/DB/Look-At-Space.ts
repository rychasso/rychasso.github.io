import {IProject} from '@models/Project';
import {assetsPathBuilder, getUpsideDownMagazineDescription} from './_helpers';
import {TranslateService} from '@i18n/translate.service';

const id = 'Look-At-Space';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getLookAtSpaceProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.Look-At-Space.title'),
  posterSrc: getSrc('512.jpg'),
  description: `
    ${getUpsideDownMagazineDescription()}
    <br>
    <p>
        <b>Открытие</b> <br>
          Пётр Иваныч Матылько<br>
          в небо прыгает легко.<br>
          Но однажды это небо стало что-то велико.<br>

          Он озяб и сделал: «Пчки!»<br>
          Водрузил на нос очки<br>
          и луну увидел рядом: «Это космос, ма-мо-чки!»<br>
    </p>
  `,
  figures: [
    {
      src: getSrc('1080.jpg'),
    },
  ],
});
