import { useEffect } from 'react';

// Declare GTM dataLayer type
declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const useGoogleTagManager = (gtmId: string) => {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Add GTM script to head
    const script = document.createElement('script');
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`;
    document.head.appendChild(script);

    // Add GTM noscript to body
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.appendChild(iframe);
    document.body.insertBefore(noscript, document.body.firstChild);

    // Cleanup function
    return () => {
      // Remove script and noscript on unmount (optional)
      script.remove();
      noscript.remove();
    };
  }, [gtmId]);
};

// Helper function to track custom events
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData,
    });
  }
};

// Helper function specifically for phone call tracking
export const trackPhoneCall = (location: string) => {
  trackEvent('phone_call_click', {
    phone_number: '484-268-3078',
    click_location: location,
  });
};
