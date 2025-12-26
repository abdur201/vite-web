import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function InfoCards() {
  return (
    <Container className="mt-5 mb-5">
        <h2 className="text-center mb-4">Proje Bileşenlerimiz</h2>
        <Row>
            {/* 1. Kart: Sensör Ağı */}
            <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm hover-effect">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=500&auto=format&fit=crop" style={{height: '200px', objectFit: 'cover'}} />
                    <Card.Body>
                        <Card.Title>LoRaWAN Sensör Ağı</Card.Title>
                        <Card.Text>
                            LILYGO LoRa32 kartları kullanılarak MQ-7 (CO), MH-Z14 (CO2) ve DHT-22 (Sıcaklık/Nem) verileri toplanır. Enerji verimliliği yüksek, uzun menzilli iletişim sağlar.
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/sensors" >Donanım Detayı</Button>
                    </Card.Body>
                </Card>
            </Col>

            {/* 2. Kart: Yapay Zeka */}
            <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm hover-effect">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop" style={{height: '200px', objectFit: 'cover'}} />
                    <Card.Body>
                        <Card.Title>Yapay Zeka Analizi</Card.Title>
                        <Card.Text>
                            Toplanan veriler Raspberry Pi üzerinde <strong>Isolation Forest</strong> algoritması ile işlenir. Anomali tespiti ve SHAP yöntemi ile risk analizi yapılır.
                        </Card.Text>
                        <Button variant="success" as={Link} to="/ai" >Algoritma İncele</Button>
                    </Card.Body>
                </Card>
            </Col>

            {/* 3. Kart: Mobil Uygulama */}
            <Col md={4} className="mb-4">
                <Card className="h-100 shadow-sm hover-effect">
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop" style={{height: '200px', objectFit: 'cover'}} />
                    <Card.Body>
                        <Card.Title>Mobil Erken Uyarı</Card.Title>
                        <Card.Text>
                            React Native ile geliştirilen mobil uygulama sayesinde çalışanlar anlık bildirim alır. Yangın ve zehirlenme risklerine karşı saniyeler içinde uyarı verilir.
                        </Card.Text>
                        <Button variant="warning" as={Link} to="/mobile">Uygulama Özellikleri</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default InfoCards;