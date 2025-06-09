import { DotNestedKeys } from '@/types/Translations';

export const translations = {
    en: {
        hello: 'This is Home',
        home: {
            title: 'Hey there!',
            subtitle: 'Ready for your next game?',
            cta: 'Create a New Game',
            list: {
                title: 'My upcoming games',
                all: 'View All',
                noGames: 'You have no upcoming games',
            },
        },
        search: {
            title: 'welcome to search page',
            subtitle: 'You can search for games here.',
            noGames: 'No games found',
        },
    },
    fr: {
        hello: 'Bonjour',
        goodbye: 'Au revoir',
    },
};

export type TranslationKey = DotNestedKeys<typeof translations.en>;
