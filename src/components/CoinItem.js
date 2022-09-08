import React from 'react'

import './Coins.css'



const CoinItem = (props) => {

    const hourValue = props.coins.price_change_percentage_24h.toFixed(2)



    return (
        <div className='coin-row'>
            <p>{props.coins.market_cap_rank}</p>
            <div className='img-symbol'>
                <img src={props.coins.image} alt='' />
                <p>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p>RM{props.coins.current_price.toLocaleString()}</p>
            <p className={`${hourValue > 0 ? 'green-text' : 'red-text'}`}>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='hide-mobile'>RM{props.coins.total_volume.toLocaleString()}</p>
            <p className='hide-mobile'>RM{props.coins.market_cap.toLocaleString()}</p>
        </div>
    )
}

export default CoinItem
