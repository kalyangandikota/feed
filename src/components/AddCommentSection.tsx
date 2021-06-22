import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions';
import { IComment } from '../types';
import { Form, Flex } from './style';

interface IProps {
    postId: number;
}

const AddComment = ({ postId }: IProps) => {
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');
    const changeEmail = useCallback((e: any) => {
        const { value } = e.target;
        setEmail(value)
    }, [])
    const changeBody = useCallback((e: any) => {
        const { value } = e.target;
        setBody(value)
    }, [])
    const dispatch = useDispatch();
    const onSubmit = useCallback((e: any) => {
       e.preventDefault();
        const email = e.target.email.value;
        const body = e.target.body.value;
        const comment: IComment = {
            postId, email, body  
        }
        dispatch(addComment({ comment }))
        setEmail('');
        setBody('');
       return false;
    }, [])
    return (
    <Form onSubmit={onSubmit}>
        <Flex><label>Email: </label><input value={email} data-testid='input' aria-label='input' type='text' name='email' onChange={changeEmail}></input></Flex>
        <Flex><label>body: </label><textarea name='body' value={body} data-testid='body' onChange={changeBody}></textarea></Flex>
        <button type='submit'>Add Comment</button>
    </Form>)
}

export default AddComment