import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import AuthLayouts from "../layouts/AuthLayouts";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../pages/sendParcel/SendParcel";
import DashBoardLayout from "../layouts/DashBoardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/payment/Payment";
import PaymentSuccess from "../pages/Dashboard/payment/paymentSuccess";
import PaymentCancel from "../pages/Dashboard/payment/PaymentCancel";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute";
import AssignRiders from "../pages/Dashboard/AssignRiders";
import RiderRoute from "./RiderRoute";
import AssignDeliveries from "../pages/Dashboard/AssignDeliveries/AssignDeliveries";
import CompletedDeliveries from "../pages/Dashboard/CompletedDeliveries/CompletedDeliveries";
import ParcelTrack from "../pages/ParcelTrack/ParcelTrack";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path:'/coverage',
            Component: Coverage,
            loader: () => fetch('/serviceCenter.json').then(res => res.json())
        },
        {
          path:'/parcel-track/:trackingId',
          Component: ParcelTrack
        },
        {
          path:'rider',
          element: <PrivateRoute>
            <Rider></Rider>
            </PrivateRoute>,
             loader: () => fetch('/serviceCenter.json').then(res => res.json())
        },
        {
          path:'/send-parcel',
          element: <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>,
           loader: () => fetch('/serviceCenter.json').then(res => res.json())
        },
        {
          path:'/about',
          Component: About
        }
    ]
  },
  {
    path: '/',
    Component: AuthLayouts,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
    children: [
      {
        index: true,
        Component: DashboardHome
      },
      {
        path: 'my-parcels',
        Component: MyParcels
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {
        path: 'payment-history',
        Component: PaymentHistory 
      },
      {
        path:'payment-success',
        Component: PaymentSuccess
      },
      {
         path:'payment-cancel',
        Component: PaymentCancel
      },
      // Rider related route
      {
        path: 'assigned-deliveries',
        element: <RiderRoute>
          <AssignDeliveries></AssignDeliveries>
        </RiderRoute>
      },
       {
        path: 'completed-deliveries',
        element: <RiderRoute>
          <CompletedDeliveries></CompletedDeliveries>
        </RiderRoute>
      },
      // Admin releated route
      {
        path: 'approve-riders',
       element: <AdminRoute><ApproveRiders></ApproveRiders></AdminRoute>
      },
      {
        path: 'assign-riders',
       element: <AdminRoute><AssignRiders></AssignRiders></AdminRoute>
      },
      
      {
        path: 'users-management',
        element: <AdminRoute>
          <UsersManagement></UsersManagement>
        </AdminRoute>
      }
    ]
  }
]);
