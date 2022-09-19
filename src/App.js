import Header from './header/header';
import Table from 'react-bootstrap/Table'
import { useEffect, useState } from "react"
import axios from "axios"
import './App.css';
// import fetchCoinsListData from './apis/gecko.api'

function App() {
  const [coinsList, setCoinsList] = useState('');
  const getCoinsList = () => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=zar")
      .then((response) => {
        setCoinsList(response.data)
      }).catch((error) => {
        console.log(error)
      });
  }
  useEffect(() => {
    getCoinsList();
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <div style={{ padding: "50px" }}>
        <Table striped bordered hover variant="dark" >
          <thead>
            <tr>
              <th>#</th>
              <th>Coin Name</th>
              <th>Price</th>
              <th>FD Valuation</th>
              <th>Mrkt Cap</th>
              <th>Total Volume</th>
            </tr>
          </thead>
          <>
            {
              coinsList ? coinsList.map(
                coinsList => {
                  return (
                    // <div className="" key={coinsList.id}>
                    //   <div>{coinsList.name}</div>
                    // </div>

                    <tbody>
                      <tr className="" key={coinsList.id}>
                        <td>{coinsList.market_cap_rank}</td>
                        <td>{coinsList.name}</td>
                        <td>{coinsList.current_price}</td>
                        <td>{coinsList.fully_diluted_valuation}</td>
                        <td>{coinsList.market_cap}</td>
                        <td>{coinsList.total_volume}</td>
                      </tr>
                    </tbody>

                  )
                }
              ) : <h3>No data</h3>
            }
          </>
        </Table>
      </div>
    </div>
  );
}

export default App;
