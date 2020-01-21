import React, { Component } from 'react'

import './index.module.css'
import styled from 'styled-components'

export default class SignupScreen extends Component {
    render() {
        return (
            <Container>
                <SignUpContainer>
                    <SignupText>Signup</SignupText>
                    <SignupInput type="text" placeholder="First Name"/>
                    <SignupInput type="text" placeholder="Last Name"/>
                    <SignupInput type="text" placeholder="Username"/>
                    <SignupInput type="password" placeholder="Password" />
                    <SignupInput type="password" placeholder="Confirm Password" />
                    <SignupButton >Submit</SignupButton>
                </SignUpContainer>
            </Container>
        )
    }
}

const Container = styled.div `
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: center;
`

const SignUpContainer = styled.div `
    background: gray;
    border-radius: 20px;
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 10px;
`

const SignupInput = styled.input`{
    line-height: 45px;
    width: 50%;
    align-self: center;
    font-size: 16px;
    padding: 0px 0px 0px 20px;
    border-radius: 6px;
    border: 0px;
    margin: 10px;
`

const SignupButton = styled.button`
    background: rgb(71, 79, 179);
    color: white;
    border: 0px;
    width: 30%;
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

const SignupText = styled.h1`
    color: white;
    font-size: 40px;
    margin: 30px;
    font-weight: bold;
`