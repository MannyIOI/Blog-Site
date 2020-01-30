import React, { Component } from 'react'
// import styled from 'styled-components'
import { withRouter } from "react-router-dom";

import { Card, Form, Button, Row, Col} from "react-bootstrap"
import './index.module.css'

class LoginScreen extends Component {
    onLogin = () => {
        this.props.history.push({pathname: "/home"})
    }
    toSignup = () => {
        this.props.history.push({pathname: "/signup"})
    }

    render() {
        return (
            // <Container>
            //     <LoginFormContainer>
            //         <LoginText>Login</LoginText>
            //         <LoginInput type="text" placeholder="Username"/>
            //         <LoginInput type="password" placeholder="Password"/>
            //         <LoginButton onClick={this.onLogin}>Submit</LoginButton>
            //     </LoginFormContainer>
            // </Container>
            <div style={{"display":"flex","alignItems": "center","minHeight":"100vh","Width":"100%","justifyContent": "center"}}>
            
                <Row  style={{"backgroundColor":"grey", "height":"500px"}}>
                    <Col sm={4} style={{padding: "0px"}}>
                    {/* style={{ width: '18rem' }} */}
                        <Card style={{"backgroundColor":"black", "height":"500px"}}>
        
                            <Card.Body style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <Card.Title>Hello friend!</Card.Title>
                                <Card.Text style={{color: "white"}}>
                                Enter your personal details and start your journy with us today.
                                </Card.Text>
                                <Button variant="primary" onClick={this.toSignup}>To Signup</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={8} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" style={{width: "100%", fontSize: "14px", padding: "20px"}} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" style={{width: "100%", fontSize: "14px", padding: "20px"}}/>
                            </Form.Group>
                            
                            <Button variant="primary" type="submit" style={{width: "120px", fontSize: "17px"}} onClick={this.onLogin}>
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
            
            </div>
        )
    }
}

// const Containerr = styled.div`
//     width: 100%;
//     display: flex;
//     flex: 1;
//     justify-content: center;
// `

// const LoginFormContainer = styled.div`
//     background: gray;
//     border-radius: 20px;
//     width: 30%;
//     display: flex;
//     flex-direction: column;
//     padding: 10px;
//     align-self: center;
// `

// const LoginInput = styled.input`{
//     line-height: 45px;
//     width: 50%;
//     align-self: center;
//     font-size: 16px;
//     padding: 0px 0px 0px 20px;
//     border-radius: 6px;
//     border: 0px;
//     margin: 10px;
// `

// const LoginButton = styled.button`
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

// const LoginText = styled.p`
//     color: white;
//     align-self: center;
//     font-size: 40px;
//     margin: 30px;
//     font-weight: bold;
// `


export default withRouter(LoginScreen);