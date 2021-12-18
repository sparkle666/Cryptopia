import React from 'react'
import { useParams } from 'react-router'

export default function Cryptodetails() {
    const {coinID} = useParams()
    return (
        <div>
            Crypto details for {coinID}
        </div>
    )
}
