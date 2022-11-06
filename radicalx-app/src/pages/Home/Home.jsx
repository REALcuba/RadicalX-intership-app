import { ClassNames } from '@emotion/react';
import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import Interships from '../../components/Intership/Interships';
//style
import "./home.css";


function Home() {
  return (
  < div className="home container bg-dark">
    <Dashboard/>
    {/* <Interships/> */}
    {/* <div className='intership_container'></div> */}
  </div>)
}

export default Home