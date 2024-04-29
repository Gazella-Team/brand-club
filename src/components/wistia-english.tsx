import React, { useEffect } from 'react';

const EnglishWistiaVideo = () => {
  useEffect(() => {
    // Load Wistia script dynamically
    const wistiaScript = document.createElement('script');
    wistiaScript.src = 'https://fast.wistia.com/assets/external/E-v1.js';
    wistiaScript.async = true;
    document.body.appendChild(wistiaScript);

    return () => {
      // Cleanup function to remove the script when the component is unmounted
      document.body.removeChild(wistiaScript);
    };
  }, []);

  return (
    <div className="wistia_responsive_padding overflow-hidden">
      <div className="wistia_responsive_wrapper sm:h-[200px]" style={{ height: '500px', left: 0, top: 0, width: '100%' }}>
        <div className="wistia_embed wistia_async_fw9o9gi0b9 seo=false videoFoam=true" style={{ height: '100%', width: '100%' }}>
          <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', top: 0, transition: 'opacity 200ms', width: '100%' }}>
            <img src="https://fast.wistia.com/embed/medias/fw9o9gi0b9/swatch" style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnglishWistiaVideo;
