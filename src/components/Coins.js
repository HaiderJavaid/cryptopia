import React from 'react'
import CoinItem from './CoinItem'
import Coin from '../routes/Coin'
import { Link } from 'react-router-dom'
import Trending from './Trending'


import './Coins.css'

const Coins = (props) => {
    return (
        
        <div className='container'>
      <Trending trending={props.trending}/>

            <div>
                <div className='heading'>
                    <p>#</p>
                    <p className='coin-name'>COIN</p>
                    <p>PRICE</p>
                    <p>24H</p>
                    <p className='hide-mobile'>VOLUME</p>
                    <p className='hide-mobile'>MARKET CAP</p>
                </div>

                {props.coins.map(coins => {
                    return (
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                            <CoinItem coins={coins} />
                        </Link>

                    )
                })}


            </div>
        </div>
    )
}

export default Coins
