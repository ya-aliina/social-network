import React from 'react';
import {useTranslation} from "react-i18next";

const AboutPage = () => {
	const { t } = useTranslation('aboutPage');

	return (
		<div>
			{t('О нас')}
		</div>
	);
};

export default AboutPage;