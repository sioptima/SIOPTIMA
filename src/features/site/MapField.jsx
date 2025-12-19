'use client'

import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
});

export function MapField({ lat, lng, onChange }) {
    const handlePositionChange = (pos) => {
      onChange({
        latitude: pos.lat,
        longitude: pos.lng,
      })
    }
    return (
      <div className='space-y-6'>
        <div>
          <label className='text-sm font-medium text-gray-900'>Pinpoint</label>
          <Map onPositionChange={handlePositionChange} center={{lat, lng}}/>
        </div>
      </div>
    )
  }
  