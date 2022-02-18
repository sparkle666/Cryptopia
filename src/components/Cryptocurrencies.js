import React from 'react'
import millify from "millify"
import { Row, Col, Input, Card, Empty } from "antd"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useGetCryptosQuery } from "../services/cryptoApi"
import Loader from './Loader'

function Cryptocurrencies({simplified}) {
    // set count to 10 or 100 depemding on the passed in props
    const count = simplified === 10 ? 10: 100
    // if simplified is passed in show 10 currencies in home page
    const {data:cryptoList, isFetching } = useGetCryptosQuery(count) 
    const [searchTerm, setSearchTerm] = useState('')
    const [cryptos, setCryptos] = useState([])

    useEffect(() => {
        setCryptos(cryptoList?.data?.coins)
        const filteredData = cryptoList?.data?.coins?.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
        setCryptos(filteredData)
    }, [cryptoList, searchTerm])

    console.log(searchTerm)
    // If its is fetching show loading
    if (isFetching){
        return <Loader />
    }
    if (cryptoList === null){
        return <Empty />
    }
    return (
        <div>
            {simplified && (
                <div className="search-input">
                <Input.Search placeholder="Input search text" 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                />
                </div>
            )}
            
            {cryptoList ? (
                <Row gutter={[32, 32]}>
                    {cryptos?.map((currency) => (
                        <Col xs={24} sm = {12} lg = {6} key = {currency.id}>
                            <Link to = {`/crptocurrencies/${currency.id}`}>
                                <Card 
                                    title = {`${currency.rank}. ${currency.name}`}
                                    extra = {<img src={currency.iconUrl} style = {{ width: 20 }}/>}
                                    hoverable
                                    >
                                    <p>Price: {millify(currency.price)} </p>
                                    <p>Market Cap: {millify(currency.marketCap)} </p>
                                    <p>Daily Change: {millify(currency.change)} </p>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            ) : <Empty /> }
        </div>
    )
}

export default Cryptocurrencies
