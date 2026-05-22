import React, { useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router'
const Coverage = () => {
    const position = [23.6850, 90.3563]
    const serviceCenter = useLoaderData();
    const mapRef =useRef(null);
    console.log(serviceCenter);

    const handleSearch = e => {
      e.preventDefault();
      const location = e.target.location.value;
      const district = serviceCenter.find( c => c.district.toLowerCase().includes(location.toLowerCase()));
      if(district){
        const coord = [district.latitude, district.longitude];
        console.log(district, coord)
        mapRef.current.flyTo(coord, 14);
      }
    }
  return (
    <div className='p-10 mb-10'>
       <h2 className='text-4xl font-bold text-center mt-10 mb-10'>We are available in 64 districts</h2>
        <div className='flex justify-center items-center mb-10'>
          
          <form onSubmit={handleSearch}>
           <label className="input w-4xl">
                  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </g>
                  </svg>
                  <input name='location' type="search" className="grow" placeholder="Search" />
                 
            </label>
            </form>

        </div>
        <div className='border-t-2 border-dotted w-full h-auto'>
          <h1 className='text-2xl font-semibold mt-5 mb-5'>We deliver almost all over Bangladesh</h1>
            <MapContainer center={position}
             zoom={13} 
             scrollWheelZoom={false}
             className='h-[600px]'
             ref={mapRef}
             >
                 <TileLayer
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  {
                    serviceCenter.map(center => <Marker position={[center.latitude, center.longitude]}>
                     <Popup>
                        <strong>{center.district}</strong> <br></br> 
                        Service Area: {center.covered_area.join(', ')}
                    </Popup>
                  </Marker>)
                  }
            </MapContainer>
        </div>
    </div>
  )
}

export default Coverage