import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Post } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import CommentsPost from "./CommentsPost";

const ElementPost = ({ post, author }: { post: Post; author: string }) => {
	const navigate = useNavigate();
	const [showComments, setShowComments] = useState(false);

	const handleOpenComments = () => {
		setShowComments(true);
	};

	const handleCloseComments = () => {
		setShowComments(false);
	};

	return (
		<Card className="text-center my-3">
			<Card.Header className="flex items-center ">
				<img
					src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
					alt="avatar"
					className=" w-10 h-10 object-contain cursor-pointer mx-3"
					onClick={() => navigate(`/users/${post.userId}`)}
				/>
				<span className="row-cols-1">created by: {author}</span>
			</Card.Header>
			<Card.Body className="d-flex flex-column h-100">
				<Card.Title className=" my-3">{post.title.toUpperCase()}</Card.Title>
				<Card.Text className="">{post.body}</Card.Text>
			</Card.Body>
			<div className="">
				<Button variant="primary" className="my-3" onClick={handleOpenComments}>
					Comments
				</Button>
				<CommentsPost
					show={showComments}
					handleClose={handleCloseComments}
					id={post.id}
				/>
			</div>
		</Card>
	);
};

export default ElementPost;
