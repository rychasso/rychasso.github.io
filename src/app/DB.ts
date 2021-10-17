import { EProjectTag, IProject } from '@models/Project';
import { TranslateService } from '@i18n/translate.service';

function getPath(relativePath: string): string {
  return `/assets/projects/${relativePath}`;
}

function renderLink(href: string, content: string): string {
  return `<a class="link" href="${href}" target="_blank" ><span><b>${content}</b></span></a>`;
}

export function getProjects(): IProject[] {
  return [
    {
      id: 'Emperor',
      title: TranslateService.localize('project.Emperor.title'),
      tags: [EProjectTag.magazine],
      description: `
        <p>Иллюстрация, подготовленная для детского журнала &laquo;Вверх тормашками&raquo;</p>
      `,
      figures: [
        {
          src: getPath('Emperor/1.jpg'),
        },
      ],
    },
    {
      id: 'Shaggy-Creeper',
      title: TranslateService.localize('project.Shaggy-Creeper.title'),
      tags: [EProjectTag.magazine],
      description: `
        <p>Иллюстрация, подготовленная для детского журнала &laquo;Вверх тормашками&raquo;</p>
        <p>
          <em>
            Мохнатую ползучку <br>
            Я в садике нашла. <br>
            Мохнатую ползучку <br>
            В ладошку я взяла. <br>
            Вокруг жужжали пчёлы, <br>
            Летала стрекоза. <br>
            Ползучке посмотрела <br>
            Я в чёрные глаза. <br>
            И в них прочла: <br>
            «Не надо тащить меня домой. <br>
            Тебе я очень рада, <br>
            Но быть хочу живой!» <br>
            Теперь гуляет где-то <br>
            В берёзовых лесах <br>
            Мохнатая ползучка <br>
            О двадцати ногах.
          </em>
        </p>
    `,
      figures: [
        {
          src: getPath('Shaggy-Creeper/1.jpg'),
        },
      ],
    },
    {
      id: 'Bitterly',
      title: TranslateService.localize('project.Bitterly.title'),
      tags: [EProjectTag.magazine],
      description: `<p>Иллюстрация, подготовленная для детского журнала &laquo;Вверх тормашками&raquo;</p>`,
      figures: [
        {
          src: getPath('Bitterly/1.jpg'),
        },
      ],
    },
    {
      id: 'The-Beatles',
      title: 'The Beatles',
      tags: [],
      figures: [
        {
          src: getPath('The-Beatles/1.jpg'),
          description: `<p>${renderLink('https://www.pinterest.ru/pin/692147036484874459', 'Оригинал фотографии')} группы The Beatles</p>`,
        },
      ],
    },
    {
      id: 'The-Miracle-Beast',
      title: TranslateService.localize('project.THE-MIRACLE-BEAST.title'),
      tags: [EProjectTag.books, EProjectTag.character],
      description: `
        <p>${TranslateService.localize('project.THE-MIRACLE-BEAST.description', {
          link: renderLink(
            'https://www.instagram.com/burakelena/',
            '@burakelena',
          )
      })}</p>
      `,
      posterSrc: getPath('The-Miracle-Beast/poster.jpg'),
      figures: [
        {
          src: getPath('The-Miracle-Beast/book-poster.jpg'),
        },
        {
          title: TranslateService.localize('project.THE-MIRACLE-BEAST.prepare-description'),
          src: getPath('The-Miracle-Beast/work-1.jpg'),
        },
        {
          title: TranslateService.localize('project.THE-MIRACLE-BEAST.steps-description'),
          multipleSrc: [
            getPath('The-Miracle-Beast/work-2.1.jpg'),
            getPath('The-Miracle-Beast/work-2.2.jpg'),
            getPath('The-Miracle-Beast/work-2.3.jpg'),
          ],
        },
        {
          title: TranslateService.localize('project.THE-MIRACLE-BEAST.templates-description'),
          multipleSrc: [
            getPath('The-Miracle-Beast/work-3.1.jpg'),
            getPath('The-Miracle-Beast/work-3.2.jpg'),
          ],
        },
        {
          title: TranslateService.localize('project.THE-MIRACLE-BEAST.results-description'),
          src: getPath('The-Miracle-Beast/book-1.jpg'),
        },
        {
          src: getPath('The-Miracle-Beast/book-2.jpg'),
        },
        {
          src: getPath('The-Miracle-Beast/book-3.jpg'),
        },
        {
          src: getPath('The-Miracle-Beast/book-4.jpg'),
        },
        {
          src: getPath('The-Miracle-Beast/book-5.jpg'),
        },
        {
          src: getPath('The-Miracle-Beast/book-6.jpg'),
        },
        {
          src: getPath('The-Miracle-Beast/book-7.jpg'),
        },
        {
          src: getPath('The-Miracle-Beast/book-8.jpg'),
        },
        {
          src: getPath('The-Miracle-Beast/book-9.jpg'),
        },
        {
          src: getPath('The-Miracle-Beast/book-10.jpg'),
        },
        {
          src: getPath('The-Miracle-Beast/book-11.jpg'),
        },
      ],
    },
    {
      id: 'Childhood-Trading',
      title: TranslateService.localize('project.Childhood-Trading.title'),
      tags: [],
      figures: [
        {
          src: getPath('Childhood-Trading/1.jpg'),
        },
      ],
    },
    {
      id: 'Karaoke',
      title: TranslateService.localize('project.Karaoke.title'),
      tags: [],
      figures: [
        {
          src: getPath('Karaoke/1.jpg'),
        },
      ],
    },
    {
      id: 'Attraction',
      title: TranslateService.localize('project.Attraction.title'),
      tags: [],
      figures: [
        {
          src: getPath('Attraction/1.jpg'),
        },
      ],
    },
    {
      id: 'The-Dreamers',
      title: TranslateService.localize('project.The-Dreamers.title'),
      tags: [EProjectTag.magazine],
      description: `
        <p>Иллюстрация, подготовленная для детского журнала &laquo;Вверх тормашками&raquo;</p>
        <p><em>Станет рыцарь суперменом, <br>
            Станет Боингом дракон... <br>
            Что ж, стандартная система, <br>
            Просто сказочный закон. <br>
            Но и в том, и в этом веке, <br>
            Продолжая славный ряд, <br>
            Вырастают Человеки <br>
            Из мечтающих ребят.</em>
            </p>
    `,
      figures: [
        {
          src: getPath('The-Dreamers/1.jpg'),
          description: 'Вариант 1'
        },
        {
          src: getPath('The-Dreamers/2.jpg'),
          description: 'Вариант 2'
        },
      ],
    },
    {
      id: 'Kindergarten',
      title: TranslateService.localize('project.Kindergarten.title'),
      tags: [EProjectTag.magazine],
      figures: [
        {
          src: getPath('Kindergarten/1.jpg'),
        },
      ],
    },
    {
      id: 'Lessons-Outside',
      title: TranslateService.localize('project.Lessons-Outside.title'),
      tags: [EProjectTag.magazine],
      description: `
        <p>Иллюстрация подготовлена для детского журнала &laquo;Вверх Тормашками&raquo;.</p>
        <p>Я&nbsp;тут подумала, что если&nbsp;бы в&nbsp;тёплые весенние дни или в&nbsp;начале лета, когда у&nbsp;некоторых в&nbsp;школах ещё учёба не&nbsp;закончилась, практиковались&nbsp;бы занятия на&nbsp;свежем воздухе.</p>
      `,
      figures: [
        {
          src: getPath('Lessons-Outside/1.jpg'),
        },
      ],
    },
    {
      id: 'Tailwind',
      title: TranslateService.localize('project.Tailwind.title'),
      tags: [EProjectTag.magazine],
      description:
        '<p>Иллюстрация подготовлена для детского журнала &laquo;Вверх Тормашками&raquo; по рассказу Ольги Клушиной &laquo;Попутный ветер&raquo;.</p>',
      posterSrc: getPath('Tailwind/poster.jpg'),
      figures: [
        {
          src: getPath('Tailwind/1.jpg'),
        },
        {
          src: getPath('Tailwind/2.jpg'),
        },
      ],
    },
    {
      id: 'Storm',
      title: TranslateService.localize('project.Storm.title'),
      tags: [],
      posterSrc: getPath('Storm/poster.jpg'),
      figures: [
        {
          src: getPath('Storm/1.jpg'),
        },
      ],
    },
    {
      id: 'Masha-And-Seeds',
      title: TranslateService.localize('project.Masha-And-Seeds.title'),
      tags: [EProjectTag.books],
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
      title: TranslateService.localize('project.Semen-Mikhailovich-And-Vanya.title'),
      tags: [EProjectTag.magazine],
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
      title: TranslateService.localize('project.Alenushka.title'),
      tags: [],
      figures: [
        {
          src: getPath('Alenushka/1.jpg'),
        },
      ],
    },
    {
      id: 'Fox-Family',
      title: TranslateService.localize('project.Fox-Family.title'),
      tags: [],
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
      id: 'Winter-Street',
      title: TranslateService.localize('project.Winter-Street.title'),
      tags: [],
      description:
        '<p>Иллюстрация, подготовленная для Московского дома подарков для новогодней продукции.</p>',
      figures: [
        {
          src: getPath('Winter-Street/1.jpg'),
        },
      ],
    },
    {
      id: 'Lolita-Grandma',
      title: TranslateService.localize('project.Lolita-Grandma.title'),
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
      title: TranslateService.localize('project.Pizzeria-The-Bo.title'),
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
  ];
}
