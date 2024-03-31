import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path='/' element={<MainPage />}></Route>
				<Route path='/about' element={<AboutPage />}></Route>
			</Routes>
		</Suspense>
	);
};

export default AppRouter;