"use client";

import React, { useState, useRef, useMemo } from 'react'
import { Marker } from 'react-leaflet/Marker';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMapEvents } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

// init starting position(surabaya)
const center = {
  lat: -7.258498950611202,
  lng: 112.73263343599092
}

function Map({onPositionChange}) {
    return (
        <div>
          <MapContainer
              center={center}
              zoom={13}
              scrollWheelZoom={true}
              style={{
                  height: '200px'
              }}
              >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <DraggableMarker onPositionChange={onPositionChange}/> {/**callback */}
          </MapContainer>
        </div>
    )
}


function DraggableMarker({onPositionChange}) {
  const [position, setPosition] = useState(null)
  const markerRef = useRef(null)

  // Handle click events on the map
  useMapEvents({
    click(e) {
      const newPos = e.latlng  // get lat,lng of clicked spot
      setPosition(newPos)      // show marker there
      if (onPositionChange) {
        onPositionChange(newPos)  // send position to parent
      }
    },
  })

  // dragging event
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          const newPos = marker.getLatLng()
          setPosition(newPos)
          if (onPositionChange) {
            onPositionChange(newPos) // basically send marker position to parent 
          }
        }
      },
    }),
    [onPositionChange],
  )

  if (!position) return null

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      />
  )
}

// prevent reinitializing map when its already initialized
export default React.memo(Map);










