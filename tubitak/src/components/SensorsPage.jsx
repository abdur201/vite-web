import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

function SensorsPage() {
  return (
    <Container className="mt-5 mb-5">
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <h1 className="display-5 fw-bold">LoRaWAN ve Sensör Katmanı</h1>
        <p className="col-md-8 fs-4">
            Projemiz, çevresel verilerin güvenli, kesintisiz ve gerçek zamanlı toplanması için 
            düşük güç tüketimli uzun menzilli geniş alan ağı (LoRaWAN) mimarisini kullanmaktadır.
        </p>
      </div>

      <Row>
        {/* SOL SÜTUN: DONANIMLAR */}
        <Col lg={8}>
            <Card className="mb-4 shadow-sm">
                <Card.Header as="h4" className="bg-primary text-white">Sensör Düğümü Mimarisi</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Sistemin uç noktasında yer alan sensör katmanı, üç temel bileşenden oluşan sensör düğümlerini içerir. 
                        Tüm veriler <strong>LILYGO LoRa32 (TTGO LoRa32)</strong> geliştirme kartı aracılığıyla toplanır. 
                        Bu kart, ESP32 mikrodenetleyici ile SX1276 LoRa modülünü tek donanımda birleştirerek enerji verimliliği sağlar.
                    </Card.Text>
                    
                    <h5 className="mt-4">Kullanılan Sensör Teknolojileri:</h5>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <strong>1. MH-Z14 (CO2 Sensörü):</strong> Ortamdaki karbondioksit yoğunluğunu yüksek hassasiyetle ölçer. 
                            Analog hat gürültüsünü engellemek için <em>dijital UART çıkışı</em> kullanılır.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>2. MQ-7 (CO Sensörü):</strong> Karbonmonoksit gazını analog olarak tespit eder. 
                            Zehirlenme riskine karşı anlık değişimleri mikrodenetleyiciye iletir.
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <strong>3. DHT-22 (Sıcaklık ve Nem):</strong> Ortamın termal konforunu ve yangın riskini dolaylı 
                            olarak izlemek için sıcaklık ve nem verilerini dijital formatta iletir.
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>

            <Card className="mb-4 shadow-sm">
                <Card.Header as="h4" className="bg-dark text-white">Ağ Geçidi (Gateway) ve İletişim</Card.Header>
                <Card.Body>
                    <Card.Text>
                        Verilerin toplanma merkezi olarak <strong>Seeed Studio WM1302 Long Range Gateway Module</strong> kullanılmaktadır. 
                        Bu modül, Raspberry Pi 5 işlem birimi ile entegre edilerek hem veri iletim köprüsü hem de yerel ağ yöneticisi 
                        görevini üstlenir.
                    </Card.Text>
                    <ul>
                        <li><strong>Frekans:</strong> 868 MHz bandında çalışır (Lisanssız frekans).</li>
                        <li><strong>Protokol:</strong> Sensörlerden gelen veriler <strong>MQTT-SN</strong> protokolü ile iletilir.</li>
                        <li><strong>Sunucu:</strong> Raspberry Pi üzerinde <em>ChirpStack</em> tabanlı ağ sunucusu yapılandırılmıştır.</li>
                    </ul>
                </Card.Body>
            </Card>
        </Col>

        {/* SAĞ SÜTUN: GÜVENLİK VE AVANTAJLAR */}
        <Col lg={4}>
            <Card className="mb-4 border-success">
                <Card.Header className="bg-success text-white">Güvenlik Protokolleri</Card.Header>
                <Card.Body>
                    <Card.Title>Uçtan Uca Şifreleme</Card.Title>
                    <Card.Text>
                        Sistem güvenliği için LoRaWAN'ın sağladığı <strong>AES-128 bit şifreleme</strong> yöntemi kullanılmaktadır. 
                        Ayrıca ağ erişimleri TLS protokolleri ile korunarak veri bütünlüğü garanti altına alınır.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card className="mb-4">
                <Card.Header>Neden LoRaWAN?</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>⚡ Düşük Güç Tüketimi</ListGroup.Item>
                    <ListGroup.Item>📡 Geniş Kapsama Alanı</ListGroup.Item>
                    <ListGroup.Item>🧱 Engellerden Sinyal Geçişi</ListGroup.Item>
                    <ListGroup.Item>💰 Düşük İletişim Maliyeti</ListGroup.Item>
                </ListGroup>
                <Card.Footer className="text-muted">
                    Kaynak: Proje Dokümanı
                </Card.Footer>
            </Card>

            <div className="d-grid gap-2">
                 <Badge bg="info" className="p-3">Veri Frekansı: Dakikada 2 Gözlem</Badge>
                 <Badge bg="warning" text="dark" className="p-3">Anten Gücü: 5 dBi</Badge>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SensorsPage;