import React, { Component } from 'react'
import styled from 'styled-components'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'

import { getBlogAPI } from '../../api/api'
import { Button, Row, Col, Navbar, ButtonToolbar, Image} from "react-bootstrap";
import pic from "./porfo.jpg"

export default class BlogScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blog: {}
        }
        this.getBlog()
    }

    getBlog = async() =>{
        const { blogID } = this.props.match.params
        const res = await getBlogAPI(blogID)
        this.setState({blog: res})
    }
    
    
    render() {
        return (
            // <Container>
            //     <BlogContainer>
            //         <BlogTitle>{this.state.blog.BlogTitle}</BlogTitle>
            //         <BlogContent>{this.state.blog.BlogContent}</BlogContent>
            //     </BlogContainer>
            // </Container>
            <div>
                <Navbar style={{"margin":"30px"}}>
                    <Navbar.Brand style={{"color":"white","fontSize":"30px"}}>Blog Site</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <ButtonToolbar>
                                <Button variant="primary" style={{"fontSize":"15px" }}>Signout</Button>
                            </ButtonToolbar>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{"margin":"0px","width":"100%"}}>
                    <Row>
                        <Col style = {{"width": "1250px"}}>
                            <Image src={pic} roundedCircle style={{"width":"200px"}}/>
                        </Col>
                        <Col xs={6} style = {{"width": "3000px"}}>
                            <Row className="justify-content-end">
                                <ButtonToolbar>
                                    <Button variant="outline-warning" onClick={this.onEdit}>Edit</Button>
                                </ButtonToolbar>
                            </Row>
                            <Row>
                                <h3 style = {{"color": "white","margin":"50px", "fontWeight": "800", fontSize: "30px"}}>
                                    Blog Title {this.state.blog.BlogTitle}
                                </h3>
                            </Row>
                            <Row>
                                <p style = {{"color": "white","margin":"50px","fontSize":"17px"}}>
                                    Blog Content {this.state.blog.BlogContent}
                                </p>
                            </Row>
                        </Col>
                        <Col  className="justify-content-end">
                            <Image src={pic} style={{"width":"200px"}}/>
                        </Col>
                </Row>
                </div>
            </div>
        )
    }
}

const Containerr = styled.div`
    display: flex;
    flex-direction: column;
`

const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const BlogTitle = styled.h4`
    width: 60%;
    align-self: center;
    line-height: 20px;
    font-size: 25px;
    padding: 30px;
    font-weight: bold;
    font-style: italic;
`

const BlogContent = styled.p`
    align-self: center;
    color: white;
`