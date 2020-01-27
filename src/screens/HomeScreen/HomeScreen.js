import React, { Component } from 'react'
import Blog from '../../components/Blog/Blog'
import styled from 'styled-components'

export default class HomeScreen extends Component {
    onCreate = () => {
        this.props.history.push({pathname: "/create"})
    }

    render() {
        const array = [{}, {}, {}]
        return (
            <div>
                <p>Home Screen</p>
                <CreateBlogButton onClick={this.onCreate}>Create</CreateBlogButton>
                <HomeContainer>
                    {array.map((item, key) =>  <Blog/> )}
                </HomeContainer>
            </div>
        )
    }
}

const CreateBlogButton = styled.button`
    background: rgb(71, 79, 179);
    color: white;
    border: 0px;
    width: 10%;
    line-height: 50px;
    align-self: center;
    border-radius: 6px;
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
    transition: 0.2s;
    &:hover {
        background: white;
        color: rgb(71, 79, 179);
    }
`

const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`