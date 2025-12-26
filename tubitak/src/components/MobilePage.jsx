import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

function MobilePage() {
  return (
    <Container className="mt-5 mb-5">
      <h1 className="text-center mb-4 display-5 fw-bold">Mobil Erken Uyarı Sistemi</h1>
      <p className="lead text-center mb-5">
        React Native tabanlı, çapraz platform destekli ve gerçek zamanlı uyarı mekanizması.
      </p>

      <Row>
        <Col md={5}>
            <Card className="mb-4">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop" />
                <Card.Body>
                    <Card.Title className="fw-bold">Teknoloji Yığını</Card.Title>
                    <Card.Text>
                        Mobil uygulamanın geliştirilmesinde <strong>React Native</strong> tercih edilmiştir. 
                        Bu sayede tek bir kod tabanı ile hem <strong>iOS</strong> hem de <strong>Android</strong> cihazlarda 
                        çalışan sürdürülebilir bir çözüm sunulmaktadır[cite: 114].
                    </Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>⚛️ React Native Framework</ListGroup.Item>
                        <ListGroup.Item>📡 WebSocket API (Gerçek Zamanlı)</ListGroup.Item>
                        <ListGroup.Item>🔔 Push Notification Servisi</ListGroup.Item>
                        <ListGroup.Item>📊 Base64 Grafik Çizimi</ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Col>

        <Col md={7}>
            <h3 className="mb-3">İletişim Altyapısı ve Özellikler</h3>
            
            <Accordion defaultActiveKey="0" className="mb-4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Gerçek Zamanlı Haberleşme (WebSocket)</Accordion.Header>
                    <Accordion.Body>
                        Mobil uygulama ile yapay zeka modeli arasındaki entegrasyon <strong>WebSocket</strong> protokolü üzerinden sağlanır. 
                        Sürekli istek göndermek (polling) yerine, model bir risk tespit ettiğinde "Push" yöntemiyle uyarıyı doğrudan uygulamaya iter. 
                        Bu sayede ağ gecikmesi minimize edilir[cite: 459, 460].
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Ağ Kesintisi Yönetimi (NetInfo)</Accordion.Header>
                    <Accordion.Body>
                        Mutfak gibi kritik ortamlarda bağlantı kopması riskine karşı projeye <strong>NetInfo</strong> kütüphanesi dahil edilmiştir. 
                        Bağlantı kesildiğinde sistem otomatik olarak yeniden abone olur (re-subscribe) ve veri akışını güvence altına alır[cite: 419, 420].
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Veri Görselleştirme</Accordion.Header>
                    <Accordion.Body>
                        Ağ geçidinden gelen veriler hız optimizasyonu için <strong>Base64 formatında</strong> iletilir. 
                        Uygulama tarafında bu veriler çözümlenerek (decode) kullanıcıya anlık grafikler ve risk raporları olarak sunulur[cite: 413, 415].
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Card className="bg-light border-0">
                <Card.Body>
                    <Card.Title>Yazılım Geliştirme Metodolojisi</Card.Title>
                    <Card.Text>
                        Uygulama geliştirme sürecinde <strong>Şelale (Waterfall)</strong> modeli izlenmektedir. 
                        Gereksinim analizi, Sistem Mimarisi, Kodlama ve Test aşamaları sırasıyla uygulanarak 
                        hatasız bir ürün hedeflenmektedir[cite: 360].
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MobilePage;