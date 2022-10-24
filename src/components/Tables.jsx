import React from 'react'
import Table from './Table'


const Tables = ({coins}) => {
  return (
    <div className="exchange">
      <div className="container">
        <h2 className="exchange__heading">Market Exchange</h2>
        <div className="table__head">
          <h4>S/N</h4>
          <h4>Coin</h4>
          <h4>Mkt Cap</h4>
          <h4>Price</h4>
          <h4>Change</h4>
          <h4>Volume</h4>
        </div>

        {
          coins.map(coins => {
            return (
              <Table coins={coins} key={coins.id} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Tables