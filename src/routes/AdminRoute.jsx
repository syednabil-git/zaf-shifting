import React, { Children } from 'react'
import useAuth from '../hooks/useAuth'
import useRole from '../hooks/useRole';

const AdminRoute = ({children}) => {
    const { loading} = useAuth();
    const {role, roleLoading} = useRole();
    
    if(loading || roleLoading) {
        return <Loading></Loading>
    }
    if(role !== 'admin'){
        return <div>
            <h1>Access Forbidden.</h1>
        </div>
    }
  return children;
}

export default AdminRoute