
import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Route,
  Routes, } from "react-router-dom";



export default function App() {
  let api=process.env.REACT_APP_ApKey
  
  // state={
  //   progress:0
  // }
  // setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
  
    return (
      <>
      <Router>
      
     
      <div>
       
          <Navbar />
         
        
         
          <Routes>
            <Route exact path="/" element={<News key='General' pgSize={12} country='us' ap={api} category='General'  />} />
            <Route exact path="/General" element={<News key='G' pgSize={12} country='us' ap={api} category='General'  />} />
            <Route exact path="/Business" element={<News key='Business' pgSize={12} country='us' ap={api} category='Business' />} />
            <Route exact path="/Science" element={<News key='Science' pgSize={12} country='us' ap={api} category='Science' />} />
            <Route exact path="/Technology" element={<News key='Technology' pgSize={12} country='us' ap={api} category='Technology' />} />
            <Route exact path="/Sports" element={<News key='Sports' pgSize={12} country='us' ap={api} category='Sports' />} />
            <Route exact path="/Health" element={<News key='Health' pgSize={12} country='us' ap={api} category='Health' />} />
            <Route exact path="/Entertainment" element={<News key='Entertainment' pgSize={12} country='us' ap={api} category='Entertainment' />} />

          </Routes>
          
      </div>
      </Router>
      </>

    );
  }

