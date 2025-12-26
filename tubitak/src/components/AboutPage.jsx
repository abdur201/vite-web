import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function AboutPage() {
  return (
    <Container className="mt-5 mb-5">
      {/* ÜST KISIM: VİZYON */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Hakkımızda</h1>
        <p className="lead text-muted">
          Teknolojiyi güvenlikle buluşturuyoruz.
        </p>
        <p className="w-75 mx-auto">
          Biz, Sakarya Üniversitesi Bilgisayar ve Bilişim Bilimleri Fakültesi öğrencileri olarak; 
          restoran ve otel mutfaklarında yaşanan güvenlik sorunlarına modern IoT ve Yapay Zeka 
          çözümleri getirmek amacıyla bir araya geldik. TÜBİTAK 2209-A programı kapsamında 
          geliştirdiğimiz bu proje ile iş sağlığı ve güvenliği standartlarını yükseltmeyi hedefliyoruz.
        </p>
      </div>

      <hr className="my-5" />

      {/* DANIŞMAN HOCA */}
      <h3 className="text-center mb-4">Akademik Danışmanımız</h3>
      <Row className="justify-content-center mb-5">
        <Col md={4}>
          <Card className="text-center shadow-sm border-0 h-100">
            <Card.Body>
              <div className="mb-3">
                 {/* Profil resmi yerine baş harflerden oluşan avatar koydum */}
                <Image 
                  src="https://ui-avatars.com/api/?name=Ismail+Butun&background=0D6EFD&color=fff&size=128" 
                  roundedCircle 
                  thumbnail 
                />
              </div>
              <Card.Title>Doç. Dr. İsmail BÜTÜN</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Proje Danışmanı</Card.Subtitle>
              <Card.Text>
                Sakarya Üniversitesi<br/>
                CyberSense Laboratory Kurucusu.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* PROJE EKİBİ */}
      <h3 className="text-center mb-4">Proje Ekibimiz</h3>
      <Row xs={1} md={2} lg={4} className="g-4">
        {/* 1. Üye */}
        <Col>
          <Card className="text-center h-100 shadow-sm border-0 hover-effect">
            <Card.Body>
              <Image src="https://ui-avatars.com/api/?name=Kerem+Berk&background=random&size=100" roundedCircle className="mb-3" />
              <Card.Title style={{fontSize: '1.1rem'}}>Kerem Berk ŞENOL</Card.Title>
              <Card.Text className="small text-muted">Proje Yürütücüsü</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* 2. Üye */}
        <Col>
          <Card className="text-center h-100 shadow-sm border-0 hover-effect">
            <Card.Body>
              <Image src="https://ui-avatars.com/api/?name=Ali+Samet&background=random&size=100" roundedCircle className="mb-3" />
              <Card.Title style={{fontSize: '1.1rem'}}>Ali Samet ARMAĞAN</Card.Title>
              <Card.Text className="small text-muted">Araştırmacı</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* 3. Üye */}
        <Col>
          <Card className="text-center h-100 shadow-sm border-0 hover-effect">
            <Card.Body>
              <Image src="https://ui-avatars.com/api/?name=Abdurrahman+Akcit&background=random&size=100" roundedCircle className="mb-3" />
              <Card.Title style={{fontSize: '1.1rem'}}>Abdurrahman AKÇİT</Card.Title>
              <Card.Text className="small text-muted">Araştırmacı</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* 4. Üye */}
        <Col>
          <Card className="text-center h-100 shadow-sm border-0 hover-effect">
            <Card.Body>
              <Image src="https://ui-avatars.com/api/?name=Betul+Gumus&background=random&size=100" roundedCircle className="mb-3" />
              <Card.Title style={{fontSize: '1.1rem'}}>Betül GÜMÜŞ</Card.Title>
              <Card.Text className="small text-muted">Araştırmacı</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <hr className="my-5" />

      {/* LABORATUVAR BİLGİSİ */}
      <Row className="align-items-center bg-light p-4 rounded">
        <Col md={8}>
          <h4>CyberSense Laboratory</h4>
          <p>
            Projemizin veri toplama ve test süreçleri, Sakarya Üniversitesi bünyesindeki 
            <strong> Yenilikçi Siber Güvenlik ve Sensör Teknolojileri Laboratuvarı (CyberSense)</strong> 
            imkanları kullanılarak gerçekleştirilmektedir.
          </p>
        </Col>
        <Col md={4} className="text-center">
            {/* Üniversite logosu temsili */}
            <h1 style={{fontSize: '4rem'}}>🏫</h1>
        </Col>
      </Row>

    </Container>
  );
}

export default AboutPage;