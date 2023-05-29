import React from "react";
import { Routes, Route } from "react-router-dom";
import ListsPosts from "./components/posts/ListsPosts";
import AboutMe from "./components/AboutMe";
import UsersDetails from "./components/posts/UsersDetails";
import CommentsPost from "./components/posts/CommentsPost";

const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<ListsPosts />} />
			<Route path="/about/me" element={<AboutMe />} />
			<Route path="/users/:id" element={<UsersDetails />} />
		</Routes>
	);
};

export default MainRoutes;
