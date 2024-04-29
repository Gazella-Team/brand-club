import React, { useEffect } from 'react';

const EnglishWistiaEmbed = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/embed/medias/fw9o9gi0b9.jsonp';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="wistia_responsive_padding">
      <div className="wistia_responsive_wrapper w-[400px] sm:h-[600px] sm:w-[600px]" style={{ left: 0, top: 0, }}>
        <div className="wistia_embed wistia_async_fw9o9gi0b9 seo=false videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
          <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
            <img src="https://fast.wistia.com/embed/medias/fw9o9gi0b9/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishWistiaEmbed;
