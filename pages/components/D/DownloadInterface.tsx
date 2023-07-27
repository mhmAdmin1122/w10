import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import CertificateDetailsPic from '../C/CertificateDetailsPic';

const DownloadInterface = () => {
  const interfaceRef = useRef<any>(null);

  const handleDownloadClick = async () => {
    try {
      const canvas = await html2canvas(interfaceRef?.current);
      canvas.toBlob(function (blob:any) {
        saveAs(blob, 'interface.png');
      });
    } catch (error) {
      console.error('Error capturing interface:', error);
    }
  };

  return (
    <div>
      <div ref={interfaceRef} className='border-2 border-gray-600 p-6'>
        <CertificateDetailsPic />
      </div>
      <button onClick={handleDownloadClick}>Download Interface as Image</button>
    </div>
  );
};

export default DownloadInterface;
