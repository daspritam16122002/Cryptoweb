import React, { useState } from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
// import { Option } from './Option';


import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
// import { useGetCryptosQuery } from '../services/cryptoApi';

const {Text, Title} = Typography;
const {option} = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

//line 27 : <img style={{ maxWidth : '200px' , maxHeight : '100px'}} src..../> ->if images are overflowing in showmore...
const News = ({simplified}) => {
  const { data : cryptoNews } = useGetCryptoNewsQuery({ newsCatagory:'Cryptocurrency' , count: simplified? 6 : 12});
  // const { data } = useGetCryptosQuery(count);

  if(!cryptoNews?.value) return 'Loading...';


  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news,i)=>(
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreffer"> 
            <div className="news-image-container">
              <Title className="news-title" level={4}>{news.name}</Title>
              <img src = {news?.image?.thumbnail?.contentUrl || demoImage} alt="news"/>
            </div>
            <p>
              {news.description > 100 ? `${news.description.substring(0,100)}...` : news.description
              }
            </p>
            <div className="provider-container">
              <div>
                <Avatar src = {news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt=""/>
                <Text className="provider-name">{news.provider[0]?.name}</Text>
              </div>
                <Text>{moment(news.datePublish).startOf('ss').fromNow()}</Text>
            </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News
