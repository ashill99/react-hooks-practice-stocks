import React from "react";

function Stock({stock, onStockClick}) {

  function handleStockClick() {
    let id = stock.id
    console.log('in stock')
    onStockClick(stock)
  }
  return (
    <div>
      <div className="card" key={stock.name} onClick={handleStockClick}>
        <div className="card-body">
          <h3 className="card-title">{stock.name}</h3>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
