import React, { Component } from 'react'
import Blog from '../../components/Blog/Blog'
import styled from 'styled-components'

import { getAllBlogsAPI, createBlogAPI } from "../../api/api"

export default class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            blogs: [{BlogTitle: "Title", BlogContent: "Content", ID: 1},{},{},{},{},{},{}],
            blogsIsLoading: false,
            createBlogLoading: false,
            blogTitle: ""
        }   
        this.getAllBlogs()
    }

    getAllBlogs = async () => {
        const res = await getAllBlogsAPI()
        this.setState({ blogs: res })
    }

    handleChange = (event) => {
        this.setState({blogTitle: event.target.value});
    }

    createBlog = async () => {
        const data = {
        	BlogTitle : this.state.blogTitle,
        	BlogContent: ""
        }

        const res = await createBlogAPI(data)
        this.getAllBlogs()
    }

    onBlogClicked = (id) => {
        this.props.history.push({pathname: "/blog/"+this.props.item.ID})
    }

    render() {
        // const array = [{}, {}, {}]
        return (
            <Container>
                <HomeHeader/>
                {/* <Categro> */}
                <HomeBodyContainer>
                    <CategoryContainer>
                        <CategoryButton>category</CategoryButton>
                        <CategoryButton>category</CategoryButton>
                    </CategoryContainer>
                    <BlogListContainer>
                        <p>Home Screen</p>
                        <NewBlogInput value={this.state.value} onChange={this.handleChange} />
                        <CreateBlogButton onClick={this.createBlog}>Create</CreateBlogButton>
                        <HomeContainer>
                            {this.state.blogs.map((item, key) =>  <Blog key={item.ID} item={item} history = {this.props.history}/> )}
                        </HomeContainer>
                    </BlogListContainer>
                </HomeBodyContainer>
            </Container>
        )
    }
}

const Container = styled.div`

`
const HomeBodyContainer = styled.div`
    display: flex;
`

const BlogListContainer =styled.div`
    width: 85%;
`

const CategoryContainer = styled.div`
    display: flex;
    width: 15%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const CategoryButton = styled.button`
    font-size: 20px;
    height: 60px;
    width: 60%;
    color: white;
    background: grey;
    border-radius: 100px;
    border: 0px;
    margin: 10px;
    &:hover {
        background: white;
        color: rgb(71, 79, 179);
    }
`

const CreateBlogButton = styled.button`
    background: rgb(71, 79, 179);
    color: white;
    border: 0px;
    width: 10%;
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

const HomeHeader = styled.div`
    background: blue;
    height: 150px;
`

const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
const NewBlogInput = styled.input`{
    line-height: 45px;
    width: 20%;
    align-self: center;
    font-size: 16px;
    padding: 0px 0px 0px 20px;
    border-radius: 6px;
    border: 0px;
    margin: 10px;
`