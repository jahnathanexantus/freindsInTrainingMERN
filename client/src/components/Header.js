import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Auth from '../utils/auth';

function Header() {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
		window.location.reload()
	  };


	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand href="#">F.I.T</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbarScroll" />
				<Navbar.Collapse id="navbarScroll">
					<Nav
						className="me-auto my-2 my-lg-0"
						style={{ maxHeight: "100px" }}
						navbarScroll
					>
						{Auth.loggedIn() ? (<Nav.Link onClick={logout}>logout</Nav.Link>) : (<Nav.Link href="/">logout</Nav.Link>)}
						{console.log(Auth.loggedIn())}
						

						
						
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
