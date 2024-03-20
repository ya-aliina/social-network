import {BrowserRouter, Routes, Route, Link,} from "react-router-dom";
import AboutAsync from "./pages/about/About.async";
import PostsAsync from "./pages/posts/Posts.async";
import {Suspense} from "react";

export const App = () => {
	return (
		<BrowserRouter>
			<Link to='/about'>About</Link>
			<Link to='/posts'>Posts</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/about' element={<AboutAsync />}></Route>
					<Route path='/posts' element={<PostsAsync />}></Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};