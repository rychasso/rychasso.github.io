import ru, {
  actions as actionsRu,
  nouns as nounsRu,
  menu as menuRu,
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

const locales: typeof ru = {
  ...nouns,
  ...actions,
  ...menu
};

export default locales;
