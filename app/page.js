"use client";
import localFont from 'next/font/local';
import { useEffect, useState } from "react";
import { UAParser } from "ua-parser-js";
import Desktop from './MainPage/Versions/desktop';
import Mobile from './MainPage/Versions/mobile';
// const myFont = localFont({ src: '../public/HalvarBreit-Lt.woff2' });

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const parser = new UAParser();
    const userAgent = window.navigator.userAgent;
    const result = parser.setUA(userAgent).getResult();
    const isMobileDevice = /mobile/i.test(result.device.type);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <>
      <div>
          {/*{isMobile ? <Mobile /> : <Desktop />}*/}
          <Desktop />
      </div>
    </>
  );  
}