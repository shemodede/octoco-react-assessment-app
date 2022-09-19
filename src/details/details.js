import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import Parser from "html-react-parser"

function Details() {
    const location = useLocation();
    const [coinData, setCoinData] = useState('');
    const getCoinData = (coinId) => {
        axios.get("https://api.coingecko.com/api/v3/coins/" + coinId)
            .then((response) => {
                console.log(response.data)
                setCoinData(response.data)
            }).catch((error) => {
                console.log(error)
            });
    }
    useEffect(() => {
        let coin_id = location.state.coin_id;
        getCoinData(coin_id);
    }, []);

    return (
        <div style={{ padding: "50px" }}>
            <>
            {
                coinData ? (
            <Container >
                <Row>
                    <Col style={{disply:'flex', justifyContent:'left', fontSize: '28px'}}><img src={coinData.image.small}></img>&nbsp;&nbsp;<strong>{coinData.name}</strong><span style={{disply:'flex', justifyContent:'left', fontSize: '28px', textTransform: 'uppercase'}}><strong>({coinData.symbol})</strong></span></Col>
                </Row>
                <Row >
                    <div style={{ textJustify: 'auto', fontSize: '12px' }}>
                    {Parser(coinData.description.en)}
                    </div>
                </Row>
                <Row>
                    <Col>
                    <Table>
                        <tbody>
                    <tr><div><strong>Price:</strong>&nbsp;R {coinData.market_data.current_price.zar}</div></tr>
                    <tr><div><strong>Market Cap:</strong>&nbsp;R {coinData.market_data.market_cap.zar}</div></tr>
                    <tr><div><strong>Total Supply:</strong>&nbsp;R {coinData.market_data.total_supply}</div></tr>
                    <tr><div><strong>Market Rank:</strong>&nbsp; {coinData.market_data.market_cap_rank}</div></tr>
                    <tr><div><strong>Total Volume:</strong>&nbsp;R {coinData.market_data.total_volume.zar}</div></tr>
                    </tbody>
                    </Table>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            ) : <div>No data</div>
        }
        </>
        </div>
    );
}

export default Details;