import { createSelector } from 'reselect';
import { IComment, IPost } from '../../types';

export const postState = (state: any) => state.postContainer;

export const getPostsList = createSelector(
    postState,
    state => state.posts
)

export const getPostsById = createSelector(
    postState,
    state => {
        const {posts} = state;
        return posts.reduce((acc: {[key:string]:IPost}, post:IPost) => {
            acc[post.id] = post;
            return acc;
        }, {})
    }
);

export const getIsLoading = createSelector(
    postState,
    state => state.loading
)

export const getCommentsByPostId = createSelector(
    postState,
    state => {
        const { comments } = state;
        return comments.reduce((acc: {[key:string]:IComment[]}, comment: IComment) => {
            const { postId } = comment;
            if(acc[postId]){
                acc[postId].push(comment);
            } else {
                acc[postId] = [comment]
            }
            return acc;
        }, {})
    }
);