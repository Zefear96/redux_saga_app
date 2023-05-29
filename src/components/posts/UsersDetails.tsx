import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchPostsRequest } from "../../redux/reducers/postsSlice";
import { fetchUsersRequest } from "../../redux/reducers/usersSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Post, User } from "../../utils/types";
import ElementPost from "./ElementPost";
import { fetchUserByIdRequest } from "../../redux/reducers/userByIdSlice";

const UsersDetails = () => {
	const dispatch = useAppDispatch();
	const posts = useAppSelector((state) => state.posts.data);
	const { id } = useParams();
	console.log(typeof id);

	const userId = id ? +id : 0;
	console.log(typeof userId);

	const users = useAppSelector((state) => state.users.data);
	const currentUser = useAppSelector((state) => state.userById.data);
	const loadingPosts = useAppSelector((state) => state.posts.loading);
	const loadingUsers = useAppSelector((state) => state.users.loading);

	console.log(currentUser);

	console.log(posts);
	console.log(users);
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchPostsRequest({ search: "", filter: "" }));
		dispatch(fetchUsersRequest());
		dispatch(fetchUserByIdRequest(userId));
	}, [dispatch, userId]);

	console.log(id);

	function handleSetAuthor(post: Post) {
		const user = users.find((user) => user.id === post.userId);
		return user ? user.name : "";
	}

	if (loadingPosts || loadingUsers) {
		return (
			<Container
				fluid
				className="d-flex justify-content-center align-items-center vh-100"
			>
				<Row>
					<Col className="text-center">
						<Spinner
							animation="border"
							size="sm"
							role="status"
							aria-hidden="true"
						/>
						<span> Loading...</span>
					</Col>
				</Row>
			</Container>
		);
	}

	if (!currentUser) {
		return (
			<Container className="mx-auto my-5">
				<Button variant="primary" onClick={() => navigate(-1)}>
					Back
				</Button>
				<h1>User not found!</h1>
			</Container>
		);
	}

	return (
		<Container className="mx-auto my-5">
			<Button variant="primary" onClick={() => navigate(-1)} className=" my-3">
				Back
			</Button>
			<h1 className=" my-2 text-center uppercase">Users Information</h1>
			<Card>
				<Card.Header className=" flex items-center justify-center">
					<img
						src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
						alt="avatar"
						className=" w-20 h-20 object-contain m-2"
					/>
					<span className="row-cols-1">
						<span className=" font-bold">Email:</span> {currentUser?.email}
					</span>
				</Card.Header>
				<Card.Body className="d-flex flex-column h-100 bg-blue-100">
					<Card.Title className=" my-3">
						<span className=" font-bold">Username: </span>
						{currentUser?.username}
					</Card.Title>
					<Card.Text className="">
						<span className=" font-bold">First and Last Name: </span>
						{currentUser?.name}
					</Card.Text>
				</Card.Body>
			</Card>

			<h2 className=" mt-5 text-center uppercase">My posts</h2>
			<Row className="row-cols-1">
				{posts && posts.length !== 0 ? (
					posts
						.filter((post: Post) => post.userId === userId)
						.map((post: Post) => (
							<Col key={post.id}>
								<ElementPost post={post} author={handleSetAuthor(post)} />
							</Col>
						))
				) : (
					<Col>
						<h1>"Empty!"</h1>
					</Col>
				)}
			</Row>
		</Container>
	);
};

export default UsersDetails;
