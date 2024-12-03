import { Container, Navbar , Nav } from "react-bootstrap";

function MainNavbar() {
    return ( 
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Shop On</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="shop">Shop</Nav.Link>
                    <Nav.Link href="aboutus">AboutUs</Nav.Link>
                </Nav>
        </Navbar.Collapse>
            </Container>
        </Navbar>
     );
}

export default MainNavbar;