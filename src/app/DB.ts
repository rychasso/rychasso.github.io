import { IProject } from '@models/Project';
import { getChristmas2021Project } from './DB/Christmas-2021';
import { getSamovarProject } from './DB/Samovar';
// import { getInTheForestProject } from './DB/In-The-Forest';
// import { getEatWithTeaProject } from './DB/Eat-With-Tea';
import { getBabyBookProject } from './DB/Baby-Book';
import { getBearHousesProject } from './DB/Bear-Houses';
import { getBedtimeStoriesForKids2Project } from './DB/Bedtime-Stories-For-Kids-2';
// import { getBedtimeStoriesForKids3Project } from './DB/Bedtime-Stories-For-Kids-3';
import { getPiratesProject } from './DB/Pirates';
// import { getMermaidVsPlasticProject } from './DB/Mermaid-Vs-Plastic';
import { getDifferencesGirlSwimProject } from './DB/Differences-Girl-Swim';
import { getDifferencesGirlTeaTimeProject } from './DB/Differences-Girl-Tea-Time';
import { getDinosaurProject } from './DB/Dinosaur';
import { getDragonProject } from './DB/Dragon';
import { getElfProject } from './DB/Elf';
import { getFeb14Project } from './DB/Feb-14';
import { getGnomesProject } from './DB/Gnomes';
import { getGoodNightEarthProject } from './DB/Good-Night-Earth';
import { getGoodNightSleepyPlanetsProject } from './DB/Good-Night-Sleepy-Planets';
import { getHappyBirthday28Project } from './DB/Happy-Birthday-28';
import { getLearningProject } from './DB/Learning';
import { getPoemsProject } from './DB/Poems';
import { getWhereAreWavesFromProject } from './DB/Where-Are-Waves-From';

export function getProjects(): IProject[] {
  return [
    getDragonProject(),
    getDinosaurProject(),
    getFeb14Project(),
    getHappyBirthday28Project(),
    getWhereAreWavesFromProject(),
    getLearningProject(),
    getElfProject(),
    getGnomesProject(),
    getGoodNightEarthProject(),
    getDifferencesGirlTeaTimeProject(),
    getGoodNightSleepyPlanetsProject(),
    // getDifferencesGirlProject(),
    getDifferencesGirlSwimProject(),
    // getMendeleevProject(),
    getPoemsProject(),
    // getMermaidVsPlasticProject(),
    getPiratesProject(),
    // getBedtimeStoriesForKids3Project(),
    getBabyBookProject(),
    getBedtimeStoriesForKids2Project(),
    getBearHousesProject(),
    // getLookAtSpaceProject(),
    // getVisitingNaturesheetProject(),
    // getBedtimeStoriesForKidsProject(),
    // getEatWithTeaProject(),
    // getInTheForestProject(),
    // getWhatIsHappinessProject(),
    // getDeepDiveProject(),
    // getChristmas2022Project(),
    // getHolidayComesToUsProject(),
    getChristmas2021Project(),
    getSamovarProject(),
    // {
    //   id: 'Emperor',
    //   title: TranslateService.localize('project.Emperor.title'),
    //   tags: [EProjectTag.magazine],
    //   description: getUpsideDownMagazineDescription(),
    //   figures: [
    //     {
    //       src: getPath('Emperor/1.jpg'),
    //     },
    //   ],
    // },
    // {
    //   id: 'Shaggy-Creeper',
    //   title: TranslateService.localize('project.Shaggy-Creeper.title'),
    //   tags: [EProjectTag.magazine],
    //   description: `
    //     ${getUpsideDownMagazineDescription()}
    //     <p>
    //         Мохнатую ползучку <br>
    //         Я в садике нашла. <br>
    //         Мохнатую ползучку <br>
    //         В ладошку я взяла. <br>
    //         Вокруг жужжали пчёлы, <br>
    //         Летала стрекоза. <br>
    //         Ползучке посмотрела <br>
    //         Я в чёрные глаза. <br>
    //         И в них прочла: <br>
    //         «Не надо тащить меня домой. <br>
    //         Тебе я очень рада, <br>
    //         Но быть хочу живой!» <br>
    //         Теперь гуляет где-то <br>
    //         В берёзовых лесах <br>
    //         Мохнатая ползучка <br>
    //         О двадцати ногах.
    //     </p>
    // `,
    //   figures: [
    //     {
    //       src: getPath('Shaggy-Creeper/1.jpg'),
    //     },
    //   ],
    // },
    // getTheBeatlesProject(),
    // getTheMiracleBeastProject(),
    // {
    //   id: 'Karaoke',
    //   title: TranslateService.localize('project.Karaoke.title'),
    //   tags: [],
    //   figures: [
    //     {
    //       src: getPath('Karaoke/1.jpg'),
    //     },
    //   ],
    // },
    // {
    //   id: 'The-Dreamers',
    //   title: TranslateService.localize('project.The-Dreamers.title'),
    //   tags: [EProjectTag.magazine],
    //   description: `
    //     ${getUpsideDownMagazineDescription()}
    //     <p>Станет рыцарь суперменом, <br>
    //         Станет Боингом дракон... <br>
    //         Что ж, стандартная система, <br>
    //         Просто сказочный закон. <br>
    //         Но и в том, и в этом веке, <br>
    //         Продолжая славный ряд, <br>
    //         Вырастают Человеки <br>
    //         Из мечтающих ребят.
    //         </p>
    // `,
    //   figures: [
    //     {
    //       src: getPath('The-Dreamers/1.jpg'),
    //       description: 'Вариант 1',
    //     },
    //     {
    //       src: getPath('The-Dreamers/2.jpg'),
    //       description: 'Вариант 2',
    //     },
    //   ],
    // },
    // {
    //   id: 'Storm',
    //   title: TranslateService.localize('project.Storm.title'),
    //   tags: [EProjectTag.postcards],
    //   posterSrc: getPath('Storm/poster.jpg'),
    //   figures: [
    //     {
    //       src: getPath('Storm/1.jpg'),
    //     },
    //   ],
    // },
    // {
    //   id: 'Lolita-Grandma',
    //   title: TranslateService.localize('project.Lolita-Grandma.title'),
    //   tags: [EProjectTag.character],
    //   description: `
    // <p>Знакомьтесь, бабушка 65&nbsp;лет, спортсменка, поддерживает здоровый образ жизни, очень ответственная, когда-то работала в&nbsp;полиции, поэтому запросто справится с&nbsp;разбойниками.</p>
    // <p>Ее&nbsp;домашнее животное рыбка Доли. Обожает детективные сериалы. Отличительная особенность&nbsp;&mdash; большая родинка на&nbsp;носу. Любимый предмет одежды&nbsp;&mdash; желтый пиджак.</p>`,
    //   figures: [
    //     {
    //       src: getPath('Lolita-Grandma/1.jpg'),
    //     },
    //     {
    //       src: getPath('Lolita-Grandma/2.jpg'),
    //     },
    //     {
    //       src: getPath('Lolita-Grandma/3.jpg'),
    //     },
    //     {
    //       src: getPath('Lolita-Grandma/4.jpg'),
    //     },
    //     {
    //       src: getPath('Lolita-Grandma/5.jpg'),
    //     },
    //     {
    //       src: getPath('Lolita-Grandma/6.jpg'),
    //     },
    //     {
    //       src: getPath('Lolita-Grandma/7.jpg'),
    //     },
    //     {
    //       src: getPath('Lolita-Grandma/8.jpg'),
    //     },
    //   ],
    // },
    // {
    //   id: 'Pizzeria-The-Bo',
    //   title: TranslateService.localize('project.Pizzeria-The-Bo.title'),
    //   tags: [EProjectTag.character],
    //   description: `
    //   <p>Знакомьтесь, это&nbsp;Бо и&nbsp;он&nbsp;боб.</p>
    //   <p>Бо&nbsp;молод, весел, энергичен, любит пиццу и&nbsp;мексиканскую еду.</p>
    //   <p>В&nbsp;свое свободное время он&nbsp;коллекционирует мелкие круглые предметы, потому что сам кругленький.</p>
    //   <p>Бо&nbsp;не&nbsp;женат: считает, что еще слишком молод и&nbsp;горяч для этого. </p>
    //   <p>Бо&nbsp;разработан, как бренд-персонаж для пиццерии с&nbsp;мексиканскими закусками.</p>
    // `,
    //   figures: [
    //     {
    //       src: getPath('Pizzeria-The-Bo/1.jpg'),
    //     },
    //     {
    //       src: getPath('Pizzeria-The-Bo/2.jpg'),
    //     },
    //     {
    //       src: getPath('Pizzeria-The-Bo/3.jpg'),
    //     },
    //     {
    //       src: getPath('Pizzeria-The-Bo/4.jpg'),
    //     },
    //     {
    //       src: getPath('Pizzeria-The-Bo/5.jpg'),
    //     },
    //   ],
    // },
  ];
}
