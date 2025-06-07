export type GameCardProps = {
    id: string;
    title: string;
    date: Date;
    image: string | null;
    desc: string;
    tags: string[];
    price: number;
    currentPlayer: number;
    maxPlayer: number;
};

