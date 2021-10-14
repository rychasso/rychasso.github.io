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
      id: 'Shaggy-Creeper',
      title: TranslateService.localize('project.Shaggy-Creeper.title'),
      tags: [EProjectTag.illustration],
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
      tags: [EProjectTag.illustration],
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
      tags: [EProjectTag.illustration],
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
      tags: [EProjectTag.illustration, EProjectTag.books, EProjectTag.character],
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
      id: 'The-Beatles',
      title: 'The Beatles',
      tags: [EProjectTag.illustration],
      figures: [
        {
          src: getPath('The-Beatles/1.jpg'),
          description: `<p>${renderLink('https://www.pinterest.ru/pin/692147036484874459', 'Оригинал фотографии')} группы The Beatles</p>`,
        },
      ],
    },
    {
      id: 'Childhood-Trading',
      title: TranslateService.localize('project.Childhood-Trading.title'),
      tags: [EProjectTag.illustration],
      figures: [
        {
          src: getPath('Childhood-Trading/1.jpg'),
        },
      ],
    },
    {
      id: 'Karaoke',
      title: TranslateService.localize('project.Karaoke.title'),
      tags: [EProjectTag.illustration],
      figures: [
        {
          src: getPath('Karaoke/1.jpg'),
        },
      ],
    },
    {
      id: 'Attraction',
      title: TranslateService.localize('project.Attraction.title'),
      tags: [EProjectTag.illustration],
      figures: [
        {
          src: getPath('Attraction/1.jpg'),
        },
      ],
    },
    {
      id: 'The-Dreamers',
      title: TranslateService.localize('project.The-Dreamers.title'),
      tags: [EProjectTag.illustration],
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
      tags: [EProjectTag.illustration],
      figures: [
        {
          src: getPath('Kindergarten/1.jpg'),
        },
      ],
    },
    {
      id: 'Lessons-Outside',
      title: TranslateService.localize('project.Lessons-Outside.title'),
      tags: [EProjectTag.illustration],
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
      tags: [EProjectTag.illustration],
      description:
        '<p>Иллюстрация подготовлена для детского журнала &laquo;Вверх Тормашками&raquo; по рассказу Ольги Клушиной &laquo;Попутный ветер&raquo;.</p>',
      posterSrc: getPath('Tailwind/poster.jpg'),
      figures: [
        {
          src: getPath('Tailwind/1.jpg'),
        },
      ],
    },
    {
      id: 'Storm',
      title: TranslateService.localize('project.Storm.title'),
      tags: [EProjectTag.illustration],
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
      title: TranslateService.localize('project.Semen-Mikhailovich-And-Vanya.title'),
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
      title: TranslateService.localize('project.Alenushka.title'),
      tags: [EProjectTag.illustration],
      figures: [
        {
          src: getPath('Alenushka/1.jpg'),
        },
      ],
    },
    {
      id: 'Fox-Family',
      title: TranslateService.localize('project.Fox-Family.title'),
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
      id: 'Misha-The-President',
      title: TranslateService.localize('project.Misha-The-President.title'),
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
      title: TranslateService.localize('project.Girl-With-Peaches.title'),
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
      title: TranslateService.localize('project.Mona-Lisa.title'),
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
      title: TranslateService.localize('project.Frida-Kahlo.title'),
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
      title: TranslateService.localize('project.Upside-Down-Magazine.title'),
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
      title: TranslateService.localize('project.Spring-Animals.title'),
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
      title: TranslateService.localize('project.Vasily-The-Cat.title'),
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
      title: TranslateService.localize('project.Winter-Street.title'),
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
