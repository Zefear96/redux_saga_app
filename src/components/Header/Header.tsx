import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { FormEvent, useEffect, useState } from "react";
import { fetchPostsRequest } from "../../redux/reducers/postsSlice";
import { setSearchQuery } from "../../redux/reducers/postsSlice";

const Header = () => {
	const searchQuery = useAppSelector((state) => state.posts.searchQuery);
	const dispatch = useAppDispatch();
	const [searchValue, setSearchValue] = useState<string>("");

	const handleSearch = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		dispatch(setSearchQuery(searchValue.toLowerCase()));
	};

	const handleResetSearch = () => {
		setSearchValue(""); // Очистка значения инпута
		dispatch(setSearchQuery("")); // Сброс параметра поиска
		dispatch(fetchPostsRequest({ search: "", filter: "" })); // Выполнение запроса без параметра поиска
	};

	return (
		<Navbar bg="primary" variant="dark" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						<Nav.Link href="#action1">Posts List</Nav.Link>
						<Nav.Link href="#action2">About Me</Nav.Link>
					</Nav>
					<Form className="d-flex" onSubmit={handleSearch}>
						<Form.Control
							type="search"
							placeholder="Search"
							className="me-2"
							aria-label="Search"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>

						<Button variant="success" type="submit">
							Search
						</Button>
					</Form>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
