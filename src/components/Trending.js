import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Trending.css'
import SingleTrending from './SingleTrending'

const Trending = (props) => {
  return (
    <div className='second-sec'>
        <h1>Top Movers</h1>
        <div className='box'>
          {/* name : {props.name} */}
        {props.trending.map(trending => {
                    return (
                            <SingleTrending trending={trending} />   
                    )
                })}

        </div>
    </div>
  )
}

export default Trending