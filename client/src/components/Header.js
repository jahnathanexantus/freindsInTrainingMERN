import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
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
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/login">login</Nav.Link>
						<Nav.Link href="/signup">signup</Nav.Link>
						<Nav.Link href="/logout">logout</Nav.Link>
						<Nav.Link href="/profile">profile</Nav.Link>
						
							
						
					</Nav>
					
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
