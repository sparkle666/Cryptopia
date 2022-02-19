import React from 'react'
import {Card, Col, Row, Avatar, Empty} from "antd"
import {useGetCryptoNewsQuery} from "../services/cryptoNewsApi"
import moment from "moment"
import Loader from './Loader'

function News({simplified}) {
    const {data: cryptoNews, isFetching} = useGetCryptoNewsQuery({newsCategory: "Cryptocurrency", count: simplified ? 6 : 12})
    console.log(cryptoNews)
    // const {Title, Text} = Typography
    // const {Option} = Select
    if (isFetching){
        return <Loader />
    }
    if (cryptoNews === null){
        return <Empty />
    }
    return (
        <div>
            <h2 style = {{textAlign: "center"}}> Here are the current Crypto related news... </h2>
            <Row gutter = {[24, 24]}>
                {cryptoNews?.value?.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key = {i}>
                        <Card hoverable title = {news.name} cover = {<img src = {news?.image?.thumbnail?.contentUrl} alt = "img" />}
                        loading =  {isFetching ? true: false}
                        actions = {[
                            <Avatar src = {news?.provider[0]?.image?.thumbnail?.contentUrl}/>,
                            <p>{ news?.provider[0]?.name } | {moment(news.datePublished).startOf('ss').fromNow()}</p>
                        ]}>
                           <p>{news.description.length > 100 ? news.description.substring(0, 100) + "...": news.description }</p>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default News
