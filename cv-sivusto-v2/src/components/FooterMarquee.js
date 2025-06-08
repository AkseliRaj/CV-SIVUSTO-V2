import React from 'react';
import '../CSS/FooterMarquee.css';

function FooterMarquee() {
  const text = 'Et pääse tämän pidemmälle :( ';
  return (
    <div className="footer-marquee">
      <div className="marquee-track">
        <span>{text.repeat(20)}</span>
        <span>{text.repeat(20)}</span>
      </div>
    </div>
  );
}

export default FooterMarquee;
