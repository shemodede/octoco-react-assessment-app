import Table from 'react-bootstrap/Table'
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
function Home() {
    const [coinsList, setCoinsList] = useState('');
    
    let navigate = useNavigate();

    const navigateToDetailsPage = event => {
        navigate('/details', {state: {
            coin_id: event
          }});
    };

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
                                        <tbody>
                                            <tr onClick={() => {navigateToDetailsPage(coinsList.id)}} className="" key={coinsList.id}>
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
                            ) : <tbody><tr>No data</tr></tbody>
                        }
                    </>
                </Table>
        </div>
    );
}

export default Home;