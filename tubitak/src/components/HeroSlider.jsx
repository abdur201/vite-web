import Carousel from 'react-bootstrap/Carousel';
import kitchenResmi from '../img/kitchen.jpg'; // Klasörden bir adım geri çıkıp img'ye girdik
function HeroSlider() {
  
  // Transparan kutu ayarları (Buzlu cam efekti)
  const captionStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    backdropFilter: 'blur(5px)',
    padding: '20px',
    borderRadius: '15px',
    display: 'inline-block',
    maxWidth: '80%',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
  };

  return (
    <Carousel>
      {/* 1. SLIDE: PROFESYONEL MUTFAK */}
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          // YENİ RESİM: Profesyonel Otel/Restoran Mutfağı (Paslanmaz Çelik)
          src={kitchenResmi} 
           alt="Mutfak" 
          
          
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <div style={captionStyle}>
            <h3>Profesyonel Mutfak Güvenliği</h3>
            <p>Mutfaklarınızda yapay zeka Destekli; CO, CO2 ve sıcaklık takibi ile riskleri önleyin.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      
      {/* 2. SLIDE: TEKNOLOJİ & SENSÖR */}
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop"
          alt="IoT Teknoloji"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <div style={captionStyle}>
            <h3>LoRaWAN Teknolojisi</h3>
            <p>Uzun menzilli sensör ağı ile kablosuz ve kesintisiz veri aktarımı.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* 3. SLIDE: YAPAY ZEKA */}
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop"
          alt="Yapay Zeka"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <div style={captionStyle}>
            <h3>Yapay Zeka Destekli Erken Uyarı</h3>
            <p>Isolation Forest algoritması ile riskleri oluşmadan tespit ediyoruz.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSlider;