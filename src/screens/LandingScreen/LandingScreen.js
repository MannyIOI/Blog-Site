import React, { Component } from "react";
import pic1 from "./1.jpg";
import pic2 from "./2.jpg";
import pic3 from "./3.jpg";

import {Container, Card, Row, Col, Button} from "react-bootstrap";
// import Slider from 'infinite-react-carousel';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


export default class Start extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(<div style={{"backgroundColor":"white"}}>
             <AwesomeSlider style={{"width":"100%", "height":"500px"}}>

                        <div style={{"backgroundImage": `url(${pic2})`,"background": "cover","backgroundPosition":"center", "width":"100%"}}> 
                        <Col  lg={8}>

                        </Col>
                        <Col lg={4} style={{"float":"right"}}>
                            <p style={{"fontSize":"3.5rem","fontWeight":"bold"}}>
                                WE TRAVEL NOT TO ESCAPE LIFE,BUT FOR LIFE NOT TO ESCAPE US!!!
                            </p>
                        </Col>
                        </div>


                        <div style={{"backgroundImage": `url(${pic1})`,"background": "cover","backgroundPosition":"center", "width":"100%"}}> 
                        <Col  lg={8}>

                        </Col>
                        <Col lg={4} style={{"float":"right"}}>
                            <p style={{"fontSize":"4rem","fontWeight":"bold","color":"white"}}>
                           ONE THING YOU SHOULD KNOW THERE IS NO "WE" IN FOOD!!!
                            </p>
                        </Col>
                        </div>

                        <div style={{"backgroundImage": `url(${pic3})`,"background": "cover","backgroundPosition":"center", "width":"100%"}}> 
                        <Col  lg={8}>

                        </Col>
                        <Col lg={4} style={{"float":"right"}}>
                            <p style={{"fontSize":"4.5rem","fontWeight":"bold","color":"red"}}>
                           WITH OUT MUSIC LIFE WOULD BE A MISTAKE!!!
                            </p>
                        </Col>
                        </div>
            </AwesomeSlider>
                
            <Container style={{"marginTop": "50px"}}>
                
                   <Row style={{"marginBottom": "100px"}}>
                       <Col>
                       <p style={{"color": "black", "fontSize":"2rem"}}> We as bloggers inspire our blogging community with rich cultures of food and music <br/>from cities around the world. Our bloggers travel to give us <br>
                       </br>AND you with various content of such experiences. <br/> To join us on our journey please login</p>
                       <Button variant="outline-secondary" onClick={() => {this.props.history.push({pathname: "/login"})}}>Log in</Button>
                       </Col>
                   </Row>
                   <Row>
                       <Col>
                   <p style={{"color": "black", "fontSize":"3rem","font-family":"Tiempos Headline,Tiempos,Georgia,serif;"}}> OUR POPULAR CATEGORIES </p>
                   </Col>
                   </Row>
                <Row>
                    <Col>
                    <Card shadow="lg" style={{"zIndex":"1", "shadow":"lg"}}>
                        <Card.Body>
                            <Card.Title style = {{"color": "black","fontSize":"2rem"}}>FOOD BLOG</Card.Title>
                            <Card.Text>
                                <p  style = {{"fontSize":"1.5rem"}}>
                                Lentils have a lot going for them. They’re inexpensive, environmentally friendly, highly nutritious, and come in a range of colors and textures. All that, and they can be truly delicious—if you know how to cook them properly.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Body>

Bereket AAiT, [30.01.20 09:59]
<Card.Title style = {{"color": "black","fontSize":"2rem"}}>SOLO TRAVELING</Card.Title>
                            <Card.Text>
                            <p  style = {{"fontSize":"1.5rem"}}>
                            “I travel solo by choice not only because it gives me the freedom I need and want -- the freedom to decide when, where, and how to move -- but also because it constantly tests my abilities to deal with the challenges of being on the road by yourself."
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title style = {{"color": "black","fontSize":"2rem"}}> MUSIC </Card.Title>
                            <Card.Text>
                            <p  style = {{"fontSize":"1.5rem"}}>
                            The Canadian singer-songwriter uses the concept album to recreate the quietly stirring scenes of a dead romance. The Neon Skyline unfolds The Neon Skyline unfolds into a wistful, funny, and heartbreaking world of its own.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>)
    }
}