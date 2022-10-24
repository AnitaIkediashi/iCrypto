import React from "react";

const Table = ({ coins }) => {
  return (
    <div className="table__col">
      <p>{coins.market_cap_rank}</p>
      <div className="table__image">
        <p>{coins.symbol.toUpperCase()}</p>
        <img src={coins.image} alt="" className="coin__img" />
      </div>
      <p>${coins.market_cap_change_24h.toLocaleString()}</p>
      <p>${coins.current_price.toLocaleString()}</p>
      <p>${coins.total_volume.toLocaleString()}</p>
      <p>${coins.price_change_24h.toLocaleString()}</p>
    </div>
  );
};

export default Table;
