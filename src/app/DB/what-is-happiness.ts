import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';
import { assetsPathBuilder } from './_helpers';

const id = 'What-Is-Happiness';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getWhatIsHappinessProject: () => IProject = () => ({
  id,
  title: TranslateService.localize('project.What-Is-Happiness.title'),
  tags: [EProjectTag.books, EProjectTag.character],
  posterSrc: getSrc('poster.jpg'),
  figures: [
    {
      src: getSrc('poster.jpg'),
    },
    // {
    //   title: TranslateService.localize('project.What-Is-Happiness.prepare-description'),
    //   src: getSrc('characters/1.jpg'),
    // },
    // {
    //   src: getSrc('characters/2.jpg'),
    // },
    // {
    //   src: getSrc('characters/3.jpg'),
    // },
    // {
    //   title: TranslateService.localize('project.What-Is-Happiness.storyboard'),
    //   src: getSrc('storyboard.jpg'),
    // },
    // {
    //   title: TranslateService.localize('project.What-Is-Happiness.templates'),
    //   src: getSrc('templates/1,2.jpg'),
    // },
    // {
    //   src: getSrc('templates/3.jpg'),
    // },
    // {
    //   src: getSrc('templates/4,5.jpg'),
    // },
    // {
    //   src: getSrc('templates/5,6.jpg'),
    // },
    // {
    //   src: getSrc('templates/7,8.jpg'),
    // },
    // {
    //   src: getSrc('templates/9,10.jpg'),
    // },
    // {
    //   src: getSrc('templates/11,12.jpg'),
    // },
    // {
    //   title: TranslateService.localize('project.What-Is-Happiness.results-description'),
    //   src: getSrc('pages/1.jpg'),
    // },
    ...[5, 6, 9, 11].map((index) => ({
      src: getSrc(`pages/${index}.jpg`),
    })),
    // {
    //   title: TranslateService.localize('project.What-Is-Happiness.book-cover'),
    //   src: getSrc('book-cover/1.jpg'),
    // },
    // {
    //   src: getSrc('book-cover/2.jpg'),
    // },
    // {
    //   src: getSrc('book-cover/3.jpg'),
    // },
    // {
    //   src: getSrc('book-cover/4.jpg'),
    // },
    // {
    //   src: getSrc('book-cover/final.jpg'),
    // },
  ],
});
