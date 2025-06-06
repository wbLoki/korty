export type DotNestedKeys<T, Prefix extends string = ''> = {
    [K in keyof T]: T[K] extends string
        ? `${Prefix}${K & string}`
        : DotNestedKeys<T[K], `${Prefix}${K & string}.`>
}[keyof T];