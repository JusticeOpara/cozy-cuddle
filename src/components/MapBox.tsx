"use client";
import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

const MapBox = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });
      const { Map } = await loader.importLibrary("maps");
      const { Marker } = await loader.importLibrary( "marker" ) as google.maps.MarkerLibrary;

      const position = {
        lat: 4.9051595,
        lng: 7.0387645,
      };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "MY_NEXTJS_MAPID",
      };
      //SETUPS MAP
      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        map: map,
        position: position,
      });
    };

    initMap();
  });

  return (
    <div style={{ height: "100%",width:"100%", }} ref={mapRef}/>
    
  );
};

export default MapBox;

