import { EProjectTag, IProject } from '@models/Project';

function getPath(relativePath: string): string {
  return `/assets/projects/${relativePath}`;
}

export const PROJECTS: IProject[] = [
  {
    id: 'Family-Christmas',
    title: 'Новый год',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Family-Christmas/1.jpg'),
      },
      {
        src: getPath('Family-Christmas/2.jpg'),
      },
      {
        src: getPath('Family-Christmas/3.jpg'),
      },
    ],
  },
  {
    id: 'Misha-The-President',
    title: 'Президент Миша',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Misha-The-President/1.jpg'),
      },
    ],
  },
  {
    id: 'Girl-With-Peaches',
    title: 'Девочка с персиками',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Girl-With-Peaches/1.jpg'),
      },
    ],
  },
  {
    id: 'Mona-Lisa',
    title: 'Мона Лиза',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Mona-Lisa/1.jpg'),
      },
    ],
  },
  {
    id: 'Frida-Kahlo',
    title: 'Голубка Фрида',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Frida-Kahlo/1.jpg'),
      },
    ],
  },
  {
    id: 'Upside-Down-Magazine',
    title: 'Весенний номер',
    tags: [EProjectTag.illustration],
    description: 'Обложка для второго номера журнала «Вверх тормашками»',
    figures: [
      {
        src: getPath('Upside-Down-Magazine/1.jpg'),
      },
      {
        src: getPath('Upside-Down-Magazine/2.jpg'),
      },
    ],
  },
  {
    id: 'Spring-Animals',
    title: 'Рассвет весны',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Spring-Animals/1.jpg'),
      },
      {
        src: getPath('Spring-Animals/2.jpg'),
      },
      {
        src: getPath('Spring-Animals/3.jpg'),
      },
      {
        src: getPath('Spring-Animals/4.jpg'),
      },
    ],
  },
  {
    id: 'Vasily-The-Cat',
    title: 'Один день из жизни Василия',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Vasily-The-Cat/6.jpg'),
      },
      {
        src: getPath('Vasily-The-Cat/1.jpg'),
      },
      {
        src: getPath('Vasily-The-Cat/2.jpg'),
      },
      {
        src: getPath('Vasily-The-Cat/3.jpg'),
      },
      {
        src: getPath('Vasily-The-Cat/4.jpg'),
      },
      {
        src: getPath('Vasily-The-Cat/5.jpg'),
      },
    ],
  },
  {
    id: 'Winter-Street',
    title: 'Новогодняя улица',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Winter-Street/1.jpg'),
      },
    ],
  },
  {
    id: 'Ice-Cream-Village',
    title: 'В деревне Мороженово',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Ice-Cream-Village/1.jpg'),
      },
    ],
  },
  {
    id: 'Arctic-Nature',
    title: 'Об охране природы Арктики',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Arctic-Nature/1.jpg'),
      },
    ],
  },
  {
    id: 'Lolita-Grandma',
    title: 'Бабушка Лолита',
    tags: [EProjectTag.character],
    figures: [
      {
        src: getPath('Lolita-Grandma/1.jpg'),
      },
      {
        src: getPath('Lolita-Grandma/2.jpg'),
      },
      {
        src: getPath('Lolita-Grandma/3.jpg'),
      },
    ],
  },
  {
    id: 'Pizzeria-The-Bo',
    title: 'Мистер Бо',
    tags: [EProjectTag.character],
    figures: [
      {
        src: getPath('Pizzeria-The-Bo/1.jpg'),
      },
      {
        src: getPath('Pizzeria-The-Bo/2.jpg'),
      },
      {
        src: getPath('Pizzeria-The-Bo/3.jpg'),
      },
      {
        src: getPath('Pizzeria-The-Bo/4.jpg'),
      },
      {
        src: getPath('Pizzeria-The-Bo/5.jpg'),
      },
    ],
  },
  {
    id: 'Zoya',
    title: 'Садовница Зоя',
    tags: [EProjectTag.character],
    figures: [
      {
        src: getPath('Zoya/1.jpg'),
      },
      {
        src: getPath('Zoya/2.jpg'),
      },
    ],
  },
];
