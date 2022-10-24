import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Tables from '../../components/Tables'
import './exchange.css'

const Exchange = () => {

  const [coins, setCoins] = useState([])

  const url ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Tables coins={coins} />
    </>
  )
}

export default Exchange