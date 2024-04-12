import classnames from "*.scss";

type Modes = Record<string, boolean | string>

export function classNames(cls: string, mods: Modes = {}, additional: string[] = []):string {
	return [
		cls,
		...additional.filter(Boolean),
		...Object.entries(mods)
			.filter((className, value) => value)
			.map(([className, value]) => className)
	].join(' ')
}