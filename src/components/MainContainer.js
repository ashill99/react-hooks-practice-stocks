import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("Tech")
  const [stocks, setStocks] = useState([])
  const [portStocks, setPortStocks] = useState([])

  useEffect(() => {
  fetch('http://localhost:3001/stocks')
  .then(r => r.json())
  .then(setStocks)
},[])

  function handleStockClick(stockToAdd) {
    const stockInPort = portStocks.find(
      (stock) => stock.id === stockToAdd.id)
      if (!stockInPort) {
        setPortStocks([...portStocks, stockToAdd])
      }
  }

  function handleRemoveStock(stockToRemove) {
    setPortStocks((portStocks) => 
    portStocks.filter((stock) => stock.id !== stockToRemove.id))
  }

  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if (sortBy === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name)
    } else {
      return stock1.price - stock2.price
    }
  })

  const filteredStocks = sortedStocks.filter(
    (stock) => stock.type === filterBy
  )



  return (
    <div>
      <SearchBar 
      sortBy={sortBy}
      onChangeSort={setSortBy}
      filterBy={filterBy}
      onChangeFilter={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} onStockClick={handleStockClick}/>
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portStocks} onStockClick={handleRemoveStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
