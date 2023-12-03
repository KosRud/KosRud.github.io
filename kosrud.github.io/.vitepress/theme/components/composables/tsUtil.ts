export type Dig<T, K extends string | number | symbol> = T extends Record<
    K,
    infer U
>
    ? U
    : never;

export type Enum = { [key: string]: number };
export type EnumValues<T extends Enum> = T[keyof T];
