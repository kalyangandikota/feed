import styled from 'styled-components';

export const Flex = styled.div `
    display: flex;
    align-items: center;
    width: 100%;
    input, textarea {
        width: 100%;
        margin-bottom: 5px;
    }
`

export const Container = styled.div `
    width: 1000px;
    margin: 20px auto;
    a {
        text-decoration: none;
        color: #000;
    }
`;

export const PostTitle = styled.div `
    height: auto;
    border: 2px solid;
    border-radius: 4px;
    padding: 5px;
    margin-bottom: 10px;
    transition: transform .25s;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }
`;

export const PostContainer = styled.section`
    max-width: 1000px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
`;

export const CommentsContainer = styled.div `
    max-height: 500px;
    overflow: auto;
    margin-bottom: 20px;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
`;

