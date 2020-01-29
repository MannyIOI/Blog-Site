import React, { Component } from 'react'
import styled from 'styled-components'
import "react-mde/lib/styles/css/react-mde-all.css";
import './index.css'

import { getBlogAPI } from '../../api/api'

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
            <Container>
                <BlogContainer>
                    <BlogTitle>{this.state.blog.BlogTitle}</BlogTitle>
                    <BlogContent>{this.state.blog.BlogContent}</BlogContent>
                </BlogContainer>
            </Container>
        )
    }
}

const Container = styled.div`
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