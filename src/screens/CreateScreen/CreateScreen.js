import React, { Component } from 'react'
import styled from 'styled-components'
import ReactMDE from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import './index.css'
import * as Showdown from "showdown";

export default class CreateScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: '**Hello World**',
            selectedTab: 'write' | 'preview'
        }

        
    }

    setValue = (val) => {
        this.setState({value: val})
    }
    setSelectedTab = () => {
        this.setState({selectedTab: this.state.selectedTab === 'write'? 'preview' : 'write'})
    }

    render() {
        const converter = new Showdown.Converter({
            tables: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            tasklists: true
          });
        
        return (
            <Container>
                <CreateBlogTitle>Create Blog Screen</CreateBlogTitle>
                <CreateBlogContainer>
                    <BlogTitleInput placeholder="Write your Blog title here (let's try to make it a catchy one shall we;) )"/>
                    <ReactMDE 
                        value={this.state.value}
                        onChange={this.setValue}
                        selectedTab={this.state.selectedTab}
                        onTabChange={this.setSelectedTab}
                        generateMarkdownPreview={markdown =>
                            Promise.resolve(converter.makeHtml(markdown))}
                        className="mark-down-editor container" style={{width:'10px'}} minEditorHeight={500} maxEditorHeight={1500} />
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