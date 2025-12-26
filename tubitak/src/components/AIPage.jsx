import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import ProgressBar from 'react-bootstrap/ProgressBar';

function AIPage() {
  return (
    <Container className="mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Yapay Zeka ve Anomali Tespiti</h1>
        <p className="lead text-muted">
            Isolation Forest Algoritması ve SHAP Analizi ile Gerçek Zamanlı Risk Yönetimi
        </p>
      </div>

      {/* VERİ SETİ BİLGİSİ */}
      <Alert variant="primary" className="mb-5">
        <Row className="align-items-center">
            <Col md={8}>
                <h4 className="alert-heading">Özgün Veri Seti</h4>
                <p className="mb-0">
                    Modelimiz, laboratuvar ortamında simüle edilen 90 saatlik ölçüm süreci boyunca 
                    toplanan yaklaşık <strong>130.000 veri noktası</strong> üzerinde eğitilmektedir. 
                    Eğitim verisi %1-5 oranında anomali içerecek şekilde kurgulanmıştır.
                </p>
            </Col>
            <Col md={4} className="text-center">
                <h1>📊 130K+</h1>
                <small>Veri Noktası</small>
            </Col>
        </Row>
      </Alert>

      <Row className="g-4">
        {/* ALGORİTMA DETAYI */}
        <Col md={12}>
            <Card className="h-100 border-0 shadow-lg">
                <Card.Body className="p-5">
                    <h2 className="mb-4">🤖 Isolation Forest Algoritması</h2>
                    <p className="card-text fs-5">
                        Projede denetimsiz öğrenme (Unsupervised Learning) modeli olan <strong>Isolation Forest</strong> kullanılmaktadır. 
                        Bu algoritma, normal veri yoğunluğundan uzak olan aykırı değerleri (anomalileri) izole ederek tespit eder. 
                        Yangın, gaz kaçağı ve biyolojik tehlike gibi nadir görülen riskleri yakalamak için idealdir.
                    </p>
                    <hr />
                    <h5>Model Mimarisi:</h5>
                    <p>
                        Modelin oluşturulması sürecinde, Xiang'in çalışmasında önerildiği üzere 
                        <strong>100 ağaç (estimators)</strong> ve her biri <strong>256 alt örneklemden</strong> oluşan bir yapı kullanılacaktır.
                    </p>
                    <div className="mt-3">
                        <label>Hedeflenen Doğruluk Oranı (Recall & F1-Score)</label>
                        <ProgressBar animated now={95} label="%95+" variant="success" className="mt-1" style={{height: '25px'}} />
                    </div>
                </Card.Body>
            </Card>
        </Col>

        {/* SHAP ANALİZİ */}
        <Col md={6}>
            <Card className="h-100 border-primary">
                <Card.Header className="bg-primary text-white">SHAP ile Açıklanabilirlik</Card.Header>
                <Card.Body>
                    <Card.Title>Hatanın Kaynağı Nedir?</Card.Title>
                    <Card.Text>
                        Sadece alarm vermek yeterli değildir. Projemizde <strong>SHAP (SHapley Additive exPlanations)</strong> yöntemi kullanılarak, 
                        anomaliye en çok katkı sağlayan sensör belirlenir. 
                    </Card.Text>
                    <Card.Text>
                        <em>Örneğin:</em> Sistem uyarı verdiğinde, bunun CO yüksekliğinden mi yoksa ani sıcaklık artışından mı 
                        kaynaklandığını kullanıcıya bildirir.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

        {/* EDGE COMPUTING */}
        <Col md={6}>
            <Card className="h-100 border-warning">
                <Card.Header className="bg-warning text-dark">Uçta İşleme (Edge Computing)</Card.Header>
                <Card.Body>
                    <Card.Title>Yerel Çalışma Prensibi</Card.Title>
                    <Card.Text>
                        Geliştirilen yapay zeka modeli bulutta değil, doğrudan mutfaktaki <strong>Raspberry Pi 5 (Ağ Geçidi)</strong> üzerinde çalışır. 
                        Bu sayede internet kesilse bile sistem çalışmaya devam eder ve tahminler <strong>milisaniyeler içinde</strong> üretilir.
                    </Card.Text>
                    <Card.Text>
                        Veriler yerel ağda kaldığı için veri gizliliği (Data Privacy) %100 korunur.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AIPage;