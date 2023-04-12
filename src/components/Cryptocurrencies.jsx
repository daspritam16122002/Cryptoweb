import React, {useState,useEffect} from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import {Card, Row, Col, imput, Input} from 'antd'

import { useGetCryptosQuery } from '../services/cryptoApi'


 const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList , isFetching} = useGetCryptosQuery(count);
  // const [cryptos, setCryptos]  = useState(cryptosList?.data?.coins);
  const [cryptos, setCryptos]  = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(()=>{
    // setCryptos(cryptosList?.data?.coins); no need to write sue to setCryptos(filteredData)

    //used to search amonge the 100 cryptocurrencies
    const filteredData = cryptosList?.data?.coins.filter((coin)=>coin.name.toString().toLowerCase().includes(searchTerm.toString().toLowerCase()));

    setCryptos(filteredData);
  },[cryptosList, searchTerm])


  if(isFetching) return 'Collecting data.........';
  return (
    <>

    {!simplified && (
        <div className="search-crypto">
          <Input placeholder="Search Cryptocurrencies" onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>
    )}

         <Row gutter={[32, 32]} className="crypto-card-container">
          {cryptos?.map((currency)=>(
            <Col xs={24}sm={12} lg={6} className="crypto-card" key={currency.id}>
              <Link to={`/crypto/${currency.id}`}>
                <Card title={`${currency.rank}.${currency.name}`}
                extra = {<img className="crypto-image" src = {currency.iconUrl}/>}
                hoverable
                >
                    <p>Price: {millify(currency.price)}</p>
                    <p>Market Cap: {millify(currency.marketCap)}</p>
                    <p>Daily Change: {millify(currency.change)}%</p>
                </Card>
              </Link>
            </Col>
          ))}
         </Row>
    </>
  )
}

export default Cryptocurrencies
