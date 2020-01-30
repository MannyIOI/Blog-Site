import React, { Component } from 'react'
import styled from 'styled-components'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'

import { getBlogAPI } from '../../api/api'
import { Button, Row, Col, ButtonToolbar, Image} from "react-bootstrap";
import pic from "./porfo.jpg"

export default class BlogScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blog: {},
            blogId: this.props.match.params.blogID,
        }
        // getAvailableServer() 
        this.getBlog()
    }

    getBlog = async() =>{
        const { blogID } = this.props.match.params
        this.setState({blogId: blogID})
        const res = await getBlogAPI(blogID)
        this.setState({blog: res})
    }

    onEditClicked = () => {
        this.props.history.push({pathname: "/edit/"+this.state.blogId})
    }
    
    onSignoutClicked = () => {
        this.props.history.push({pathname: "/login/"})
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
                <BlogHeader>
                    <h1>D&B</h1>
                </BlogHeader>
                {/* <Button variant="primary" style={{"fontSize":"15px" }} onClick={this.onSignoutClicked}>Signout</Button> */}
                <div style={{"margin":"30px 0px","width":"100%"}}>
                    <Row>
                        <Col style = {{"width": "1250px"}}>
                            <Row className="justify-content-center">
                                <Image src={pic} roundedCircle style={{"width":"200px"}}/>
                            </Row>
                            <Row className="justify-content-center">
                                <h4>Name of the Blogger</h4>
                            </Row>
                        </Col>
                        <Col xs={6} style = {{"width": "3000px"}}>
                            <Row className="justify-content-end">
                                <ButtonToolbar>
                                    <Button variant="outline-warning" onClick={this.onEditClicked}>Edit</Button>
                                </ButtonToolbar>
                            </Row>
                            <Row>
                                <h3 style = {{"color": "white","margin":"50px", "fontWeight": "800", fontSize: "30px"}}>
                                    Blog Title {this.state.blog.BlogTitle}
                                </h3>
                            </Row>
                            <Row>
                                <p style = {{"color": "white","margin":"50px","fontSize":"17px"}}>
                                    {this.state.blog.BlogContent}
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

// const Containerr = styled.div`
//     display: flex;
//     flex-direction: column;
// `

const BlogHeader = styled.div`
    background: black;
    height: 150px;
`

// const BlogContainer = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex: 1;
// `

// const BlogTitle = styled.h4`
//     width: 60%;
//     align-self: center;
//     line-height: 20px;
//     font-size: 25px;
//     padding: 30px;
//     font-weight: bold;
//     font-style: italic;
// `

// const BlogContent = styled.p`
//     align-self: center;
//     color: white;
// `