import { EProjectTag, IProject } from '@models/Project';
import { assetsPathBuilder, renderLink } from './_helpers';

const id = 'The-Beatles';

const getSrc = assetsPathBuilder(`assets/projects/${id}`);

export const getTheBeatlesProject: () => IProject = () => ({
  id,
  title: 'The Beatles',
  posterSrc: getSrc('poster.jpg'),
  tags: [EProjectTag.postcards],
  description: `
   <p>Иллюстрация подготовлена для обложки детской книги &laquo;Bedtime stories for kids 3&raquo;</p>
  `,
  figures: [
    {
      src: getSrc('1.jpg'),
      description: `<p>${renderLink(
        'https://www.pinterest.ru/pin/692147036484874459',
        'Оригинал фотографии',
      )} группы The Beatles</p>`,
    },
  ],
});
