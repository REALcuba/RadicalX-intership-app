import { ClassNames } from '@emotion/react';
import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard';
import Interships from '../../components/Intership/Interships';
//style
import "./home.css";


function Home() {
  return (
  < div className="home ">
    <Dashboard/>
    <Interships/>
  </div>)
}

export default Home