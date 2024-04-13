declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classnames: IClassNames;
	export = classnames;
}

declare module "*.png"
declare module "*.jpg"

declare module 'src/assets/svgr/*.svg' {
	import React from "react";
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}
