import { Suspense } from 'react';
import './App.css';
import Website from "./pages/Website";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from './components/Layout/Layout';


import Login from './components/Login/Login';
import UserForm from './components/Admin/UserForm';
import {QueryClient, QueryClientProvider} from 'react-query'
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from "react-query/devtools"
import "react-toastify/dist/ReactToastify.css"
import Properties from './pages/Properties/Properties.jsx';
import Property from './pages/Property/Property.jsx';
function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
     <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
       <Routes>
         <Route element={<Layout />}>
           <Route path="/" element={<Website/>} />
            <Route path='/properties'>
              <Route index element={<Properties />} />
              <Route path=':PropertyId' element={<Property />} />
            </Route>
            <Route path='/Login' element={<Login />} />
            <Route path='/Admin' element={<UserForm/>} />
         
      </Route>
    </Routes>
    </Suspense>
    </BrowserRouter>
    <ToastContainer/>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
   
  );
}

export default App;
