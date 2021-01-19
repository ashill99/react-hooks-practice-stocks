import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onStockClick}) {

  console.log(stocks)

  const theStocks = stocks.map((stock) => {
   return <div key={stock.name}>
            <Stock 
            stock={stock} 
            onStockClick={onStockClick}
            />
          </div>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {theStocks}
    </div>
  );
}

export default StockContainer;
