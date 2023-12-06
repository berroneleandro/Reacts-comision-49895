import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import './NavBar.css'



function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" className='navbar'>
        <Container className='contenedor' >
        
          <Navbar.Brand to="/"><Logo/></Navbar.Brand>
          <Navbar.Brand to="/">Tienda de Guitarras</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='pestaña'>Home</Link>
            <Link to="/category/guitarras" className='pestaña'>Guitarras</Link>
            <Link to="/category/amplificadores" className='pestaña'>Amplificadores</Link>
            <Link to="/category/accesorios" className='pestaña'>Accesorios</Link>
            
          </Nav>
          <Link to="/cart" className='cart'><CartWidget/></Link>
        </Container>
      </Navbar>
      </>
  );
}
export default NavBar;