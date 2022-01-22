import React from 'react'
import {Select, Card, Col, Row, Avatar, Typography, Empty} from "antd"
import {useGetCryptoNewsQuery} from "../services/cryptoNewsApi"
import moment from "moment"

function News({simplified}) {
    const {data: cryptoNews, isFetching} = useGetCryptoNewsQuery({newsCategory: "Cryptocurrency", count: simplified ? 6 : 12})
    console.log(cryptoNews)
    const {Title, Text} = Typography
    const {Option} = Select
    if (isFetching){
        return "Loading..."
    }
    return (
        <div>
            <Row gutter = {[24, 24]}>
                {cryptoNews?.value?.map((news, i) => (
                    <Col xs={24} sm={12} lg={6} key = {i}>
                        <Card hoverable title = {news.name} cover = {<img src = {news?.image?.thumbnail?.contentUrl} />}
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
