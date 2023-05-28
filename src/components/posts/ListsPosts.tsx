import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ElementPost from "./ElementPost";
import { RootState } from "../../redux/store";

import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ListsPosts = () => {
	const posts = useSelector((state: RootState) => state.data);
	console.log(posts);

	const loading = useSelector((state: RootState) => state.loading);

	if (loading) {
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
	return (
		<Container className="mx-auto my-5">
			<Row className="row-cols-lg-3 row-cols-md-2 row-cols-1">
				{posts && posts.length !== 0 ? (
					posts.map((post) => (
						<Col key={post.id}>
							<ElementPost post={post} />
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

export default ListsPosts;
