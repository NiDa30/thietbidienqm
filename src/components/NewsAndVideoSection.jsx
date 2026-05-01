import React from 'react';
import { FaAngleRight, FaPlayCircle } from 'react-icons/fa';
import './NewsAndVideoSection.css';

const NewsAndVideoSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "ĐÈN LED DOWNLIGHT ÂM TRẦN - GIẢI PHÁP CHIẾU SÁNG HIỆN ĐẠI",
      desc: "Tìm hiểu về các dòng đèn âm trần mới nhất giúp tối ưu không gian sống...",
      image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&auto=format"
    },
    {
      id: 2,
      title: "ĐẠI LÝ PHÂN PHỐI ĐÈN LED TLC CHÍNH HÃNG TẠI TP.HCM",
      desc: "QM Lighting tự hào là đối tác chiến lược của TLC Lighting...",
      image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=400&auto=format"
    }
  ];

  const videoItems = [
    {
      id: 1,
      title: "ĐÈN LED MPE CHUẨN CHÂU ÂU",
      image: "https://images.unsplash.com/photo-1558211583-d28f91036886?w=600&auto=format"
    },
    {
      id: 2,
      title: "CÔNG NGHỆ SMART LIGHTING 2026",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format"
    }
  ];

  return (
    <section className="news-video-section">
      <div className="container">
        <div className="news-video-inner">
          {/* News Column */}
          <div className="nv-column">
            <div className="nv-header">
              <h3 className="nv-title">Tin tức nổi bật</h3>
              <a href="/blog" className="nv-link">XEM TẤT CẢ <FaAngleRight /></a>
            </div>
            
            <div className="news-featured">
              <div className="news-card featured">
                <div className="news-image-wrapper">
                  <img src={newsItems[0].image} alt="Featured News" className="news-image" />
                  <span className="news-tag">Kiến thức</span>
                </div>
                <div className="news-content">
                  <h4 className="news-headline">{newsItems[0].title}</h4>
                  <p className="news-excerpt">{newsItems[0].desc}</p>
                </div>
              </div>
            </div>

            <div className="news-grid-small">
              <div className="news-card-small">
                <div className="small-image-wrapper">
                  <img src={newsItems[1].image} alt="News 1" />
                </div>
                <div className="small-content">
                  <h5 className="news-item-title">{newsItems[1].title}</h5>
                  <span className="news-date">01/05/2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Video Column */}
          <div className="nv-column">
             <div className="nv-header">
              <h3 className="nv-title">Video trải nghiệm</h3>
              <a href="#" className="nv-link">XEM TẤT CẢ <FaAngleRight /></a>
            </div>
            
            <div className="video-featured">
               <div className="video-image-wrapper">
                  <img src={videoItems[0].image} alt="Featured Video" className="video-image" />
                  <div className="play-overlay">
                    <FaPlayCircle className="play-icon" />
                  </div>
               </div>
               <div className="video-content">
                 <h4 className="video-headline">{videoItems[0].title}</h4>
                 <p className="video-desc">Khám phá quy trình sản xuất và tiêu chuẩn chất lượng nghiêm ngặt.</p>
               </div>
            </div>

            <div className="video-grid-small">
              <div className="video-card-small">
                 <div className="small-image-wrapper">
                    <img src={videoItems[1].image} alt="Video 1" />
                    <FaPlayCircle className="small-play-icon" />
                 </div>
                 <div className="small-content">
                    <h5 className="video-item-title">{videoItems[1].title}</h5>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndVideoSection;

