import ru, {
  actions as actionsRu,
  nouns as nounsRu,
  menu as menuRu,
  projects as projectsRu,
} from './ru';

const nouns: typeof nounsRu = {};
const actions: typeof actionsRu = {};

const menu: typeof menuRu = {
  'menu.about': 'About',
  'menu.portfolio': 'Portfolio',
  'menu.tag.characters': 'Characters',
  'menu.tag.illustrations': 'Illustrations',
  'menu.first-name': 'Alyona',
  'menu.last-name': 'Rychagova',
};

const projects: typeof projectsRu = {
  ...projectsRu,
  'project.THE-MIRACLE-BEAST.title': 'The Miracle Beast',
  'project.THE-MIRACLE-BEAST.description': 'Illustrations made for &laquo;The Miracle Beast&raquo; poem written by Elena Burak {$link}',
  'project.THE-MIRACLE-BEAST.prepare-description': 'Character search',
  'project.THE-MIRACLE-BEAST.steps-description': 'Dynamic, storyboard, color',
  'project.THE-MIRACLE-BEAST.templates-description': 'Prepare sketches',
  'project.THE-MIRACLE-BEAST.results-description': 'Results',

  'project.Childhood-Trading.title': 'Trading',
  'project.Karaoke.title': 'Karaoke',
  'project.Attraction.title': 'Attraction',
  'project.The-Dreamers.title': 'The Dreamers',
  'project.Kindergarten.title': 'Once in Kindergarten',
  'project.Lessons-Outside.title': 'Lessons outside',
  'project.Tailwind.title': 'Tailwind',
  'project.Storm.title': 'Storm',
  'project.Masha-And-Seeds.title': 'Masha and the seeds',
  'project.Semen-Mikhailovich-And-Vanya.title': 'Semen Mikhailovich and Vanya',
  'project.Alenushka.title': 'Alenushka',
  'project.Fox-Family.title': 'Fox family',
  'project.Misha-The-President.title': 'Misha the President',
  'project.Girl-With-Peaches.title': 'Girl with peaches',
  'project.Mona-Lisa.title': 'Mona Lisa',
  'project.Frida-Kahlo.title': 'Dove Frida',
  'project.Upside-Down-Magazine.title': 'Upside Down',
  'project.Spring-Animals.title': 'Dawn of spring',
  'project.Vasily-The-Cat.title': 'One day of Vasily the Cat',
  'project.Winter-Street.title': 'Christmas street',
  'project.Lolita-Grandma.title': 'Lolita grandma',
  'project.Pizzeria-The-Bo.title': 'Mister Bo',
};

const locales: typeof ru = {
  ...nouns,
  ...actions,
  ...menu,
  ...projects
};

export default locales;