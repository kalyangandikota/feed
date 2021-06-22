import React from 'react';
import { IComment } from '../types';

interface IProps {
    data: IComment;
}

const Comment = ({data}: IProps) => {
    const { email, body } = data;
    return (
        <div>
            <b>{email}</b>
            <p>{body}</p>
        </div>
    )
}

export default Comment