import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Coins from './components/Coins'
import Coin from './routes/Coin'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trending from './components/Trending'
import {nanoid} from 'nanoid'


function App() {

  const [coins, setCoins] = useState([])
  const [trending, setTrending] = useState([])
  const [searchWord, setSearchWord] = useState("");
  const [searchList, setSearchList] = useState([])


  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=myr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  const data = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=myr&order=gecko_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h'
  const searchData = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=myr&order=market_cap_desc&per_page=10&page=1&sparkline=false'


  useEffect(() => {
    axios.get(url).then((response) => {  //////// Get Coins Data
      setCoins(response.data)
      setSearchList(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {           //////////////////////// Get Trending Data
    axios.get(data).then((response) => {
      setTrending(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])


  function searchBar(e) {    ////////////////// To Get Input Value
      setSearchWord(e.target.value)
  }

  function clearSearch(e) {
    setSearchWord('')
  }
  

  return (
    <>
      <Navbar />
      <Hero clear={clearSearch} searchList={searchList} searchWord={searchWord} searchBar={searchBar} />
      
      <Routes>
        {/* <Route path='/' element={filteredCoins.map((coin) => {
        return (
        <Coins coins={coins} 
        />
  )})}/> */}

<Route path='/' element={
  

        <Coins trending={trending} coins={coins}/>}/>
        
        <Route path='/coin' element={<Coin />}>
          <Route path=':coinId' element={<Coin />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
