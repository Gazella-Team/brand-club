import React, { useEffect } from 'react';

const WistiaEmbed = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/embed/medias/15eofsmyfs.jsonp";
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
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
      <div className="wistia_responsive_wrapper w-[400px] sm:h-[600px] sm:w-[600px]" style={{left: 0, top: 0}}>
        <div className="wistia_embed wistia_async_15eofsmyfs seo=false videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>&nbsp;</div>
      </div>
    </div>
  );
};

export default WistiaEmbed;
