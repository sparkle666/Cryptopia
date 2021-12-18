import React from "react";
import millify from "millify";
import { Row, Col, Typography, Statistic, Card, Divider } from "antd";
import { Link } from "react-router-dom";
import {ArrowUpOutlined} from "@ant-design/icons"
import "../App.css"
import { useGetCryptosQuery } from "../services/cryptoApi"
import Cryptocurrencies from "./Cryptocurrencies"
import News from "./News"


export default function Home() {

  const {data, isFetching, error} = useGetCryptosQuery(10) // Destructure get and get the necessary data from the object
  // console.log(data,isFetching, error)

  const { Title } = Typography;

  if(isFetching){
    return "Loading..."
  }
  const globalStats = data?.data?.stats

  return (
    <>
      <Title level={2}> Global Crypto Statistics </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total MarketCap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
      <Row>
      <Col span = {12}>
          <Divider orientation = "left">Top 10 Crptocurrencies in the world</Divider>
        </Col>
        <Col span = {12}>
          <div className="show-more">
            <Link to="/cryptocurrencies">Show more</Link>
          </div>
        </Col>
        <Col span = {24}>
          <Cryptocurrencies simplified = {10} />
        </Col>
      </Row>
      <Row>
      <Col span = {12}>
          <Divider orientation = "left">Top Crypto News</Divider>
        </Col>
        <Col span = {12}>
          <div className="show-more">
            <Link to="/cryptocurrencies">Show more</Link>
          </div>
        </Col>
        <Col span = {24}>
          <News simplified/>
        </Col>
      </Row>
    </>
  );
}
