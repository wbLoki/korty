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

export type MessageProps = {
    id: string;
    name: string;
    lastMessage: string;
    date: Date;
    avatar: string;
    unread: number;
    isGroup: boolean;
};
