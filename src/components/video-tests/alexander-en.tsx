import React, { useEffect } from 'react';

const AlexanderEn = () => {
  useEffect(() => {
    const loadScript = (src:any) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript('https://fast.wistia.com/embed/medias/l8su8mryho.jsonp');
    loadScript('https://fast.wistia.com/assets/external/E-v1.js');

    return () => {
      // Optional cleanup
    };
  }, []);

  return (
    <div className="wistia_responsive_padding" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
      <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
        <div className="wistia_embed wistia_async_l8su8mryho seo=false videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
          <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
            <img
              src="https://fast.wistia.com/embed/medias/l8su8mryho/swatch"
              style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlexanderEn;
