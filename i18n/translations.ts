import { DotNestedKeys } from '@/types/Translations';

export const translations = {
    en: {
        hello: 'This is Home',
        search: {
            title: 'welcome to search page',
            subtitle: 'You can search for games here.',
            noGames: 'No games found',
        },
        chat: {
            noChats: 'No conversations yet. Start a new one!',
        },
    },
    fr: {
        hello: 'Bonjour',
        goodbye: 'Au revoir',
    },
};

export type TranslationKey = DotNestedKeys<typeof translations.en>;
