import React, { Component } from 'react'
import styled from 'styled-components'

export default class Blog extends Component {
    render() {
        return (
            <BlogContainer>
                <TitleContainer>
                    <h3>Blog Title</h3>
                </TitleContainer>
                <SnippetContainer>
                    <SnippetText>Still Could death since do we hoped is in. Exquisite no my attention extensive. 
                        The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally 
                        forbade hundred to. Still Could death since do we hoped is in. Exquisite no my attention extensive. 
                        The determine conveying moonlight age. Avoid for see marry sorry child. Sitting so totally 
                        forbade hundred to. 
                        <ReadMoreLink> Read more</ReadMoreLink>
                    </SnippetText>
                </SnippetContainer>
            </BlogContainer>
        )
    }
}

const ReadMoreLink = styled.a`
    color: rgb(75, 76, 95);
    text-decoration: underline;

    &:hover{
        text-decoration: none;
    }
`

const BlogContainer = styled.div`
    background: red;
    width: 15%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 5px;

    &:hover{
        background: white;
        border: 1px solid red;
        border-radius: 16px;
        color: red;
    }
    &:hover ${ReadMoreLink}{
        color: red;
    }
`

const TitleContainer = styled.div`
    
`

const SnippetContainer = styled.div`
    alignSelf: flex-start;
    fontSize: 17px;
    margin: 8px;
`

const SnippetText = styled.p`
    margin: 0px;
    font-size: 14px;
    align-self: flex-start;
`

