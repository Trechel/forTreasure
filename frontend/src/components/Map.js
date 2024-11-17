// Map.js
import { Feature, Map as OLMap, View } from 'ol';
import { Point } from 'ol/geom';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import 'ol/ol.css';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorSource } from 'ol/source';
import OSM from 'ol/source/OSM';
import { Icon, Style } from 'ol/style';
import React, { useEffect, useRef, useState } from 'react';
import './Map.css';

// Mock data
const mockOrders = [
  {
    id: 1,
    user: {
      name: "John Doe",
      profilePic: "https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
    },
    description: "Ride request to downtown",
    details: "Pickup at 123 Main St.",
    location: [-0.09, 51.505],
  },
  {
    id: 2,
    user: {
      name: "Jane Smith",
      profilePic: "https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small_2x/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg",
    },
    description: "Ride request to the airport",
    details: "Pickup at 456 Elm St.",
    location: [-0.1, 51.51],
  },
];

export function Map({ orders = mockOrders, onOrderResponse }) {
  const mapRef = useRef();
  const [popupContent, setPopupContent] = useState(null);

  useEffect(() => {
    // Initialize the OpenLayers map
    const map = new OLMap({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([-0.09, 51.505]), // Center the map on London
        zoom: 13,
      }),
    });

    const vectorSource = new VectorSource();

    // Adding markers for each order
    orders.forEach((order) => {
      const { location, user = {} } = order;
      const { profilePic = "https://via.placeholder.com/40" } = user;

      if (!location) {
        console.warn(`Order ${order.id} is missing a location`);
        return; // Skip orders without a location
      }

      const marker = new Feature({
        geometry: new Point(fromLonLat(location)),
      });

      marker.setStyle(
        new Style({
          image: new Icon({
            src: profilePic, // Use the user's profile picture
            scale: 0.1, // Adjust scale to make it visible
          }),
        })
      );

      // Add marker to the vector source
      vectorSource.addFeature(marker);

      // Click event for marker
      marker.on('click', () => {
        const acceptButton = document.createElement('button');
        acceptButton.innerText = 'Accept';
        acceptButton.onclick = () => onOrderResponse && onOrderResponse(order, 'accept');

        const declineButton = document.createElement('button');
        declineButton.innerText = 'Decline';
        declineButton.onclick = () => onOrderResponse && onOrderResponse(order, 'decline');

        const content = (
          <div>
            <img src={profilePic} alt={`${user.name || 'Unknown User'}'s profile`} style={{ borderRadius: '50%', width: '40px', height: '40px' }} />
            <h4>{user.name || 'Unknown User'}</h4>
            <p>{order.description}</p>
            <p>{order.details}</p>
            {acceptButton}
            {declineButton}
          </div>
        );

        // Show popup
        setPopupContent({ content, coordinates: map.getEventPixel(marker.getGeometry().getCoordinates()) });
      });
    });

    // Add vector layer to map
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);

    return () => {
      map.setTarget(undefined);
    };
  }, [orders, onOrderResponse]);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
      {popupContent && (
        <div
          className="map-popup"
          style={{
            position: 'absolute',
            left: `${popupContent.coordinates[0]}px`,
            top: `${popupContent.coordinates[1]}px`,
            zIndex: 1000,
            backgroundColor: 'white',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          {popupContent.content}
        </div>
      )}
    </div>
  );
}
