export const translations = {
    en: {
        hello: 'This is Home',
        goodbye: 'Goodbye',
    },
    fr: {
        hello: 'Bonjour',
        goodbye: 'Au revoir',
    },
};

export type TranslationKey = keyof typeof translations.en;
