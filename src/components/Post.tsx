import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IComment, IPost } from '../types';
import { CommentsContainer, PostContainer } from './style';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { getCommentsForPost } from '../redux/actions';
import Comment from './Comment';
import { getPostsById, getCommentsByPostId } from '../redux/selectors';
import AddComment from './AddCommentSection';

interface IProps {
   history: any;
}


const Post = (props:IProps) => {
    const { postId } = useParams() as any;
    const posts = useSelector(getPostsById);
    const commentsByPostId = useSelector(getCommentsByPostId);
    const post: IPost = posts[postId];
    const comments: IComment[] = commentsByPostId[postId] || [];
    const { title, body } = post;
    const dispatch = useDispatch();
    useEffect(() => {
        if(!commentsByPostId[postId]) {
            dispatch(getCommentsForPost({postId}))
        }
    }, [commentsByPostId, dispatch, postId])
    
    return <PostContainer> 
        <p><b>Title: </b>{title}</p>
        <p><b>body: </b>{body}</p>
        <h4>comments:</h4>
        <CommentsContainer>
        {
            comments.map((comment: IComment) => <Comment data={comment} key={comment.body}/>)
        }
        </CommentsContainer>
        
        <AddComment postId={postId} />
    </PostContainer>
}

export default Post