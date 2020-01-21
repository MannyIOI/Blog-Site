import React, { Component } from 'react'
import Blog from '../../components/Blog/Blog'
import styled from 'styled-components'

export default class HomeScreen extends Component {
    render() {
        const array = [{}, {}, {}]
        return (
            <div>
                <p>Home Screen</p>
                <HomeContainer>
                    {array.map((item, key) =>  <Blog/> )}
                </HomeContainer>
            </div>
        )
    }
}

const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`