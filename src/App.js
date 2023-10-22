import logo from './logo.svg';
import "react-datepicker/dist/react-datepicker.css";
// import 'react-international-phone/style.css';
// import 'react-phone-number-input/style.css'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import NavBar from './Components/Client/Landing/NavBar';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useContext, lazy, Suspense } from 'react';

import Loading from './Components/Loading';


import 'react-international-phone/style.css';
import SystemIndex from './Pages/System/index/SystemIndex';

const Home = lazy(() => import("./Pages"))
const SignUP = lazy(() => import("././Pages/DashBoard/SignUP/SignUP"))
const SignIn = lazy(() => import("././Pages/DashBoard/SignIn/SignIn"))
const SystemSignIn = lazy(() => import("././Pages/System/Auth/SignIn/SystemSignIn"))
const ConfirmWithCode = lazy(() => import("././Pages/DashBoard/ConfirmWithCode/ConfirmWithCode"))
const ForgetPassword = lazy(() => import("././Pages/DashBoard/ForgetPassword/ForgetPassword"))
const SystemUsers = lazy(() => import('./Pages/System/Users/SystemUsers'))
function App() {

  const router = createBrowserRouter([


    {
      path: "/",
      element: <Suspense fallback={<Loading />}> <Home /></Suspense>
    },

    {
      path: "/Dashboard/SignUP",
      element: <Suspense fallback={<Loading />}> <SignUP /></Suspense>
    }, {
      path: "/Dashboard/ConfirmWithCode",
      element: <Suspense fallback={<Loading />}> <ConfirmWithCode /></Suspense>

    },
    {
      path: "/Dashboard/ForgetPassword",
      element: <Suspense fallback={<Loading />}> <ForgetPassword /></Suspense>

    },
    {
      path: "/Dashboard/SignIn",
      element: <Suspense fallback={<Loading />}> <SignIn /></Suspense>
    },
    {
      path: "/System/SignIn",
      element: <Suspense fallback={<Loading />}> <SystemSignIn /></Suspense>

    },
    //system routes
    {
      path: "/System",
      element: < SystemIndex />,
      children: [
        { path: "/System/users", element: <Suspense fallback={<Loading />} > <SystemUsers/></Suspense> }
      ]
    },






  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;