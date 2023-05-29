import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ElementPost from "./ElementPost";
import { useAppSelector } from "../../redux/hooks";
import {
	fetchPostsRequest,
	setOrderQuery,
} from "../../redux/reducers/postsSlice";
import { Post } from "../../utils/types";
import { fetchUsersRequest } from "../../redux/reducers/usersSlice";

const ListsPosts = () => {
	const posts = useAppSelector((state) => state.posts.data);
	const users = useAppSelector((state) => state.users.data);
	const searchQuery = useAppSelector((state) => state.posts.searchQuery);
	const orderQuery = useAppSelector((state) => state.posts.orderQuery);
	const [order, setOrder] = useState<string>("");

	// console.log(posts);
	// console.log(users);

	const loadingPosts = useAppSelector((state) => state.posts.loading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchPostsRequest({ search: searchQuery, order: orderQuery }));
		dispatch(fetchUsersRequest());
	}, [dispatch, searchQuery, orderQuery]);

	// Pagination
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 6; // Количество постов, отображаемых на текущей страницы
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
	const totalPages = Math.ceil(posts.length / postsPerPage);
	const pageRange = 2; // Количество цифр, отображаемых с обеих сторон текущей страницы
	const startPage = Math.max(currentPage - pageRange, 1);
	const endPage = Math.min(currentPage + pageRange, totalPages);

	const pageNumbers = [];
	for (let i = startPage; i <= endPage; i++) {
		pageNumbers.push(i);
	}

	function handleSetAuthor(post: Post) {
		const user = users.find((user) => user.id === post.userId);
		return user ? user.name : "";
	}

	const handlePaginationItemClick = (pageNumber: number) => {
		setCurrentPage(pageNumber);
	};

	const paginationItems = pageNumbers.map((number) => (
		<Pagination.Item
			key={number}
			active={number === currentPage}
			onClick={() => handlePaginationItemClick(number)}
		>
			{number}
		</Pagination.Item>
	));

	const handleOrder = (selectedOrder: string) => {
		dispatch(setOrderQuery(selectedOrder));
	};

	if (loadingPosts) {
		return (
			<div className="flex justify-center items-center h-screen">
				<Spinner
					animation="border"
					size="sm"
					role="status"
					aria-hidden="true"
				/>
				<span className=" mx-2 text-base"> Loading...</span>
			</div>
		);
	}

	return (
		<Container className="mx-auto my-5">
			<DropdownButton id="dropdown-basic-button" title={`Sort by: ${order}`}>
				<Dropdown.Item
					onClick={() => {
						handleOrder("asc");
						setOrder("title A-B");
					}}
				>
					Title A-B
				</Dropdown.Item>
				<Dropdown.Item
					onClick={() => {
						handleOrder("desc");
						setOrder("title B-A");
					}}
				>
					Title B-A
				</Dropdown.Item>
			</DropdownButton>
			<Row className=" row-cols-1">
				{posts && posts.length !== 0 ? (
					currentPosts.map((post: Post) => (
						<Col key={post.id}>
							<ElementPost post={post} author={handleSetAuthor(post)} />
						</Col>
					))
				) : (
					<Col>
						<h1 className=" text-center">"Empty!"</h1>
					</Col>
				)}
			</Row>

			<Pagination className="flex justify-center my-5">
				<Pagination.First onClick={() => handlePaginationItemClick(1)} />
				<Pagination.Prev
					onClick={() => handlePaginationItemClick(currentPage - 1)}
					disabled={currentPage === 1}
				/>
				{paginationItems}
				<Pagination.Next
					onClick={() => handlePaginationItemClick(currentPage + 1)}
					disabled={currentPage === totalPages}
				/>
				<Pagination.Last
					onClick={() => handlePaginationItemClick(totalPages)}
				/>
			</Pagination>
		</Container>
	);
};

export default ListsPosts;
