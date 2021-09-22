export enum ELocale {
  En = 'en',
  Ru = 'ru',
}

const defaultLocale = ELocale.Ru;
const possibleLocales: string[] = [ELocale.Ru, ELocale.En];

export function getCurrentLocale(): ELocale {
  const userLocale = localStorage.getItem('locale') || navigator.language.slice(0, 2);
  if (possibleLocales.includes(userLocale?.toLowerCase())) {
    return userLocale as ELocale;
  }
  return defaultLocale;
}
