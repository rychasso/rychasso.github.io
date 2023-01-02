import ru, {
  actions as actionsRu,
  nouns as nounsRu,
  menu as menuRu,
  projects as projectsRu,
} from './ru';

const nouns: typeof nounsRu = {
  'count-иллюстрация': '{$count} illustration',
  'count-иллюстрации': '{$count} illustrations',
  'count-иллюстраций': '{$count} illustrations',
};
const actions: typeof actionsRu = {};

const menu: typeof menuRu = {
  'menu.about': 'About',
  'menu.portfolio': 'Portfolio',
  'menu.tag.characters': 'Characters',
  'menu.tag.magazine': 'Magazines',
  'menu.tag.book': 'Books',
  'menu.tag.all': 'All',
  'menu.tag.postcards': 'Postcards',
  'menu.tag.packing': 'Packing',
  'menu.first-name': 'Alyona',
  'menu.last-name': 'Rychagova',
  'menu.process': 'Process',
  'menu.footer.in-most-services': 'On all services',
};

const projects: typeof projectsRu = {
  ...projectsRu,
  'project.THE-MIRACLE-BEAST.title': 'The Miracle Beast',
  'project.THE-MIRACLE-BEAST.description':
    'Illustrations made for &laquo;The Miracle Beast&raquo; poem written by Elena Burak {$link}',
  'project.THE-MIRACLE-BEAST.prepare-description': 'Character search',
  'project.THE-MIRACLE-BEAST.steps-description': 'Dynamic, storyboard, color',
  'project.THE-MIRACLE-BEAST.templates-description': 'Prepare sketches',
  'project.THE-MIRACLE-BEAST.results-description': 'Results',

  'project.Karaoke.title': 'Karaoke',
  'project.The-Dreamers.title': 'The Dreamers',
  'project.Tailwind.title': 'Tailwind',
  'project.Storm.title': 'Storm',
  'project.Misha-The-President.title': 'Misha the President',
  'project.Girl-With-Peaches.title': 'Girl with peaches',
  'project.Mona-Lisa.title': 'Mona Lisa',
  'project.Frida-Kahlo.title': 'Dove Frida',
  'project.Upside-Down-Magazine.title': 'Upside Down',
  'project.Spring-Animals.title': 'Dawn of spring',
  'project.Vasily-The-Cat.title': 'One day of Vasily the Cat',
  'project.Lolita-Grandma.title': 'Lolita grandma',
  'project.Pizzeria-The-Bo.title': 'Mister Bo',
  'project.Shaggy-Creeper.title': 'Shaggy-Creeper',
  'project.Emperor.title': 'Emperor',
  'project.Look-At-Space.title': 'Discovery',
  'project.Pirates.title': 'Pirates',
  'project.Deep-Dive.title': 'Deep dive',
  'project.Mermaid-Vs-Plastic.title': 'Ecology problems',
  'project.Poems.title': 'Poems',

  'project.What-Is-Happiness.title': 'What is happiness?',
  'project.What-Is-Happiness.prepare-description': 'Characters search',
  'project.What-Is-Happiness.storyboard': 'Storyboard',
  'project.What-Is-Happiness.templates': 'Templates',
  'project.What-Is-Happiness.results-description': 'Results',
  'project.What-Is-Happiness.book-cover': 'Book cover',

  'project.Samovar.title': 'Samovar',
  'project.Christmas-2021.title': 'Christmas 2021',
  'project.Christmas-2022.title': 'Christmas 2022',
  'project.Holiday-Comes-To-Us.title': 'Holiday comes to us',
  'project.Bedtime-Stories-For-Kids.title': 'Bedtime stories for kids',
  'project.Bedtime-Stories-For-Kids-2.title': 'Bedtime stories for kids 2',
  'project.Bedtime-Stories-For-Kids-3.title': 'Bedtime stories for kids 3',
  'project.In-The-Forest.title': 'In the forest',
  'project.Eat-With-Tea.title': 'For tea',
  'project.Bear-Houses.title': 'Bear houses',
  'project.Visiting-Naturesheet.title': 'Visiting «Naturesheet»',

  'project.Baby-Book.title': 'Baby-Book',
  'project.Baby-Book.description': 'DYI Book for children',
  'project.Good-Night-Sleepy-Planets.title': 'Good night sleepy planets',
  'project.Mendeleev.title': 'Mendeleev',
  'project.Differences-Girl.title': 'Find 10 differences',
  'project.Differences-Girl-Swim.title': 'Find 10 differences',
  'project.Differences-Girl-Tea-Time.title': 'Find 10 differences',
  'project.Gnomes.title': 'Gnomes',
  'project.Good-Night-Earth.title': 'Good night, Earth',
  'project.Learning.title': 'Learning',
  'project.Elf.title': 'Elf',
};

const locales: typeof ru = {
  ...nouns,
  ...actions,
  ...menu,
  ...projects,
};

export default locales;
