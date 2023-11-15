import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../logo/logo';




function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">Tienda de Guitarras</Navbar.Brand>
          <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Guitarras</Nav.Link>
            <Nav.Link href="#pricing">Amplificadores</Nav.Link>
            <Nav.Link href="#pricing">Accesorios</Nav.Link>
            <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}
export default NavBar;