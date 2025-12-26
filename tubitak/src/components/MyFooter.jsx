import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function MyFooter() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container>
        <Row>
          <Col md={6}>
            <h5>TÜBİTAK 2209-A</h5>
            <p>
              Tübitak projemiz ile geleceğin teknolojilerini bugünden tasarlıyoruz.
              Bize katılın, keşfedin!
            </p>
          </Col>
          <Col md={3} className="d-none">
            <h5>Hızlı Linkler</h5>
            <ul className="list-unstyled">
              <li><a href="#home" as={Link} to="/" className="text-light text-decoration-none">Ana Sayfa</a></li>
              <li><a href="#about" as={Link} to="/" className="text-light text-decoration-none">Hakkımızda</a></li>
              <li><a href="#projects" as={Link} to="/" className="text-light text-decoration-none">Projeler</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>İletişim</h5>
            <p>📍 Okul Adresi, Sakarya<br/>
               📧 info@tubitakproje.com<br/>
               📞 0212 123 45 67</p>
          </Col>
        </Row>
        <hr />
        <div className="text-center">
          <p className="mb-0">&copy; 2024 Tüm Hakları Saklıdır.</p>
        </div>
      </Container>
    </footer>
  );
}

export default MyFooter;