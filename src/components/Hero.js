import React from 'react'
import { useEffect, useState } from "react";
import './Hero.css'
import herovid from '../assets/globe.mp4'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin';


// function Hero({searchBar, searchList}) {
  const Hero = (props) => {
  

  return (
    <div className='cont'>
<video width="320" height="240"                                                                                                                className='hero-video' src={herovid} autoPlay loop muted />

      <div className='hero-container'>

        <h1 className='hero-text'>Welcome to Cryptopia</h1>
        <p className='p-tag'>Live Cryptocurrency statistics.</p>

       
        <input className='hero-input' placeholder={'Search a Coin'} onChange={props.searchBar} />
        <div className='dropdown'>
        {props.searchList.filter(item => {
          const searchTerm = props.searchWord.toLowerCase()
          const name = item.name.toLowerCase()
          const symbol = item.symbol.toLowerCase()

          return searchTerm && name.startsWith(searchTerm) || searchTerm && symbol.startsWith(searchTerm)
        })
        .map((coins) => (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id} onClick={props.clear}>
          <div className='dropdown-row'>{coins.name}</div>
          </Link>
        ))}

        </div>
        
       
      
    </div>

    </div>
  
  )
}

export default Hero