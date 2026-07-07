import React from 'react'
import { useForm, useWatch } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Rider = () => {
   const {register, handleSubmit, control, 
          // formState: {errors}
      } 
          = useForm();

   const { user } = useAuth() 
   const axiosSecure = useAxiosSecure();
    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)];
     const districtsByRegions = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }
    const riderRegion = useWatch({ control, name: 'region'});  
    
    const handleRiderApplication = data => {
      console.log(data);
      axiosSecure.post('/riders', data)
      .then(res => {
        if( res.data.insertedId) {
          Swal.fire({
           position: "top-end",
           icon: "success",
           title: "Your Applicaion has Submitted. we will reach to you in 145 days ",
           showConfirmButton: false,
           timer: 2500
         });
        }
      })
    }
  return (
    <div className='p-5'>
        <h2 className='font-bold text-4xl mt-5'>Be a Rider</h2>
         <form onSubmit={handleSubmit(handleRiderApplication)} className='mt-5 px-10 text-black'>
               
                {/* two colum */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* sender info */}
                   
                    <fieldset className="fieldset">
                         <h4 className="text-2xlfont-semibold">Rider Details</h4>
                         <label className="label">Rider Name</label>
                         <input type="text" {...register('name')} className="input w-full" 
                         placeholder="Rider Name" defaultValue={user?.displayName} />
                        {/* sender Email */}
                         <label className="label">Email</label>
                         <input type="email" {...register('email')} className="input w-full" placeholder="Rider Email" defaultValue={user?.email} />
                         {/* sender Region */}
                         <fieldset className="fieldset">
                             <legend className="fieldset-legend">Rider Regions</legend>
                             <select {...register('region')} defaultValue="Pick a browser" className="select">
                               <option disabled={true}>Pick a Region</option>
                               {
                                regions.map((r, i) =>  <option key={i} value={r}>{r}</option>)
                               }
     
                             </select>
                            
                         </fieldset>
                          {/* sender Districts */}
                         <fieldset className="fieldset">
                             <legend className="fieldset-legend">Districts</legend>
                             <select {...register('district')} defaultValue="Pick a browser" className="select">
                               <option disabled={true}>Pick a District</option>
                               {
                                    districtsByRegions(riderRegion).map((r, i) =>  <option key={i} value={r}>{r}</option>)
                               }
     
                             </select>
                            
                         </fieldset>
                        
                         <label className="label">Your Address</label>
                         <input type="text" {...register('address')} className="input w-full" placeholder="Sender Address" />
                       
                    </fieldset>

                        {/* received info */}
                        <fieldset className="fieldset">
                            <h4 className="text-2xlfont-semibold">More Details</h4>
                         <label className="label">Driving License</label>
                         <input type="text" {...register('license')} className="input w-full" placeholder="Driving License" />
                           {/* Receiver Email */}
                         <label className="label">NID</label>
                         <input type="number" {...register('nid')} className="input w-full" placeholder="NID" />
                          
                         
                        {/* Receiver Address */}
                         <label className="label">Bike Registration number</label>
                         <input type="text" {...register('bike')} className="input w-full" placeholder="Registration number" />
                       
                    </fieldset>  
                </div>
                <input type='submit' className='btn btn-primary text-black mt-8' value='Apply as a Rider'></input>
            </form>
    </div>
  )
}

export default Rider
