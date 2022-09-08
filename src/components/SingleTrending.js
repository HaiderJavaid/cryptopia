import React from 'react'

import './Trending'

const SingleTrending = (props) => {
    return (
        // <div className='coin-row'>
        //     <p>{props.coins.market_cap_rank}</p>
        //     <div className='img-symbol'>
        //         <img src={props.coins.image} alt='' />
        //         <p>{props.coins.symbol.toUpperCase()}</p>
        //     </div>
        //     <p>RM{props.coins.current_price.toLocaleString()}</p>
        //     <p className='colored-text'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        //     <p className='hide-mobile'>RM{props.coins.total_volume.toLocaleString()}</p>
        //     <p className='hide-mobile'>RM{props.coins.market_cap.toLocaleString()}</p>

            <div className='single-box'>
            <img src={props.trending.image} alt='' />
        <h4>{props.trending.name}</h4>
        <div className='box-inside'>
        <h2>{props.trending.current_price}</h2>
        <h4>+16.40%</h4>
        </div>

        </div>
        // </div>

        
    )
}

export default SingleTrending
