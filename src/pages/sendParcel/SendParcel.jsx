import React from 'react'
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const SendParcel = () => {
    const {register, handleSubmit, control, 
        // formState: {errors}
    } 
        = useForm();
        const { user } = useAuth() 
        const axiosSecure = useAxiosSecure();
        const navigate = useNavigate();
    const serviceCenters = useLoaderData();
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)];
    const senderRegion = useWatch({ control, name: 'senderRegion'});
    const receiverRegion = useWatch({ control, name: 'receiverRegion'});

    const districtsByRegions = region => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }
    const handleSendParcel = data => {
            console.log(data);
            const isDocument = data.parcelType === 'document';
            const isSameDistrict = data.senderDistrict === data.receiverDistrict;
            const parcelWeight = parseFloat(data.parcelWeight);
            let cost = 0;
            if(isDocument){
                cost = isSameDistrict ? 60 : 80
            }
            else{
                if(parcelWeight < 3 ){
                    cost = isSameDistrict ? 110 : 150;
                }
                else{
                    const minCharge = isSameDistrict ? 110 : 150;
                    const extraWeight = parcelWeight - 3;
                    const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40;
                    cost = minCharge + extraCharge;
                }
            }
            console.log('cost', cost);
            data.cost = cost;
            Swal.fire({
                        title: "Agree with the cost?",
                        text: `You will be charged ${cost} tk!`,
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Confirm and Continue Payment!"
                      }).then((result) => {
                          if (result.isConfirmed) 
                           //save the parcel info
                        axiosSecure.post('/parcels', data)
                        .then(res => {
                            console.log('after saving parcel', res.data);
                            if(res.data.insertedId){
                                navigate('/dashboard/my-parcels')
                              Swal.fire({
                              position: "top-end",
                              icon: "success",
                              title: "Parcel has created. Please Pay ",
                              showConfirmButton: false,
                              timer: 2500
                            });
                            }
                        }) 
                        
                            
                      });
    }
  return (
    <div className='p-5'>
            <h2 className='text-4xl font-bold mt-5'>Send A Parcel</h2>
            <form onSubmit={handleSubmit(handleSendParcel)} className='mt-5 px-5 text-black'>
                {/* parcel type */}
                <div>
                        <label className="label mr-4">
                        <input type="radio" {...register('parcelType')} value='document'  className="radio" defaultChecked />
                        Document</label>
                         <label className="label">
                        <input type="radio" {...register('parcelType')} value='non-document'  className="radio" />
                        Non-Document</label>
                </div>
                {/* parcel info: name, weight */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-8'>
                    <fieldset className="fieldset">
                         <label className="label">Parcel Name</label>
                         <input type="text" {...register('parcelName')} className="input w-full" placeholder="Parcel Name" />
                    </fieldset>
                     <fieldset className="fieldset">
                         <label className="label">Parcel Weight</label>
                         <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Parcel Weight" />
                    </fieldset>


                </div>
                {/* two colum */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    {/* sender info */}
                   
                    <fieldset className="fieldset">
                         <h4 className="text-2xlfont-semibold">Sender Details</h4>
                         <label className="label">Sender Name</label>
                         <input type="text" {...register('senderName')} className="input w-full" 
                         placeholder="Sender Name" defaultValue={user?.displayName} />
                        {/* sender Email */}
                         <label className="label">Sender Email</label>
                         <input type="email" {...register('senderEmail')} className="input w-full" placeholder="Sender Email" defaultValue={user?.email} />
                         {/* sender Region */}
                         <fieldset className="fieldset">
                             <legend className="fieldset-legend">Sender Regions</legend>
                             <select {...register('senderRegion')} defaultValue="Pick a browser" className="select">
                               <option disabled={true}>Pick a Region</option>
                               {
                                regions.map((r, i) =>  <option key={i} value={r}>{r}</option>)
                               }
     
                             </select>
                            
                         </fieldset>
                          {/* sender Districts */}
                         <fieldset className="fieldset">
                             <legend className="fieldset-legend">Sender Districts</legend>
                             <select {...register('senderDistrict')} defaultValue="Pick a browser" className="select">
                               <option disabled={true}>Pick a District</option>
                               {
                                    districtsByRegions(senderRegion).map((r, i) =>  <option key={i} value={r}>{r}</option>)
                               }
     
                             </select>
                            
                         </fieldset>
                        
                         <label className="label">Sender Address</label>
                         <input type="text" {...register('senderAddress')} className="input w-full" placeholder="Sender Address" />
                       
                    </fieldset>

                        {/* received info */}
                        <fieldset className="fieldset">
                            <h4 className="text-2xlfont-semibold">Receiver Details</h4>
                         <label className="label">Receiver Name</label>
                         <input type="text" {...register('recieverName')} className="input w-full" placeholder="Receiver Name" />
                           {/* Receiver Email */}
                         <label className="label">Receiver Email</label>
                         <input type="email" {...register('receiverEmail')} className="input w-full" placeholder="receiver Email" />
                          {/* receiver Region */}
                         <fieldset className="fieldset">
                             <legend className="fieldset-legend">Receiver Regions</legend>
                             <select {...register('receiverRegion')} defaultValue="Pick a Region" className="select">
                               <option disabled={true}>Pick a Region</option>
                               {
                                regions.map((r, i) =>  <option key={i} value={r}>{r}</option>)
                               }
     
                             </select>
                            
                         </fieldset>
                          {/* receiver Districts */}
                         <fieldset className="fieldset">
                             <legend className="fieldset-legend">Receiver Districts</legend>
                             <select {...register('receiverDistrict')} defaultValue="Pick a Region" className="select">
                               <option disabled={true}>Pick a District</option>
                               {
                                    districtsByRegions(receiverRegion).map((r, i) =>  <option key={i} value={r}>{r}</option>)
                               }
     
                             </select>
                            
                         </fieldset>
                        {/* Receiver Address */}
                         <label className="label">Receiver Address</label>
                         <input type="text" {...register('recieverAddress')} className="input w-full" placeholder="Receiver Address" />
                       
                    </fieldset>  
                </div>
                <input type='submit' className='btn btn-primary text-black mt-8' value='Send Parcel'></input>
            </form>
    </div>
  )
}

export default SendParcel;