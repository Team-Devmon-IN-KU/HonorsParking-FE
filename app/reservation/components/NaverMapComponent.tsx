"use client";

import { useEffect } from "react";
import ReservationDetailComponents from "./ReservationDetailComponent";
import Image from "next/image";

export default function NaverMapComponent() {
  useEffect(() => {
    const initMap = () => {
      const mapOptions = {
        center: new naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 16,
      };

      new naver.maps.Map("map", mapOptions);
    };

    if (window.naver && window.naver.maps) {
      initMap();
    } else {
      const mapScript = document.createElement("script");
      mapScript.onload = () => initMap();
      mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`;
      document.head.appendChild(mapScript);
    }
  }, []);

  return (
    <div className="relative">
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>
      <div className="fixed bottom-0 w-full bg-white rounded-t-[1.25rem] pb-4">
        <div className="w-full flex items-center justify-center p-2">
          <Image src="/src/icon/Grabber.svg" alt="" width={36} height={24}/>
        </div>
        <ReservationDetailComponents />
      </div>
    </div>
  );
}
