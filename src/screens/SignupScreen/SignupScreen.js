import React, { Component } from 'react'

import './index.module.css'
// import styled from 'styled-components'
import { Card,Form, Button, Row, Col} from "react-bootstrap";

export default class SignupScreen extends Component {

    onSignup = () => {
        this.props.history.push({pathname: "/home"})
    }
    
    toLogin = () => {
        this.props.history.push({pathname: "/login"})
    }

    render() {
        return (
            // <Container>
            //     <SignUpContainer>
            //         <SignupText>Signup</SignupText>
            //         <SignupInput type="text" placeholder="First Name"/>
            //         <SignupInput type="text" placeholder="Last Name"/>
            //         <SignupInput type="text" placeholder="Username"/>
            //         <SignupInput type="password" placeholder="Password" />
            //         <SignupInput type="password" placeholder="Confirm Password" />
            //         <SignupButton >Submit</SignupButton>
            //     </SignUpContainer>
            // </Container>
            <div style={{"display":"flex","alignItems": "center","minHeight":"100vh","Width":"100%","justifyContent": "center"}}>
            
                <Row style={{"backgroundColor":"grey", "height":"500px"}}>
                    <Col sm={8} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Enter Username" style={{width: "100%", fontSize: "14px", padding: "20px"}} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" style={{width: "100%", fontSize: "14px", padding: "20px"}}/>
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Confirm Password" style={{width: "100%", fontSize: "14px", padding: "20px"}}/>
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" style={{width: "120px", fontSize: "17px"}} onClick={this.onSignup}>
                                Signup
                            </Button>
                        </Form>
                    </Col>
                    <Col sm={4} style={{padding: "0px"}}>
                        <Card style={{"backgroundColor":"black", "height":"500px"}}>
                            <Card.Body style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <Card.Title>Hello friend!</Card.Title>
                                <Card.Text style={{color: "white"}}>
                                Enter your personal details and start your journy with us today.
                                </Card.Text>
                                <Button variant="primary" onClick={this.toLogin}>To Login</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        
            </div>
        )
    }
}

// const Container = styled.div `
//     display: flex;
//     align-items: center;
//     flex: 1;
//     justify-content: center;
// `

// const SignUpContainer = styled.div `
//     background: gray;
//     border-radius: 20px;
//     width: 30%;
//     display: flex;
//     flex-direction: column;
//     padding: 10px;
// `

// const SignupInput = styled.input`{
//     line-height: 45px;
//     width: 50%;
//     align-self: center;
//     font-size: 16px;
//     padding: 0px 0px 0px 20px;
//     border-radius: 6px;
//     border: 0px;
//     margin: 10px;
// `

// const SignupButton = styled.button`
//     background: rgb(71, 79, 179);
//     color: white;
//     border: 0px;
//     width: 30%;
//     line-height: 50px;
//     align-self: center;
//     border-radius: 6px;
//     margin: 10px;
//     font-size: 20px;
//     font-weight: bold;
//     transition: 0.2s;
//     &:hover {
//         background: white;
//         color: rgb(71, 79, 179);
//     }
// `

// const SignupText = styled.h1`
//     color: white;
//     font-size: 40px;
//     margin: 30px;
//     font-weight: bold;
// `