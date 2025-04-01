
"use client"
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Box, Heading, Text } from "@chakra-ui/react";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -8.567670,
  lng: 115.099548
};

const location = {
  lat: -8.567670,
  lng: 115.099548
};

const mapStyles = [
  {
    "featureType": "all",
    "elementType": "all",
    "stylers": [
      {
        "saturation": -80
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "hue": "#00ffee"
      },
      {
        "saturation": 50
      }
    ]
  },
  {
    "featureType": "poi.business",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "on"
      }
    ]
  }
];

function Map() {
  return (
    <>
      <LoadScript googleMapsApiKey="AIzaSyCAqdwRPpTtDGc6lWZKlSO0EPgkAKRo-8o">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Heading as="h1" fontSize={{ base: "sm", lg: "lg" }} fontWeight="bold" lineHeight={{ base: "7", lg: "9" }}>
            Lokasi Salon Kami
          </Heading>
          <Text fontSize={{ base: "xs", lg: "md" }} mb={{ base: 4, lg: 8 }} px={{ base: 1, lg: 0 }} textAlign="center" maxW="xl">
          Salon kami mudah dijangkau di lokasi strategis Tabanan, menawarkan suasana nyaman untuk perawatan rambut dan kecantikan profesional.
          </Text>
          <Box data-aos="zoom-in" data-aos-anchor-placement="top-bottom" width="100%" maxWidth="full" px={{ base: 0, lg: 11 }}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={18}
              options={{ styles: mapStyles }}
            >
              <Marker position={location} />
            </GoogleMap>
          </Box>
        </Box>
      </LoadScript>
    </>
  );
}



export default React.memo(Map);
