import React, { useEffect, useRef, useState } from 'react';
import '../CSS/FooterMarquee.css';

function FooterMarquee() {
  const marqueeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const text = 'Et pääse tämän pidemmälle :( ';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current);
    }

    return () => {
      if (marqueeRef.current) {
        observer.unobserve(marqueeRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={marqueeRef}
      className={`footer-marquee ${isVisible ? 'visible' : ''}`}
    >
      <div className="marquee-track">
        <span>{text.repeat(20)}</span>
        <span>{text.repeat(20)}</span>
      </div>
    </div>
  );
}

export default FooterMarquee;
