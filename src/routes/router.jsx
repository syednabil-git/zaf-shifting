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
          path:'rider',
          element: <PrivateRoute>
            <Rider></Rider>
            </PrivateRoute>
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
        path: 'my-parcels',
        Component: MyParcels
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {
        path:'payment-success',
        Component: PaymentSuccess
      },
      {
         path:'payment-cancel',
        Component: PaymentCancel
      }
    ]
  }
]);
