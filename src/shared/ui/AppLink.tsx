import React, {FC} from 'react';
interface AppLinksProps {
	className: string
}

export const AppLink: FC<AppLinksProps> = ({children}) => {
	return (
		<div>
			{children}
		</div>
	);
};
