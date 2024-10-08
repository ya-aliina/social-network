export type Mods = Record<string, boolean | string | undefined>
export type Additional = Array<string | undefined>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Additional = [],
):string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([className, value]) => Boolean(value))
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .map(([className, value]) => className),
    ]
        .join(' ')
        .trim();
}
