export type Enum = { [key: string]: number };
export type EnumValues<T extends Enum> = T[keyof T];
