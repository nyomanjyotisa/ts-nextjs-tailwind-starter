import Link from 'next/link';
import * as React from 'react';
import Iframe from 'react-iframe'

export default function HomePage() {
  return (
    <>
      <Iframe url="https://chisfis-nextjs.vercel.app/"
            position="absolute"
            width="100%"
            height="100%"/>
      
      <Link href="https://wa.me/6285161830939?text=Hi,%20Saya%20ingin%20membuat%20website" id="themeWhatsApp" target="_blank"  aria-label="Hubungi kami melalui WhatsApp">
        <span className='fz-18 fw-600 m-3'>Pilih tema ini</span>
      </Link>
    </>
  );
}