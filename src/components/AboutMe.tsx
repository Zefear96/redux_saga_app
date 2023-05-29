import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
	const navigate = useNavigate();

	return (
		<Container className=" text-center">
			<Card className="my-10">
				<Card.Body>
					<Card.Title>About Me</Card.Title>
					<Card.Subtitle className="mb-2 text-muted">
						Frontend Developer
					</Card.Subtitle>
					<Card.Text>
						Меня зовут Замир, я - фронтенд JavaScript разработчик. Меня
						привлекает фронтенд-разработка, потому что это позволяет мне
						использовать свои творческие навыки для создания интерактивных и
						красивых пользовательских интерфейсов.
					</Card.Text>
					<Card.Link onClick={() => navigate(-1)}>return back</Card.Link>
				</Card.Body>
			</Card>
		</Container>
	);
};

export default AboutMe;
