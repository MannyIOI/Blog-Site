import React, { Component } from 'react'
import styled from 'styled-components'

import './index.module.css'

export default class LoginScreen extends Component {
    render() {
        return (
            <Container>
                <LoginFormContainer>
                    <LoginText>Login</LoginText>
                    <LoginInput type="text" placeholder="Username"/>
                    <LoginInput type="password" placeholder="Password"/>
                    <LoginButton>Submit</LoginButton>
                </LoginFormContainer>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
`

const LoginFormContainer = styled.div`
    background: gray;
    border-radius: 20px;
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-self: center;
`

const LoginInput = styled.input`{
    line-height: 45px;
    width: 50%;
    align-self: center;
    font-size: 16px;
    padding: 0px 0px 0px 20px;
    border-radius: 6px;
    border: 0px;
    margin: 10px;
`

const LoginButton = styled.button`
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

const LoginText = styled.p`
    color: white;
    align-self: center;
`