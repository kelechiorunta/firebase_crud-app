import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import HelpModal from './HelpModal';

const InfoPortal = () => {
  const [portalElement, setPortalElement] = useState(null);

  useEffect(() => {
    const element = document.getElementById('portal');
    if (!element) {
      console.error("The portal element with id 'portal' was not found in the DOM.");
    }
    setPortalElement(element);
  }, []);

  if (!portalElement) {
    return null;
  }

  return createPortal(<HelpModal/>, portalElement);
};

export default InfoPortal;
