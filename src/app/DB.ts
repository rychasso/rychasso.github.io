import { EProjectTag, IProject } from '@models/Project';

function getPath(relativePath: string): string {
  return `/assets/projects/${relativePath}`;
}

export const PROJECTS: IProject[] = [
  {
    id: 'Masha-And-Seeds',
    title: 'Маша и семена',
    tags: [EProjectTag.illustration],
    description: '<p>Иллюстрации к сказке &laquo;Как Маша посадила семена&raquo;</p>',
    posterSrc: getPath('Masha-And-Seeds/poster.jpg'),
    figures: [
      {
        src: getPath('Masha-And-Seeds/1.jpg'),
      },
      {
        src: getPath('Masha-And-Seeds/2.jpg'),
      },
      {
        src: getPath('Masha-And-Seeds/3.jpg'),
      },
      {
        src: getPath('Masha-And-Seeds/4.jpg'),
      },
    ],
  },
  {
    id: 'Semen-Mikhailovich-And-Vanya',
    title: 'Семён Михайлович и Ваня',
    tags: [EProjectTag.illustration],
    description:
      '<p>Иллюстрация, подготовленная для детского журнала &laquo;Вверх тормашками&raquo;</p>',
    figures: [
      {
        src: getPath('Semen-Mikhailovich-And-Vanya/1.jpg'),
      },
    ],
  },
  {
    id: 'Alenushka',
    title: 'Алёнушка',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Alenushka/1.jpg'),
      },
    ],
  },
  {
    id: 'Fox-Family',
    title: 'Семейный портрет',
    tags: [EProjectTag.illustration],
    figures: [
      {
        src: getPath('Fox-Family/1.jpg'),
      },
      {
        src: getPath('Fox-Family/2.jpg'),
      },
    ],
  },
  {
    id: 'Family-Christmas',
    title: 'Новогодние хлопоты',
    tags: [EProjectTag.illustration],
    description: `<p>Серия новогодних иллюстраций о&nbsp;подготовке к&nbsp;новому году.</p>`,
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
    description: `<p>Иллюстрация для детского журнала &laquo;Вверх Тормашками&raquo;: Миша хочет стать Президентом, но&nbsp;боится, потому что они рано лысеют.</p>`,
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
    description: `<p>Иллюстрация, подготовленная по&nbsp;картине художника &laquo;Девочка с&nbsp;персиками&raquo; Валентина Серова.</p>`,
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
    description: `<p>Иллюстрация, подготовленная по&nbsp;картине художника, ученого, писателя и&nbsp;изобретателя &laquo;Джоконда&raquo; Леонардо да&nbsp;Винчи.</p>`,
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
    description: `<p>Стилизованный портрет мексиканской художницы Фриды Кало. </p>`,
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
    description: `<p>Обложка для второго номера журнала &laquo;Вверх тормашками&raquo;</p>`,
    posterSrc: getPath('Upside-Down-Magazine/poster.jpg'),
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
    description: `<p>Серия иллюстраций, подготовленных для открыток. </p>`,
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
    description:
      '<p>Иллюстрация, подготовленная для Московского дома подарков для новогодней продукции.</p>',
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
    description: `
      <p>Иллюстрация, подготовленная для детского журнала &laquo;Вверх Тормашками&raquo;:<p>

      <p>Лёня рассматривает с&nbsp;дедушкой и&nbsp;бабушкой карту, читают название деревень.</p>
      <p>&mdash;&nbsp;Я&nbsp;бы назвал свою деревню Сиреневая,&nbsp;&mdash; говорит дед.</p>
      <p>&mdash;&nbsp;А&nbsp;я&nbsp;бы поселился в&nbsp;Мороженовой деревне. Ел&nbsp;бы мороженку на&nbsp;завтрак, обед и&nbsp;ужин. А&nbsp;еще вот&nbsp;бы была деревня Безмухино или Купашино.</p>
    `,
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
    description: `
    <p>Знакомьтесь, бабушка 65&nbsp;лет, спортсменка, поддерживает здоровый образ жизни, очень ответственная, когда-то работала в&nbsp;полиции, поэтому запросто справится с&nbsp;разбойниками.</p>
    <p>Ее&nbsp;домашнее животное рыбка Доли. Обожает детективные сериалы. Отличительная особенность&nbsp;&mdash; большая родинка на&nbsp;носу. Любимый предмет одежды&nbsp;&mdash; желтый пиджак.</p>`,
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
      {
        src: getPath('Lolita-Grandma/4.jpg'),
      },
      {
        src: getPath('Lolita-Grandma/5.jpg'),
      },
      {
        src: getPath('Lolita-Grandma/6.jpg'),
      },
      {
        src: getPath('Lolita-Grandma/7.jpg'),
      },
      {
        src: getPath('Lolita-Grandma/8.jpg'),
      },
    ],
  },
  {
    id: 'Pizzeria-The-Bo',
    title: 'Мистер Бо',
    tags: [EProjectTag.character],
    description: `
      <p>Знакомьтесь, это&nbsp;Бо и&nbsp;он&nbsp;боб.</p>
      <p>Бо&nbsp;молод, весел, энергичен, любит пиццу и&nbsp;мексиканскую еду.</p>
      <p>В&nbsp;свое свободное время он&nbsp;коллекционирует мелкие круглые предметы, потому что сам кругленький.</p>
      <p>Бо&nbsp;не&nbsp;женат: считает, что еще слишком молод и&nbsp;горяч для этого. </p>
      <p>Бо&nbsp;разработан, как бренд-персонаж для пиццерии с&nbsp;мексиканскими закусками.</p>
    `,
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
