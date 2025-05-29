export type User = {
    id?: string;
    name?: string | null;
    email: string | null;
    photo?: string | null;
    familyName?: string | null;
    givenName?: string | null;
};

export type UserContextType = {
    user: User;
    authenticated: boolean;
    initializing: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
    updateProfile: (updates: Partial<User>) => Promise<void>;
    deleteProfile: () => Promise<void>;
};
