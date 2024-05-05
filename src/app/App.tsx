import './styles/index.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import { useTranslation } from 'react-i18next';
import {ReactNode, Suspense} from "react";

function MyComponent() {
	const { t, i18n } = useTranslation();

	return <h1>{t('Тестовый перевод')}</h1>
}

export const App = () => {
	const {theme} = useTheme();


	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=' '>
				<Navbar/>
				<MyComponent />
				<div className='page-content'>
					<Sidebar />
					<AppRouter/>
				</div>
			</Suspense>
		</div>
	);
};