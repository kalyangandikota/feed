import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsList, getIsLoading } from '../redux/selectors';
import { getPosts } from '../redux/actions';
import { IPost } from '../types';
import { Container, PostTitle } from './style';
import { NavLink } from 'react-router-dom';


const Posts = () => {
    const posts: IPost[] = useSelector(getPostsList);
    const isLoading = useSelector(getIsLoading)
    const dispatch: any = useDispatch();

   

    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if(isLoading) {
        return <Container>Loading ...</Container>
    }

    return (
        <Container>
            <h1>Posts</h1>
            {posts.map(({title, userId, id}:IPost) => (<NavLink title={title} to={`/post/${userId}/${id}`} key={title}>
                <PostTitle>{title}</PostTitle>
            </NavLink>))}
        </Container>
    )
}

export default Posts;