"use client";

import { useState } from "react";
import dynamic from 'next/dynamic'
import * as Dialog from '@radix-ui/react-dialog'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Cross1Icon } from '@radix-ui/react-icons'

const Map = dynamic(() => import('@/src/components/site/Map.jsx'),
{
  ssr:false,
})


function AddSiteButton() {
  const [name, setName] = useState("");
  const [lat, setLatitude] = useState("");
  const [lng, setLongitude] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [open, setOpen] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !lat || !lng || !address) {
      setError("Please fill in all fields");
      return;
    }

    await createSite(name, lat, lng, address);
  };

  const createSite = async (name, lat, lng, address) => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/site", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          address: address.trim(),
          latitude: lat,
          longitude: lng,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Failed to create site");
        return;
      }
      setOpen(false);
    } catch (err) {
      setError(`${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition flex items-center gap-2 font-medium mt-4 sm:mt-0">
            <PlusIcon className="w-5 h-5" />
            Add New Site
        </Dialog.Trigger>

        <Dialog.Portal>
          {/*<Dialog.Overlay className='fixed inset-0 bg-black/50'/>*/}
          <Dialog.Content className='
            fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            bg-white p-8 text-gray-900 
            shadow rounded-md border-2 border-gray-900
            w-full max-w-md
          '>
            <div className='flex justify-between items-center'>
              <Dialog.Title className='text-xl'>Site Information</Dialog.Title>
              <Dialog.Close className='text-gray-400 hover:text-gray-500'>
                <Cross1Icon />
              </Dialog.Close>
            </div>

            {/* Tampilkan error message */}
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className='mt-8'>
                <SiteFields 
                  name={name}  
                  setName = {setName}
                  lat={lat}
                  setLatitude={setLatitude}
                  lng={lng}
                  setLongitude={setLongitude}
                  address={address}
                  setAddress={setAddress}
                />
              </div>

              <div className='mt-8 space-x-6 text-right'>
                <Dialog.Close
                  className='rounded text-gray-500 hover:text-white
                  px-4 py-2 hover:bg-red-400 text-sm font-medium'>
                    Cancel
                </Dialog.Close>
                <button
                  type="submit"
                  disabled={isLoading}
                  className='rounded bg-teal-600 hover:bg-teal-700 text-white
                  px-4 py-2 text-sm font-medium'>
                  {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving
                </>
              ) : (
                "Save"
              )}
                </button>
              </div>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  )
}

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
        <Map onPositionChange={handlePositionChange}/>
        <input
          autoFocus
          value={lat}
          onChange={(e) => setLatitude(e.target.value)}
          className='hidden'/>
        <input
          autoFocus
          value={lng}
          onChange={(e) => setLongitude(e.target.value)}
          className='hidden'/>
      </div>
    </div>
  )
}

export default AddSiteButton