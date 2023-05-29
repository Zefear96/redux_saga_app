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
			<Route path="/information" element={<AboutMe />} />
			<Route path="/users/:id" element={<UsersDetails />} />
			{/* <Route path="/comments/:id" element={<CommentsPost />} /> */}
		</Routes>
	);
};

export default MainRoutes;
