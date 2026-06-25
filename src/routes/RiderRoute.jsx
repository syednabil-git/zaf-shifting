import React from 'react'
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';

const RiderRoute = ({children}) => {
  const { loading, user } = useAuth();
    const {role, roleLoading} = useRole();
    
    if(loading || !user || roleLoading) {
        return <Loading></Loading>
    }
    if(role !== 'rider'){
        return <div>
            <h1>Access Forbidden.</h1>
        </div>
    }
  return children;
}


export default RiderRoute