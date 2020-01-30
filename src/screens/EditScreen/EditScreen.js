import React, { Component } from 'react'
import styled from 'styled-components'
import "react-mde/lib/styles/css/react-mde-all.css";
import './index.css'

import { getBlogAPI, updateBlogAPI } from "../../api/api"

export default class EditScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            blog: {},
            blog_ID: parseInt(this.props.match.params.blogID)
        }
        // getAvailableServer()
        this.getBlog()
        this.listen()
    }

    getBlog = async() => {
        
        const res = await getBlogAPI(this.state.blog_ID)
        this.setState({blog: res})
    }

    listen = async() => {
        while (true) {
            await this.getBlog()
            setTimeout(function(){}, 10)
        }
    }

    updateBlogContent = async(event) => {
        const data = {
            ID: this.state.blog_ID,
        	BlogTitle : this.state.blog.BlogTitle,
        	BlogContent: event.target.value
        }
        await updateBlogAPI(data)
    }

    updateBlogTitle = async(event) => {
        const data = {
            ID: this.state.blog_ID,
        	BlogTitle : event.target.value,
        	BlogContent: this.state.blog.BlogContent
        }
        await updateBlogAPI(data)
        // this.setState()
    }


    render() {        
        return (
            <Container>
                <CreateBlogTitle>Create Blog Screen</CreateBlogTitle>
                <CreateBlogContainer>
                    <BlogTitleInput placeholder="Write your Blog title here (let's try to make it a catchy one shall we;) )" 
                        value = {this.state.blog.BlogTitle} onChange={this.updateBlogTitle}/>

                    <EditBlogContent rows = {30} value={this.state.blog.BlogContent} onChange={this.updateBlogContent}/>

                    <CreateButton onClick={this.onCreate}>Done</CreateButton>
                </CreateBlogContainer>
                

            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const CreateBlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

const BlogTitleInput = styled.input`
    width: 60%;
    align-self: center;
    line-height: 20px;
    font-size: 25px;
    padding: 30px;
    font-weight: bold;
    font-style: italic;
`

const CreateBlogTitle = styled.p`
    align-self: center;
`

const EditBlogContent = styled.textarea`
    margin: 50px;
    border-radius: 10px;
    height: 30%;
    padding: 40px;
    font-size: 17px;
`

const CreateButton = styled.button`
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