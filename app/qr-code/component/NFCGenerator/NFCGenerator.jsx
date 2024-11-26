'use client'
import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import react-qr-code to avoid SSR issues in Next.js
const QRCode = dynamic(() => import('react-qr-code'), { ssr: false });

const NFCGenerator = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [vCard, setVCard] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');
  const qrCodeRef = useRef(null); // Reference to the QR code container

  // Function to generate the vCard and update QR Code data
  const generateVCard = () => {
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${phone}
EMAIL:${email}
END:VCARD
    `.trim();
    setVCard(vCardData);
    setQrCodeData(vCardData); // Set QR code data
  };

  // Function to download the vCard as a .vcf file
  const downloadVCard = () => {
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${name.replace(/\s+/g, '_')}_contact.vcf`;
    a.click();
  };

  // Function to download the QR code as an image (PNG)
  const downloadQRCode = () => {
    if (!qrCodeRef.current) return;

    // Create a canvas to draw the QR code image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Get the SVG element that contains the QR code
    const svg = qrCodeRef.current.querySelector('svg');

    if (!svg) return;

    // Create an image element from the SVG
    const img = new Image();
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);

    img.onload = () => {
      // Draw the image onto the canvas when it's loaded
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Convert the canvas to a data URL and trigger the download
      const imgURI = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = imgURI;
      a.download = `${name.replace(/\s+/g, '_')}_qr_code.png`;
      a.click();
    };

    img.src = url;
  };

  return (
    <div className="mx-auto p-6 container">
      <h1 className="mb-4 font-bold text-2xl">NFC vCard & QR Code Generator</h1>
      <div className="space-y-4">
        <div>
          <label className="block font-medium text-sm">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-3 py-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block font-medium text-sm">Phone</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="px-3 py-2 border rounded w-full"
          />
        </div>
        <div>
          <label className="block font-medium text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 border rounded w-full"
          />
        </div>
        <button
          onClick={generateVCard}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Generate vCard & QR Code
        </button>

        {vCard && (
          <div className="mt-4">
            <textarea
              readOnly
              value={vCard}
              className="px-3 py-2 border rounded w-full"
              rows="6"
            />
            <button
              onClick={downloadVCard}
              className="bg-green-500 mt-2 px-4 py-2 rounded text-white"
            >
              Download vCard
            </button>
          </div>
        )}

        {qrCodeData && (
          <div className="mt-6">
            <h3 className="mb-2 font-bold text-xl">QR Code for vCard:</h3>
            <div ref={qrCodeRef}>
              <QRCode value={qrCodeData} size={256} />
            </div>
            <button
              onClick={downloadQRCode}
              className="bg-yellow-500 mt-2 px-4 py-2 rounded text-white"
            >
              Download QR Code
            </button>
            <p className="mt-2 text-sm">Scan this QR code to add the contact directly to your phone.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFCGenerator;
