import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchCommentsRequest } from "../../redux/reducers/commentsSlice";

const CommentsPost = ({
	show,
	handleClose,
	id,
}: {
	show: boolean;
	handleClose: () => void;
	id: number;
}) => {
	const comments = useAppSelector((state) => state.comments.data);
	const loadingComments = useAppSelector((state) => state.comments.loading);
	const errorComments = useAppSelector((state) => state.comments.error);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchCommentsRequest());
	}, [dispatch]);

	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Comments</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{comments
					? comments
							.filter((comment) => comment.postId === id)
							.map((comment) => (
								<Card className="my-3 p-3" key={comment.id}>
									<h4>{comment.email}</h4>
									<p>{comment.body}</p>
								</Card>
							))
					: "Empty!"}
			</Modal.Body>
			<Modal.Footer>
				<Button variant="primary" onClick={handleClose}>
					Back
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default CommentsPost;
