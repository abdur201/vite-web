import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'; // <-- Bunu ekledik

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        {/* as={Link} to="..." kullanarak sayfa yenilenmesini engelliyoruz */}
        <Navbar.Brand as={Link} to="/">TÜBİTAK-2209</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Ana Sayfa</Nav.Link>
            <Nav.Link as={Link} to="/about">Hakkımızda</Nav.Link>
            <NavDropdown title="Teknik Detaylar" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/sensors">Sensör Ağı (LoRaWAN)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ai">Yapay Zeka (AI)</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/mobile">Mobil Uygulama</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;