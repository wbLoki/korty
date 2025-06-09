import { GameCardProps } from '@/types';

export const games: GameCardProps[] = [
    {
        id: '1',
        title: 'Settlers of Catan Night',
        date: new Date('2025-06-10T19:00:00'),
        image: 'https://static.wikia.nocookie.net/p__/images/7/73/Aang_with_Lion_Turtle.png/revision/latest?cb=20140505162237&path-prefix=protagonist',
        desc: 'Join us for a competitive evening of Settlers of Catan!',
        tags: ['Strategy', 'Board Game', 'Intermediate'],
        price: 5,
        currentPlayer: 3,
        maxPlayer: 4,
    },
    {
        id: '2',
        title: 'Casual Uno + Snacks',
        date: new Date('2025-06-11T17:30:00'),
        image: 'https://static.wikia.nocookie.net/avatar/images/1/1f/Badgerfrog.png',
        desc: 'Relax with a few rounds of Uno and some shared snacks.',
        tags: ['Casual', 'Card Game', 'Snacks'],
        price: 0,
        currentPlayer: 2,
        maxPlayer: 6,
    },
    {
        id: '3',
        title: 'D&D One-Shot Adventure',
        date: new Date('2025-06-14T13:00:00'),
        image: null,
        desc: 'Roleplay and roll the dice in a beginner-friendly D&D session.',
        tags: ['Roleplaying', 'Fantasy', 'D&D'],
        price: 10,
        currentPlayer: 5,
        maxPlayer: 5,
    },
];
