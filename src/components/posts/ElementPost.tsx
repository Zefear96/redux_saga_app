import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Post } from "../../utils/types";
import { useNavigate } from "react-router-dom";

const ElementPost = ({ post }: { post: Post }) => {
	const navigate = useNavigate();

	return (
		<Card className="text-center my-3">
			<Card.Header className=" row-cols-1 ">
				<img
					src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
					alt="avatar"
					className=" w-10 h-10 object-contain cursor-pointer"
					onClick={() => navigate(`/users/${post.id}`)}
				/>
				<span className="row-cols-1"> created by: {post.userId}</span>
			</Card.Header>
			<Card.Body className="d-flex flex-column h-100">
				<Card.Title className="h-14">{post.title}</Card.Title>
				<Card.Text className=" h-20">
					{post.body.substring(0, 100) + "..."}
				</Card.Text>
				<Button variant="primary" className="mt-auto">
					See more
				</Button>
			</Card.Body>
			<Card.Footer className="text-muted">Comments</Card.Footer>
		</Card>
	);
};

export default ElementPost;
