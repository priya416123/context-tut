import React, { Component } from 'react'
import { UserConsumer } from './userContext'

export class ComponentF extends Component {
    render() {
        return(
        <UserConsumer>
        {(context)=>{
            return (
            <div>
                <h1>Hello {context}</h1>
            </div>
        )}}
        </UserConsumer>
        )
    }
}

export default ComponentF
