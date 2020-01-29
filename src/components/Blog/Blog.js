import React, { Component } from 'react'
import styled from 'styled-components'

export default class Blog extends Component {
    render() {
        return (
            <BlogContainer>

                <TitleContainer>
                    <Title>{this.props.item.BlogTitle}</Title>
                </TitleContainer>
                <SnippetContainer>
                    <SnippetText>
                        {this.props.item.BlogContent}
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

const Title = styled.h3`
    color: rgb(46, 48, 194);
`

const SnippetText = styled.p`
    color: white;
    margin: 0px;
    font-size: 14px;
    align-self: flex-start;
`

const BlogContainer = styled.div`
    background: rgba(107, 202, 111, 0.685);
    width: 14%;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 5px;
    margin: 27px;

    &:hover{
        background: white;
        border-radius: 16px;
        color: red;
    }
    &:hover ${ReadMoreLink}{
        color: red;
    }
    &:hover ${Title}{
        color: red;
    }
    &:hover ${SnippetText}{
        color: rgb(80, 80, 100);
    }
`

const TitleContainer = styled.div`
   
`


const SnippetContainer = styled.div`
    alignSelf: flex-start;
    fontSize: 17px;
    margin: 8px;
`


