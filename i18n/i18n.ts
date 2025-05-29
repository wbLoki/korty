import { getLocales } from 'expo-localization';
import * as SecureStore from 'expo-secure-store';
import { I18n } from 'i18n-js';
import { TranslationKey, translations } from './translations';

const i18n = new I18n(translations);

i18n.locale = getLocales()[0].languageCode || 'fr';

const getLanguage = async (): Promise<string> => {
    const language = await SecureStore.getItemAsync('language');
    return language || 'en';
};

const setLanguage = async (language: string): Promise<void> => {
    await SecureStore.setItemAsync('language', language);
};

const t = (key: TranslationKey): string => {
    return i18n.t(key);
};

export { getLanguage, i18n, setLanguage, t };
